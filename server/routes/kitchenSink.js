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
    const promises = Promise.all([
      photos.getUserPhotos(userId),
      // photos.getSharedPhotos(userId), // TODO:
      photos.getPublic(),
      albums.getAll(userId),
      // albums.getShared(userId), // TODO:
      // albums.getPublic(), // Needs work
      users.getFriends(userId),
      users.getAll()
    ]).then((resolved) => {
      // console.log(resolved);
      // keys.forEach((k, i) => {
      //   resolvedObj[k] = promises[i];
      // });
      // console.log(resolvedObj);
      res.status(200).send(resolved);
      // res.status(200).send(resolvedObj);
    })
  } catch (err) {
    console.error(err);
  }

});

// node ./server/routes/kitchenSink.js

// ).then((resolved) => {

// res.status(200).send(resolvedObj);
// })

// res.status(200).send(userPhotos);
// } catch (err) {
// res.status(500).send(err);
// }
// );

export default kitchenSinkRouter;
