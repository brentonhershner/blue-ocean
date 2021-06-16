import Photo from '../models/Photo.js';
import userController from './userController.js';

const photoController = {};

// get all public photos
photoController.getPublic = async () => {
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
photoController.getFeed = async (userId) => {
  try {
    const publicPhotos = await photoController.getPublic();
    const friendPhotos = await photoController.getFromFriends(userId);
    return publicPhotos.concat(friendPhotos).sort((a, b) => {
      return a.uploadDate - b.uploadDate;
    });
  } catch (err) {
    throw err;
  }
};

// get photos from specific user
photoController.getUserPhotos = async (userId) => {
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
photoController.getSharedPhotos = async (userId) => {
  try {
    const [friends] = await userController.getFriends(userId);
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
photoController.updateOne = async (photoId) => {
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
photoController.updateMany = async (photoIds) => {
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
photoController.deleteOne = async (userId, photoId) => {
  try {
    return Photo.deleteOne({ ownerId: userId, _id: photoId }).exec()
  } catch (err) {
    throw err
  }
};

// delete multiple photos
photoController.deleteMany = async (userId, photoIds) => {
  try {
    return Photo.deleteMany({ ownerId: userId, _id: { $in: photoIds } }).exec()
  } catch (err) {
    throw err
  }
};

photoController.savePhotoData = (req, res, next) => {
  const userId = req.body.userId?.toString();


  req.files.forEach((photo) => {
    try {

      new Photo({
        photoId: photo.key,
        ownerId: userId,
        uploadDate: new Date().toISOString(),
        description: '',
        tags: [],
        accessLevel: 0,  /* 0=private, [1=select friends(futureFeature)], 2=all friends, [3=global(futureFeature)] */
        url: photo.location,
      }).save();
    } catch (error) {
      throw error;
    }
  })

  if (req.files === undefined) {
    res.status(400).send({ message: "Please upload a file!" });
  }

  res.status(200).send({
    message: "Uploaded the file successfully: " + req.files,
  });
}

export default photoController;
