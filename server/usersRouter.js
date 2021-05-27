import express, { request } from 'express';
import { Friend, User } from '../database/index.js';

const usersRouter = express.Router();

//------------------------------------------------------------------------//
//------------     Friends API's -----------------------------------------//
//========================================================================//
usersRouter.put('/friends/request', async (req, res) => {
  try {
    const { currentUser, targetUser } = req.body;
    const currUser = await User.findById(currentUser).exec();
    const targUser = await User.findById(targetUser).exec();

    const currUserObj = {
        userId: currentUser,
        userName: currUser.username
    };
    const targUserObj = {
        userId: targetUser,
        userName: targUser.userName
    };

    targUser.requested.push(currUserObj);
    await targUser.save();
    currUser.pending.push(targUserObj);
    let currSaveUser = await currUser.save()
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
        const currUser = await User.findById(currentUser).exec();
        const targUser = await User.findById(targetUser).exec();
    
        //remove target user from current user's pending array
        currUser.pending.forEach((friend, index) => {
            if (friend.userName === targUser.userName) {
                currUser.pending.splice(index, 1);
            }
        })
        let currSaveUser = await currUser.save()
        
        //remove current user from target user's requested array
        targUser.requested.forEach((friend, index) => {
            if (friend.userName === currUser.userName) {
                targUser.requested.splice(index, 1);
                targUser.save();
            }
        })
        
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
        const currUser = await User.findById(currentUser).exec();
        const targUser = await User.findById(targetUser).exec();
    
        const currUserObj = {
            userId: currentUser,
            userName: currUser.username
        };
        const targUserObj = {
            userId: targetUser,
            userName: targUser.userName
        };
    
        //remove curr user from target users pending array
        targUser.pending.forEach((friend, index) => {
            if (friend.userName === currUser.userName) {
                targUser.pending.splice(index, 1);
            }
        })


        //remove target user from current user's requested array
        currUser.requested.forEach((friend, index) => {
            if (friend.userName === targUser.userName) {
                currUser.requested.splice(index, 1);
            }
        })
        

        

        //add each user to each other's friends arrays
        currUser.friends.push(targUserObj);
        targUser.friends.push(currUserObj);

        //reply with saved curr user
        targUser.save();
        let currSaveUser = await currUser.save();
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
        const currUser = await User.findById(currentUser).exec();
        const targUser = await User.findById(targetUser).exec();
    
        const currUserObj = {
            userId: currentUser,
            userName: currUser.username
        };
        const targUserObj = {
            userId: targetUser,
            userName: targUser.userName
        };
    
        //remove target user from current user's requested array
        currUser.requested.forEach((friend, index) => {
            if (friend.userName === targUser.userName) {
                currUser.requested.splice(index, 1);
            }
        })

        //remove current user from target user's pending array
        targUser.pending.forEach((friend, index) => {
            if (friend.userName === currUser.userName) {
                targUser.pending.splice(index, 1);
            }
        })

        //send back saved current user
        targUser.save();
        let currSaveUser = await currUser.save();
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
        const currUser = await User.findById(currentUser).exec();
        const targUser = await User.findById(targetUser).exec();
    
    
        //remove current user from target user's friends array
        targUser.friends.forEach((friend, index) => {
            if (friend.userName === currUser.userName) {
                targUser.friends.splice(index, 1);
            }
        });

        //remove target user from current user's friends array
        currUser.friends.forEach((friend, index) => {
            if (friend.userName === targUser.userName) {
                currUser.friends.splice(index, 1);
            }
        });

        //send back saved current user
        targUser.save();
        let currSaveUser = await currUser.save();
        res.status(200).send(currSaveUser);

      }
      catch (err) {
        console.log(err);
        res.status(400).send(err);
      }

})

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

//------------------------------------------------------------------------//
//------------     User's API's -----------------------------------------//
//========================================================================//

usersRouter.get('/', (req, res) => {
    User.findById(req.body.userId).exec()
    .then((doc) => {res.status(200).send(doc)})
    .catch((err) => {res.status(400).send(err)})
})

usersRouter.get('/all', (req, res) => {
    const allUsers = [];
    User.find({}).exec()
    .then((allUserDocs) => {
        allUserDocs.forEach((user) => {
            const userObj = {
                userName: user.userName,
                userId: user._id
            };
            allUsers.push(userObj)
        })
    })
    .then(()=>{
        res.status(200).send(allUsers);
    })
    .catch((err) => {
        res.status(400).send(err);
    })
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

//CREATE NEW USER
usersRouter.post('/', (req, res) => {
    const formData = req.body;
    console.log(formData);
    const newUserObj = new User({
        fullName: `${formData.first_name} ${formData.last_name}`,
        userName: formData.username,
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
    //need to setup some sort of authentication to verify not just anyone can delete user account
    res.send('sorry, my planning skills weren\'t good enough to get this functionality implemented yet');
})

export default usersRouter;
