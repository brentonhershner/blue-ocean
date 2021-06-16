import express from 'express';

import userController from '../../database/controllers/userController.js'

const userRouter = express.Router();

//------------------------------------------------------------------------//
//------------     Friends API's -----------------------------------------//
//========================================================================//
userRouter.put('/friends/request', async (req, res) => {
    try {
        const { currentUser, targetUser } = req.body;
        const currSaveUser = await userController.friendRequest(currentUser, targetUser);
        res.status(200).send(currSaveUser);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});

userRouter.put('/friends/cancelRequest', async (req, res) => {
    try {
        const { currentUser, targetUser } = req.body;
        const currSaveUser = await userController.cancelRequest(currentUser, targetUser)
        //reply with saved current user
        res.status(200).send(currSaveUser);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});

userRouter.put('/friends/accept', async (req, res) => {
    try {
        const { currentUser, targetUser } = req.body;
        const currSaveUser = await userController.acceptFriend(currentUser, targetUser);
        res.status(200).send(currSaveUser);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

userRouter.put('/friends/reject', async (req, res) => {
    try {
        const { currentUser, targetUser } = req.body;
        const currSaveUser = await userController.rejectFriend(currentUser, targetUser);
        res.status(200).send(currSaveUser);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})


//removeFriend
userRouter.put('/friends/remove', async (req, res) => {
    try {
        const { currentUser, targetUser } = req.body;
        const currSaveUser = await userController.removeFriend(currentUser, targetUser)
        res.status(200).send(currSaveUser);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

userRouter.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        // eslint-disable-next-line no-unused-vars
        const doc = await userController.login(username, password, (doc) => {
            console.log('CALLBACK', doc)
            if (doc.password === password) {
                res.status(200).send(doc)
            } else {
                res.send('Invalid Password')
            }
        })

    } catch (err) {
        console.log('error from router', err);
    }
})

//------------------------------------------------------------------------//
//------------     User's API's -----------------------------------------//
//========================================================================//

userRouter.get('/', (req, res) => {
    userController.getInfo(req.body.userId)
        .then((doc) => { res.status(200).send(doc) })
        .catch((err) => { res.status(400).send(err) })
})

userRouter.get('/all', async (req, res) => {
    try {
        const allUsers = await userController.getAll();
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
userRouter.post('/', async (req, res) => {
    try {
        const formData = req.body;
        const doc = await userController.createNew(formData);
        res.status(200).send(doc)
    } catch (err) {
        console.log('Something went wrong: ', err);
        res.status(500).send(err);
    }
})

// get user info
userRouter.get('/info', async (req, res) => {
    console.log('userRouter /info')
    try {
        const info = await userController.getInfo(req.query.userId)
        res.send(info);
    } catch (err) {
        res.status(500).send(err);
    }
})

userRouter.delete('/users', async (req, res) => {
    try {
        const result = await userController.delete(req.body.userId)
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
})

export default userRouter;
