import express from 'express';

import photos from '../../database/controllers/photos.js';
import users from '../../database/controllers/users.js';
import albums from '../../database/controllers/albums.js';

const kitchenSinkRouter = express.Router();

kitchenSinkRouter.get('/', async (req, res) => {
  console.log('here comes the kitchenSink');

  const keys = ['personalPhotos', 'sharedPhotos', 'publicPhotos', 'personalAlbums', 'sharedAlbums', 'publicAlbums', 'friendsList', 'allUsers'];

  try {

    const userId = req.query.userId;
    const resolvedObj = {};
    Promise.all([
      photos.getUserPhotos(userId),
      photos.getSharedPhotos(userId),
      photos.getPublic(),
      albums.getAll(userId),
      albums.getFriendsAlbums(userId),
      albums.getPublicAlbums(),
      users.getFriendsNames(userId), // add username to this
      users.getAll() // add username to his
    ]).then((resolved) => {
      keys.forEach((k, i) => {
        resolvedObj[k] = resolved[i] || [];
      });
      console.log(resolvedObj);
      res.status(200).send(resolvedObj || {});
    })
  } catch (err) {
    console.error(err);
  }

});




export default kitchenSinkRouter;
