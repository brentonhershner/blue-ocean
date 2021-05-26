
// const express = require('express');
import express, { request } from 'express';
import { Friend, User } from '../database/index.js';

const usersRouter = express.Router();

usersRouter.put('/friends/:action', async (req, res) => {
    const { currentUser, targetUser } = req.body;
    const action = req.params.action;

    const currUser = User.findById(currentUser);
    const targUser = User.findById(targetUser);

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
        reqUser.exec()
        .then((doc) => {
            doc.requested.forEach((friend, index) => {
                if (friend.userName === pendUser.fullName) {
                    doc.requested.splice(index, 1);
                    doc.save();
                }
            })
        })
    }



    if (action === 'request') {
        await currUser.exec()
        .then((doc) => {
            doc.pending.push(targUserObj);
            doc.save();
        })
        await targUser.exec()
        .then((doc) => {
            doc.requested.push(currUserObj);
            doc.save();
        })

    }

    if (action === 'cancelRequest') {
        await removeRequest(targUser, currUser);
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

        await targUser.exec()
        .then((doc) => {
            doc.friends.forEach((friend, index) => {
                if (friend.userName === currUser.fullName) {
                    doc.pending.splice(index, 1);
                    doc.save();
                }
            })
        })

        currUser.exec()
        .then((doc) => {
            res.status(200).send(doc);
        })
    }
});


usersRouter.put('/', (req, res) => {
    const formData = req.body;
    const newUserObj = new User({
        fullName: formData.fullName,
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
})

usersRouter.delete('/', (req, res) => {
    //this is future feature for superusers, providing option to delete a user account
    //don't need to worry about it for Monday
})

export default usersRouter;
