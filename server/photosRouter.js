// const express = require('express');
import express from 'express';
import Photo from '../database/models/Photo.js';
import photos from '../database/controllers/photos.js';

// import User from '../database/models/User.js';
// import users from '../database/controllers/users.js';
// import albums from '../database/controllers/albums.js';

const photosRouter = express.Router();


// get current users photos
photosRouter.get('/userPhotos', async (req, res) => {
  console.log('userphotos');
  try {
    const userPhotos = await photos.getUserPhotos(req.query.userId);
    res.status(200).send(userPhotos);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get current users friends photos
photosRouter.get('/friendsPhotos', async (req, res) => {
  try {
    const friendPhotos = await photos.getFromFriends(req.body.userId);
    res.status(200).send(friendPhotos);
  } catch (err) {
    res.status(500).send(err);
  }
});

// friends photos + public photos
photosRouter.get('/feed', async (req, res) => {
  try {
    const feedPhotos = await photos.getFeed(req.query.userId);
    res.status(200).send(feedPhotos);
  } catch (err) {
    res.status(500).send(err);
  }
});

// find one and update
photosRouter.patch('/single', async (req, res) => {
  try {
    await photos.updateOne(req.body.photoId);
    res.sendstatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
});

// add tags and change accessLevel for multiple
photosRouter.patch('/multiple', (req, res) => {
  const { photoIds } = req.body;
  try {
    photos.updateMany(photoIds)
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
});

photosRouter.put('/', (req, res) => {
  //upload a new photo (is this the same process for many photos?)
  //this functionality is currently in images route, not sure how we want to handle upload.
  //maybe copy image upload over to here, but at somepoint we need to handle photo information and inserting that to db
  //^^^Brenton has the upload stuff figured out, so may need to coordinate with him briefly
})

photosRouter.delete('/single', async (req, res) => {
  const { userId, photoId } = req.body;
  photos.deleteOne(userId, photoId)
    .then((confirmation) => {
      if (confirmation.deletedCount === 1) {
        res.status(200).send(confirmation);
      } else {
        res.status(400).send(confirmation);
      }
    })
    .catch((err) => { res.status(400).send(err) });
});

photosRouter.delete('/multi', (req, res) => {
  const { userId, photoIds } = req.body;
  photos.deleteMany(userId, photoIds)
    .then((confirmations) => {
      res.status(200).send(confirmations);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

//just for testing
photosRouter.post('/', (req, res) => {
  const testPhoto = new Photo(req.body).save()
    .then((photo) => { res.status(200).send(photo) })
    .catch((err) => { res.status(400).send(err) });
})

export default photosRouter;