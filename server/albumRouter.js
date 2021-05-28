import express, { request } from 'express';
import { Album } from '../database/index.js';

const albumRouter = express.Router();


//--------- Get all albums by User ------------//
albumRouter.get('/', async (req, res) => {
    try {
        var allAlbums = await Album.find({ownerId: req.body.userId})
        res.status(200).send(allAlbums);
    }
    catch (error) {
        res.status(400).send(error);
    }
});

// ----------------------- Create a new Album -------------//
albumRouter.post('/', async (req, res) => {
    try {
      const regex = /:|\./g;
      const timedate = (new Date()).toISOString().replace(regex, '');
      const newAlbum = await new Album({
          ...req.body,
          uploadDate: timedate
      }).save();
      res.status(200).send(newAlbum);
    }
    
    catch (err) {
      res.status(400).send(err);
    }
});

//------------Update an Album ---------------------//
albumRouter.patch('/', async (req, res) => {
    try {
        const updatableProps = ['title', 'description', 'tags', 'accessLevel', 'photoIds'];
        const albumId = req.body.albumId;
        const updatedAlbum = await Album.findById(albumId).exec();
            
        updatableProps.forEach((prop) => {
            if (req.body[prop]) {
                updatedAlbum[prop] = req.body[prop]
            }
        })
        const returnAlbum = await updatedAlbum.save();
        res.status(200).send(returnAlbum);
    }
    catch(error) {
        res.status(400).send(error);
    }
});

//----------- Delete an Album -----------//
albumRouter.delete('/', (req, res) => {
  try{
    Album.deleteOne({_id: req.body.albumId}).exec()
    .then((album) => {
      res.status(200).send(album)
    })
  }
  catch(error) {
    res.status(400).send(error);
  }
});






export default albumRouter;