import Photo from '../models/Photo.js';
import users from './users.js';

const photos = {};

// get all public photos
photos.getPublic = async () => {
  try {
    const publicPhotos = await Photo.find({ 'accessLevel': 2 })
    return publicPhotos.sort((a, b) => {
      return a.uploadDate - b.uploadDate;
    });
  } catch (err) {
    throw err;
  }
}

// get feed (public and shared by friends)
photos.getFeed = async (userId) => {
  try {
    const publicPhotos = await photos.getPublic();
    const friendPhotos = await photos.getFromFriends(userId);
    return publicPhotos.concat(friendPhotos).sort((a, b) => {
      return a.uploadDate - b.uploadDate;
    });
  } catch (err) {
    throw err;
  }
};

// get photos from specific user
photos.getUserPhotos = async (userId) => {
  try {
    const userPhotos = await Photo.find({})
    return userPhotos.sort((a, b) => {
      return a.uploadDate - b.uploadDate;
    })
  } catch (err) {
    throw err;
  }
};

// get photos from specific user's friends
photos.getSharedPhotos = async (userId) => {
  try {
    const [friends] = await users.getFriends(userId);
    if(!friends || friends.friends) { return []; }
    return Promise.all(friends.friends.map(f => Photo.find({'userId': f} )))
      .then(resolution => resolution.flat()
        .filter(p => p.accessLevel === 1)
        .sort((a, b) => a.uploadDate - b.uploadDate))
  } catch (err) {
    throw err;
  }
};

// update photo
photos.updateOne = async (photoId) => {
  const updatableProps = ['description', 'tags', 'accessLevel'];
  try {
    for (const key in photoId) {
      if (updatableProps.includes(key)) {
        let update = { [key]: photoId[key] };
        await Photo.updateOne({ 'photoId': photoId }, update);
      }
    }
  } catch (err) {
    throw err;
  }
};

// update multiple photos
photos.updateMany = async (photoIds) => {
  const updatableProps = ['tags', 'accessLevel'];
  try {
    photoIds.forEach(async (id) => {
      for (const key in photoIds) {
        if (updatableProps.includes(key)) {
          let update = { [key]: photoIds[key] };
          let updatePhotoQuery = (photoId, update) => Photo.updateOne({ photoId: photoId }, update);
          await updatePhotoQuery(id, update);
        }
      }
    });
  } catch (err) {
    throw err
  }
};

// delete single photo
photos.deleteOne = async (userId, photoId) => {
  try {
    return Photo.deleteOne({ ownerId: userId, _id: photoId }).exec()
  } catch (err) {
    throw err
  }

};

// delete multiple photos
photos.deleteMany = async (userId, photoIds) => {
  try {
    return Photo.deleteMany({ ownerId: userId, _id: { $in: photoIds } }).exec()
  } catch (err) {
    throw err
  }
};

export default photos;
