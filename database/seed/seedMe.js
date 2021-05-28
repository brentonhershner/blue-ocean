import dummy from './dummy.js';
import mongoose from 'mongoose';
import { User, Photo } from '../index.js';

mongoose.connect('mongodb://localhost/blueocean', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userCount = 20 // don't go more than 100

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
  dummy.names.slice(-userCount).forEach((name, i) => {
    try {
      const userName = pad(i, 5);
      const fullName = name;
      const email = name.replace(' ', '').concat('@email.com');
      const password = 'qwerty';
      const userLevel = 1;
      // const friends = randFriends(15, userCount);
      // const pending = randFriends(4, userCount);
      // const requested = randFriends(4, userCount);
      const newUserData = {
        // userName,
        fullName,
        email,
        password,
        userLevel,
        // friends,
        // pending,
        // requested
      };
      const timeout = i * 10;
      setTimeout(() => {
        console.log(newUserData);
        new User(newUserData).save()
      }, timeout)
    } catch {
      console.error('oops');
    }
  });
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
      const photoId = pad(i, 5);
      const ownerId = pad(Math.floor(Math.random() * userCount), 5);
      const uploadDate = photo.split('images/')[1].split('Z')[0].concat('Z');
      //2021-05-27T082635378Z
      const description = dummy.descriptions[Math.floor(Math.random() * dummy.descriptions.length)];
      const tags = Array.from(new Set(randTags(5)));
      const accessLevel = 0
      const url = photo;
      const newPhotoData = {
        photoId,
        ownerId,
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

  fillNames();
  fillPhotos();
});



