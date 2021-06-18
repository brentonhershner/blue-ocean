// const express = require('express');
import express from 'express';
import Photo from '../../database/models/Photo.js';
import photoController from '../../database/controllers/photoController.js';
import path from 'path';
import { readdir } from 'fs/promises';
import multer from 'multer';
import serverConfig from '../serverConfig.js';

const url = 'http://localhost'
const PORT = serverConfig.PORT;

// import users from '../database/controllers/userController.js';
// import albums from '../database/controllers/albumController.js';

const photoRouter = express.Router();

// this is the folder where photos will be saved in the file system
const folderPath = 'imageFolder/'
export const fullPath = path.join(path.resolve(), 'public/', folderPath);

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, fullPath);
  },
  filename: (req, file, cb) => {
    const regex = /:|\./g;
    const timedate = (new Date()).toISOString().replace(regex, '');;
    cb(null, `${timedate}-${file.originalname}`);
  },
});

const multerUpload = multer({
  storage: storageConfig,
  // limits: { fileSize: 2 * 1024 * 1024 }
});

photoRouter.post('/upload', async (req, res, next) => {
  await multerUpload.array('file')(req, res, next)},
  (req,res) => { 
    console.log(req.files[0]);
    console.log(Object.keys(req.files[0]));
    const fullPaths = req.files.map(file => `${url}:${PORT}/${folderPath}${file.filename}`);
    console.log(fullPaths);
    res.status(200).send(fullPaths);
  }
);

photoRouter.get('/all', async (req, res) => {
  try {
    const filenames = await readdir(fullPath);
    const imageUrls = filenames
    .filter((filename) => filename !== '.DS_Store')
    .map((filename) => folderPath + filename)
    // const imageUrls = await cloudStorage.getAllUrls();
    const imageObjects = imageUrls.map(file => {
      return { name: file, url: file, }
    })
    res.status(200).send(imageObjects || []);
  } catch (error) {
    res.status(500).send(error);
  }
});





// get current users photos
photoRouter.get('/userPhotos', async (req, res) => {
  console.log('userphotos');
  try {
    const userPhotos = await photoController.getUserPhotos(req.query.userId);
    res.status(200).send(userPhotos);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get current users friends photos
photoRouter.get('/friendsPhotos', async (req, res) => {
  try {
    const friendPhotos = await photoController.getFromFriends(req.body.userId);
    res.status(200).send(friendPhotos);
  } catch (err) {
    res.status(500).send(err);
  }
});

// friends photos + public photos
photoRouter.get('/feed', async (req, res) => {
  try {
    const feedPhotos = await photoController.getFeed(req.query.userId);
    res.status(200).send(feedPhotos);
  } catch (err) {
    res.status(500).send(err);
  }
});

// find one and update
photoRouter.patch('/single', async (req, res) => {
  try {
    await photoController.updateOne(req.body.photoId);
    res.sendstatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
});

// friends photos + public photos
photoRouter.get('/feed', async (req, res) => {
  try {
    const feedPhotos = await photoController.getFeed(req.query.userId);
    res.status(200).send(feedPhotos);
  } catch (err) {
    res.status(500).send(err);
  }
});

// find one and update
photoRouter.patch('/single', async (req, res) => {
  console.log('server')
  try {
    console.log('data',req.data)
    console.log('body',req.body)
    console.log('query', req.query)
    console.log('params', req.params)
    // await photos.updateOne(req.body.photoId);
    res.sendstatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
});

// add tags and change accessLevel for multiple
photoRouter.patch('/multiple', async (req, res) => {
  const { photoIds } = req.body;
  try {
    photoController.updateMany(photoIds)
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
});

photoRouter.put('/', (req, res) => {
  //upload a new photo (is this the same process for many photos?)
  //this functionality is currently in images route, not sure how we want to handle upload.
  //maybe copy image upload over to here, but at somepoint we need to handle photo information and inserting that to db
  //^^^Brenton has the upload stuff figured out, so may need to coordinate with him briefly
})

photoRouter.delete('/single', async (req, res) => {
  const { userId, photoId } = req.body;
  photoController.deleteOne(userId, photoId)
    .then((confirmation) => {
      if (confirmation.deletedCount === 1) {
        res.status(200).send(confirmation);
      } else {
        res.status(400).send(confirmation);
      }
    })
    .catch((err) => { res.status(400).send(err) });
});

photoRouter.delete('/multi', async (req, res) => {
  const { userId, photoIds } = req.body;
  photoController.deleteMany(userId, photoIds)
    .then((confirmations) => {
      res.status(200).send(confirmations);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

//just for testing
photoRouter.post('/', async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const testPhoto = new Photo(req.body).save()
    .then((photo) => { res.status(200).send(photo) })
    .catch((err) => { res.status(400).send(err) });
})

export default photoRouter;