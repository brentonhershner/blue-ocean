import User from '../models/User.js';

const users = {};

// get user info
users.getInfo = async (userId) => {
  try {
    const [userInfo] = await User.find({ 'userId': userId }).exec();
    return userInfo
  } catch (err) {
    throw err;
  }
};


// get friends list
users.getFriends = async (userId) => {
  return User.find({ 'userId': userId }).select('friends');
};


// friend request
users.friendRequest = async (currentUser, targetUser) => {
  try {
    const currUser = await User.find({'userId': currentUser}).exec();
    const targUser = await User.find({'userId': targetUser}).exec();

    const currUserObj = {
      userId: currentUser,
      userName: currUser.userName
    };
    const targUserObj = {
      userId: targetUser,
      userName: targUser.userName
    };

    targUser.requested.push(currUserObj);
    await targUser.save();
    currUser.pending.push(targUserObj);
    let currSaveUser = await currUser.save()
    return currSaveUser;
  }
  catch (err) {
    throw err
  }
};

users.cancelRequest = async (currentUser, targetUser) => {
  try {
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
    return currSaveUser;
  }
  catch (err) {
    throw err;
  }
};


users.acceptFriend = async (currentUser, targetUser) => {
  try {
    const currUser = await User.findById(currentUser).exec();
    const targUser = await User.findById(targetUser).exec();
    const currUserObj = {
      userId: currentUser,
      userName: currUser.userName
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
    return currSaveUser;
  }
  catch (err) {
    throw err;
  }
}

users.rejectFriend = async (currentUser, targetUser) => {
  try {
    const currUser = await User.findById(currentUser).exec();
    const targUser = await User.findById(targetUser).exec();

    const currUserObj = {
      userId: currentUser,
      userName: currUser.userName
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
    return currSaveUser;

  }
  catch (err) {
    console.log(err);
    throw err;
  }
}


//removeFriend 
users.removeFriend = async (currentUser, targetUser) => {
  try {
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
    return currSaveUser;

  }
  catch (err) {
    console.log(err);
    throw err;
  }
};

users.login = (username, password) => {
  User.findOne(username)
    .then((doc) => {
      if (doc.password === password) {
        return doc;
      } else {
        return 'Invalid Password';
      }
    })
    .catch((err) => {
      throw err;
    });
};


users.getAll = async () => {
  try {
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
    return allUsers;
  } catch (err) {
    throw err
  }
}


//CREATE NEW USER
users.createNew = async (formData) => {
  // console.log(formData);
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
  return signUp.save()
    .then((doc) => doc)
    .catch((err) => err)
}

users.delete = (userID) => {
  //this is future feature for superusers, providing option to delete a user account
  //need to setup some sort of authentication to verify not just anyone can delete user account
  return 'sorry, my planning skills weren\'t good enough to get this functionality implemented yet';
}

export default users;