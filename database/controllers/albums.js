import Album from '../models/Album.js';

const albums = {};

albums.getAll = async (ownerId) => {
  try {
    const allAlbums = await Album.find({ ownerId })
    return allAlbums;
  } catch (err) {
    throw err;
  }
}

albums.new = async (album) => {
  try {
    const newAlbum = await new Album(album).save();
    return newAlbum;
  } catch (err) {
    throw err;
  }
};

albums.update = async (album) => {
  try {
    const { albumId } = album;
    const updatedAlbum = await Album.findById(albumId).exec();
    const updatableProps = ['title', 'description', 'tags', 'accessLevel', 'photoIds'];

    updatableProps.forEach((prop) => {
      if (album[prop]) {
        updatedAlbum[prop] = album[prop]
      }
    })
    const returnAlbum = await updatedAlbum.save();
    return returnAlbum;
  }
  catch (error) {
    throw error;
  }
};

albums.delete = async (albumId) => {
  try {
    const album = await Album
      .deleteOne({ _id: albumId }).exec()
    return album;
  }
  catch (error) {
    throw error;
  }
};

export default albums;