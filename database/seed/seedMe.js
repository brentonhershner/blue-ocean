import dummy from './dummy.js';
import mongoose from 'mongoose';
import User from '../models/User.js';
import Photo from '../models/Photo.js';

mongoose.connect('mongodb://localhost/blueocean', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userCount = 100;

const pad = (num, size) => {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

const randFriends = (upTo, userCount) => {
  const numberOfFriends = Math.floor(Math.random() * upTo);
  const friends = [];
  for (let i = 0; i <= numberOfFriends; i += 1) {
    friends.push(pad(Math.floor(Math.random() * userCount) + 1, 5))
  }
  return friends;
}

const fillNames = () => {
  for (let i = 1; i < userCount; i++) {
    // dummy.names.slice(-userCount).forEach((name, i) => {
    try {
      const userId = pad(i, 5);
      const fullName = dummy.names[Math.floor(Math.random() * dummy.names.length)];
      const email = fullName.replace(' ', '').concat('@email.com');
      const password = 'qwerty';
      const userLevel = 1;
      const friends = randFriends(15, userCount);
      const pending = randFriends(4, userCount);
      const requested = randFriends(4, userCount);
      const newUserData = {
        userId,
        fullName,
        email,
        password,
        userLevel,
        friends,
        pending,
        requested
      };
      // const timeout = i * 10;
      // setTimeout(() => {
        console.log(newUserData);
        new User(newUserData).save()
      // }, timeout)
    } catch {
      console.error('oops');
    }
  };
}

const randTags = (upTo) => {
  const tagCount = Math.floor(Math.random() * upTo);
  const tags = [];
  for (let i = 0; i <= tagCount; i += 1) {
    tags.push(dummy.tags[Math.floor(Math.random() * dummy.tags.length)])
  }
  return tags;
}

const fillPhotos = () => {
  dummy.photos.forEach((photo, i) => {
    try {
      const userId = pad(i, 5);
      const username = dummy.names[Math.floor(Math.random() * dummy.names.length)]
      const photoId = pad(i, 5);
      const uploadDate = photo.split('images/')[1].split('Z')[0].concat('Z');
      //2021-05-27T082635378Z
      const description = dummy.descriptions[Math.floor(Math.random() * dummy.descriptions.length)];
      const tags = Array.from(new Set(randTags(5)));
      const accessLevel = Math.floor(Math.random() * 3);
      const url = photo;
      const newPhotoData = {
        photoId,
        username,
        userId,
        uploadDate,
        description,
        tags,
        accessLevel,
        url
      };

      const timeout = i * 10;
      setTimeout(() => {
        console.log(newPhotoData);
        new Photo(newPhotoData).save()
      }, timeout)
    } catch {
      console.error('oops');
    }
  });
}


const connection = mongoose.connection;
connection.once("open", async function() {
  console.log("MongoDB connected successfully");
  await connection.db.listCollections().toArray(function(err, names) {
    if (err) {
      console.log(err);
    } else {
      names.forEach((name) => {
        mongoose.connection.db.dropCollection(name.name, function(err, result) {
          console.log(`${name.name} dropped`);
        })
      })
    }
  });
  setTimeout(() => {
    fillNames();
    fillPhotos();
  }, 1000)
});



