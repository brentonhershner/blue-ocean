<<<<<<< HEAD
// const express = require('express');
import express from 'express';
=======
import express, { request } from 'express';
import { Friend, User } from '../database/index.js';

>>>>>>> started queries
const usersRouter = express.Router();


const fr = new Friend({userName: 'test6'})
// const test = new User({fullName: 'test tester3', friends: []}).save()
User.find({fullName: 'test tester3'})
.exec()
.then((doc) => {console.log('heres the thing', doc)})




usersRouter.put('/friends/:action', (req, res) => {
    const { currentUser, targetUser } = req.body;
    const action = req.params.action;

    const currUser = User.findById(currentUser);
    const targUser = User.findById(targUser);
    
    const removeRequest = () => {
        currUser.find
        //delete targetuser from currentUsers pending
    }


    if (action === 'request') {
        const currUser = new Friend({
            userId: currentUser,
            userName: getUserName(currentUser)
        });

        const targUser = new Friend({
            userId: targetUser,
            userName: getUserName(targetUser)
        });

        User.findById()
        //add targetuser to currentUsers pending
    }

    if (action === 'cancelRequest') {
        removeRequest();
    }

    if (action === 'accept') {
         //add currentUser to targetUsers friends
        //add targetuser to currentusers friends
        removeRequest();
    }

    if (action === 'reject') {
        removeRequest();
    }

    if (action === 'remove') {
         //delete targetUser from currentUsers friends
        //delete currentUser from targetUsers friends
    }


    //find target user
    //find current user
   //  [add/remove] [targetUser] from [currentUsers][actionArray]
   // [add/remove] [currentUser] from [targetusers][actionArray]

   Model.findByIdAndUpdate()
   findOneAndDelete()
    

//    Put ‘/users/friends/:action’
// (note action in parameters will be one of the following:
// 	-’request’
// 	-’cancelRequest’
// 	-’accept’
// 	-’reject’
// 	-’remove’
// )

// Req.body = {
// 	currentUser: userIdNumOfUserLoggedIn,
// 	targetUser: userIdNumOfTargetUser (the user that is being requested/rejected/removed/etc)
// }

});

usersRouter.put('/', (req, res) => {
    //create new user
})

usersRouter.delete('/', (req, res) => {
    //this is future feature for superusers, providing option to delete a user account
    //don't need to worry about it for Monday
})

export default usersRouter;