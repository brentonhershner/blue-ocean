import express, {
    // request
} from 'express';
import Photo from '../database/models/Photo.js';
import User from '../database/models/User.js';

import users from '../database/controllers/users.js'


const usersRouter = express.Router();

//------------------------------------------------------------------------//
//------------     Friends API's -----------------------------------------//
//========================================================================//
usersRouter.put('/friends/request', async (req, res) => {
    try {
        const { currentUser, targetUser } = req.body;
        const currSaveUser = await users.friendRequest(currentUser, targetUser);
        res.status(200).send(currSaveUser);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});


usersRouter.put('/friends/cancelRequest', async (req, res) => {
    try {
        const { currentUser, targetUser } = req.body;
        const currSaveUser = await users.cancelRequest(currentUser, targetUser)
        //reply with saved current user
        res.status(200).send(currSaveUser);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});

usersRouter.put('/friends/accept', async (req, res) => {
    try {
        const { currentUser, targetUser } = req.body;
        const currSaveUser = await users.acceptFriend(currentUser, targetUser);
        res.status(200).send(currSaveUser);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

usersRouter.put('/friends/reject', async (req, res) => {
    try {
        const { currentUser, targetUser } = req.body;
        const currSaveUser = await users.rejectFriend(currentUser, targetUser);
        res.status(200).send(currSaveUser);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})


//removeFriend 
usersRouter.put('/friends/remove', async (req, res) => {
    try {
        const { currentUser, targetUser } = req.body;
        const currSaveUser = await users.removeFriend(currentUser, targetUser)
        res.status(200).send(currSaveUser);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

usersRouter.get('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const doc = await users.login(username, password);
        if (doc.password === password) {
            res.status(200).send(doc)
        } else {
            res.send('Invalid Password')
        }
    } catch (err) {
        res.status(500).send(err)
    }
})

//------------------------------------------------------------------------//
//------------     User's API's -----------------------------------------//
//========================================================================//

usersRouter.get('/', (req, res) => {
    users.getInfo(req.body.userId)
        .then((doc) => { res.status(200).send(doc) })
        .catch((err) => { res.status(400).send(err) })
})

usersRouter.get('/all', async (req, res) => {
    try {
        const allUsers = await users.getAll();
        res.status(200).send(allUsers);
    } catch (err) {
        res.status(400).send(err);
    }
});

// usersRouter.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     User.findOne({ userName: username }).exec()
//         .then((doc) => {
//             // if (doc.password === password) {
//             console.log('this is the doc found', doc);
//             console.log('username from backedn', username)
//             res.status(200).send(doc)
//             // } else {
//             //     res.send('Invalid Password')
//             // }
//         })
//         .catch((err) => {
//             res.status(500).send(err)
//         });
// })

//CREATE NEW USER
usersRouter.get('/', async (req, res) => {
    try {
        const formData = req.body;
        const doc = await users.createNew(formData);
        res.status(200).send(doc)
    } catch (err) {
        console.log('Something went wrong: ', err);
        res.status(500).send(err);
    }
})

// get user info
usersRouter.get('/info', async (req, res) => {
    try {
        const info = await users.getInfo(req.query.userId)
        res.send(info);
    } catch (err) {
        res.status(500).send(err);
    }
})

usersRouter.delete('/users', async (req, res) => {
    try {
        const result = await users.delete(req.body.userId)
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
})



export default usersRouter;
