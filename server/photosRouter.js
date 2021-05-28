// const express = require('express');
import express from 'express';
import { Photo } from '../database/index.js';
const photosRouter = express.Router();



photosRouter.get('/allPhotos', (req, res) => {

})


photosRouter.patch('/single', (req, res) => {

});

photosRouter.patch('/multiple', (req, res) => {
    //update specified information on specified photo(s)


  });

photosRouter.put('/', (req, res) => {
    //upload a new photo
    //this functionality is currently in images route, not sure how we want to handle upload.
    //maybe copy image upload over to here, but at somepoint we need to handle photo information and inserting that to db
    //^^^Brenton has the upload stuff figured out, so may need to coordinate with him briefly
})

photosRouter.delete('/single', async (req, res) => {
  const { userId, photoId } = req.body;
  Photo.deleteOne({ownerId: userId, _id: photoId}).exec()
  .then((confirmation) => {
    if (confirmation.deletedCount === 1) {
      res.status(200).send(confirmation);
    } else {
      res.status(400).send(confirmation);
    }
  })
  .catch((err) => {res.status(400).send(err)});
});

photosRouter.delete('/multi', (req, res) => {
  const { userId, photoIds } = req.body;

  Photo.deleteMany({ ownerId: userId, _id: { $in: photoIds}}).exec()
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
  .then((photo) => {res.status(200).send(photo)})
  .catch((err) => {res.status(400).send(err)});
})

export default photosRouter;