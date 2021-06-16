import express from 'express';

import photoController from '../../database/controllers/photoController.js';
import userController from '../../database/controllers/userController.js';
import albumController from '../../database/controllers/albumController.js';

const kitchenSinkRouter = express.Router();

kitchenSinkRouter.get('/', async (req, res) => {
  console.log('here comes the kitchenSink');

  const keys = ['personalPhotos', 'sharedPhotos', 'publicPhotos', 'personalAlbums', 'sharedAlbums', 'publicAlbums', 'friendsList', 'allUsers'];

  try {

    const userId = req.query.userId;
    const resolvedObj = {};
    Promise.all([
      photoController.getUserPhotos(userId),
      photoController.getSharedPhotos(userId),
      photoController.getPublic(),
      albumController.getAll(userId),
      albumController.getFriendsAlbums(userId),
      albumController.getPublicAlbums(),
      userController.getFriendsNames(userId), // add username to this
      userController.getAll() // add username to his
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
