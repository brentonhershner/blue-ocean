import Album from '../models/Album.js';
import User from '../models/User.js';

const albums = {};

albums.getAll = async (ownerId) => {
  try {
    const allAlbums = await Album.find({ ownerId })
    return allAlbums;
  } catch (err) {
    throw err;
  }
}

albums.getFriendsAlbums = async (userId) => {
  try {
    const user = await User.findById(userId).exec()
    const friendsIds = [];
    user.friends.forEach((friend) => {
      friendsIds.push(friend.userId);
    });
    const friendsAlbums = await Album.find({ accessLevel: 1, ownerId: { $in: friendsIds } });
    return friendsAlbums;
  }
  catch(err) {
    throw err;
  }
}

albums.getPublicAlbums = async () => {
  try {
    const publicAlbums = await Album.find({accessLevel: 2}).exec()
    return publicAlbums;
  }
  catch(err) {
    throw err;
  }
};


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