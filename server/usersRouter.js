import express, { request } from 'express';
import { Friend, User } from '../database/index.js';

const usersRouter = express.Router();

usersRouter.put('/friends/:action', async (req, res) => {
    const { currentUser, targetUser } = req.body;
    const action = req.params.action;

    const errors = [];
    const currUser = User.findById(currentUser);
    const targUser = User.findById(targetUser);


    console.log('curr user test', )
    const currUserObj = new Friend({
        userId: currentUser,
        userName: currUser.fullName
    });
    const targUserObj = new Friend({
        userId: targetUser,
        userName: targUser.fullName
    });



    const removeRequest = (reqUser, pendUser) => {
        pendUser.exec()
        .then((doc) => {
            doc.pending.forEach((friend, index) => {
                if (friend.userName === reqUser.fullName) {
                    doc.pending.splice(index, 1);
                    doc.save();
                }
            })
        })
        .catch((err) => {console.log(err)})
        reqUser.exec()
        .then((doc) => {
            doc.requested.forEach((friend, index) => {
                if (friend.userName === pendUser.fullName) {
                    doc.requested.splice(index, 1);
                    doc.save();
                }
            })
        })
        .catch((err) => {
            console.log(err);
        })
    };

    const sendUserUpdate = () => {
        currUser.exec()
        .then((doc) => {
            console.log('THE RESULT', doc);
            res.status(200).send(doc);
        })
        .catch((err) => {
            res.status(400).send(err);
        })
    };



    if (action === 'request') {
        await currUser.exec()
        .then((doc) => {
            console.log('found this from request', doc)
            doc.pending.push(targUserObj);
            doc.save();
        })
        .catch((err) => {
            console.log(err);
        })
        await targUser.exec()
        .then((doc) => {
            doc.requested.push(currUserObj);
            doc.save();
        })
        .catch((err) => {
            console.log(err);
        })
        sendUserUpdate();
    }

    if (action === 'cancelRequest') {
        await removeRequest(targUser, currUser);
        sendUserUpdate();
    }

    if (action === 'accept') {
        await currUser.exec()
        .then((doc) => {
            doc.friends.push(targUserObj);
            doc.save();
        })

       await targUser.exec()
        .then((doc) => {
            doc.friends.push(currUserObj);
            doc.save();
        })
        await removeRequest(currUser, targUser);
        sendUserUpdate();
    }

    if (action === 'reject') {
       await removeRequest(currUser, targUser);
    }

    if (action === 'remove') {
       await currUser.exec()
        .then((doc) => {
            doc.friends.forEach((friend, index) => {
                if (friend.userName === targUser.fullName) {
                    doc.pending.splice(index, 1);
                    doc.save();
                }
            })
        })
        .catch((err) => {
            console.log(err);
        })

        await targUser.exec()
        .then((doc) => {
            doc.friends.forEach((friend, index) => {
                if (friend.userName === currUser.fullName) {
                    doc.pending.splice(index, 1);
                    doc.save();
                }
            })
        })
        .catch((err) => {
            console.log(err);
        })

        sendUserUpdate();
    }
});

usersRouter.get('/login', (req, res) => {
    const { username, password } = req.body;
    User.findOne(username)
    .then((doc) => {
        if (doc.password === password) {
            res.status(200).send(doc)
        } else {
            res.send('Invalid Password')
        }
    })
    .catch((err) => {
        res.status(500).send(err)
    });
})

usersRouter.post('/', (req, res) => {
    const formData = req.body;
    console.log(formData);
    const newUserObj = new User({
        fullName: `${formData.first_name} ${formData.last_name}`,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        userLevel: 1,
        friends: [],
        pending: [],
        requested: []
    });
    const signUp = new User(newUserObj)
    signUp.save()
    .then((doc) => {res.status(200).send(doc)})
    .catch((err) => {console.log('Something went wrong: ', err); res.status(500).send(err)})
})

usersRouter.delete('/users', (req, res) => {
    //this is future feature for superusers, providing option to delete a user account
    //don't need to worry about it for Monday
})

export default usersRouter;