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

// get friends list with usernames
users.getFriendsNames = async (userId) => {
  const friends = await users.getFriends(userId);
  return Promise.all(friends.map(f => {
    return User.find({ 'userId': f }).select('userId', 'username')
  }));
};


// friend request
users.friendRequest = async (currentUser, targetUser) => {

  try {
    const [currUser] = await User.find({ 'userId': currentUser }).exec();
    const [targUser] = await User.find({ 'userId': targetUser }).exec();

    targUser.requested.push(currUser.userId);
    await targUser.save();
    currUser.pending.push(targUser.userId);
    let currSaveUser = await currUser.save()
    return currSaveUser;
  }
  catch (err) {
    throw err
  }
};

users.cancelRequest = async (currentUser, targetUser) => {
  try {
    const [currUser] = await User.find({ 'userId': currentUser }).exec();
    const [targUser] = await User.find({ 'userId': targetUser }).exec();

    //remove target user from current user's pending array
    currUser.pending.pull(targUser.userId);
    let currSaveUser = await currUser.save();

    //remove current user from target user's requested array
    targUser.requested.pull(currUser.userId);
    targUser.save();

    //reply with saved current user
    return currSaveUser;
  }
  catch (err) {
    throw err;
  }
};

users.acceptFriend = async (currentUser, targetUser) => {
  try {

    const [currUser] = await User.find({ 'userId': currentUser }).exec();
    const [targUser] = await User.find({ 'userId': targetUser }).exec();

    if (!targUser.pending.includes(currUser.userId)) { return currUser; }

    //remove curr user from target users pending array
    targUser.pending.pull(currUser.userId);

    //remove target user from current user's requested array
    currUser.pending.pull(targUser.userId);

    //add each user to each other's friends arrays
    currUser.friends.push(targUser.userId);
    targUser.friends.push(currUser.userId);
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
    const [currUser] = await User.find({ 'userId': currentUser }).exec();
    const [targUser] = await User.find({ 'userId': targetUser }).exec();

    if (!currUser.pending.includes(targUser.userId)) { return currUser; }

    //remove target user from current user's requested array
    currUser.requested.pull(targUser.userId);

    //remove current user from target user's pending array
    targUser.pending.pull(currUser.userId);

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

users.login = (username, password, cb) => {
  User.findOne({ userName: username }).exec()
    .then((doc) => {
      if (doc.password === password) {
        cb(doc)
      } else {
        return 'Invalid Password';
      }
    })
    .catch((err) => {
      console.log('error from controller', err)
    });
};


users.getAll = async () => {
  try {
    const allUsers = await User.find({}).exec()
    console.log(allUsers);
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