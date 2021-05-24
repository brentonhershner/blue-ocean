import express from 'express';
const usersRouter = express.Router();

usersRouter.put('/friends/:action', (req, res) => {
    //action will be request a userId to be friend, cancelRequest to a userId, accept a request from a userId, reject a request from user id,
    //or remove an existing friend
    //So overall: 'request', 'cancelRequest', 'accept', 'reject', 'remove' will be different parameter routes
});

usersRouter.put('/', (req, res) => {
    //create new user
})

usersRouter.delete('/', (req, res) => {
    //this is future feature for superusers, providing option to delete a user account
    //don't need to worry about it for Monday
})

export default usersRouter;