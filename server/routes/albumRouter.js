import express from 'express';
// import Album from '../../database/models/Album.js';
import albumController from '../../database/controllers/albumController.js';

const albumRouter = express.Router();


//--------- Get all albums by User ------------//
albumRouter.get('/', async (req, res) => {
  try {
    const allAlbums = await albumController.getAll(req.query.userId);
    res.status(200).send(allAlbums);
  }
  catch (error) {
    res.status(400).send(error);
  }
});

//--------- Get Friends' Albums ------------//
albumRouter.get('/friends', async (req, res) => {
  try {
    const friendsAlbums = await albumController.getFriendsAlbums(req.query.userId);
    res.status(200).send(friendsAlbums);
  }
  catch (error) {
    res.status(400).send(error);
  }
})

//--------- Get Public Albums ------------//
albumRouter.get('/public', async (req, res) => {
  try {
    const publicAlbums = await albumController.getPublicAlbums();
    res.status(200).send(publicAlbums);
  }
  catch (error) {
    res.status(400).send(error);
  }
})

// ----------------------- Create a new Album -------------//
albumRouter.post('/', async (req, res) => {
  try {
    const regex = /:|\./g;
    const timedate = (new Date()).toISOString().replace(regex, '');
    const newAlbum = await albumController.new({
      ...req.body,
      uploadDate: timedate
    });
    res.status(200).send(newAlbum);
  }
  catch (err) {
    res.status(400).send(err);
  }
});

//------------Update an Album ---------------------//
albumRouter.patch('/', async (req, res) => {
  try {
    const album = req.body;
    const returnAlbum = await albumController.update(album);

    res.status(200).send(returnAlbum);
  }
  catch (error) {
    res.status(400).send(error);
  }
});

//----------- Delete an Album -----------//
albumRouter.delete('/', async (req, res) => {
  try {
    const album = await albumController.delete(req.body.albumId)
    res.status(200).send(album)
  }
  catch (error) {
    res.status(400).send(error);
  }
});

export default albumRouter;