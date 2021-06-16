import Album from '../models/Album.js';
import User from '../models/User.js';

const albumController = {};

albumController.getAll = async (ownerId) => {
  try {
    const allAlbums = await Album.find({ ownerId })
    return allAlbums;
  } catch (err) {
    throw err;
  }
}

albumController.getFriendsAlbums = async (userId) => {
  try {
    const user = await User.findOne({'userId': userId}).exec()
    // const friendsIds = [];
    // user.friends.forEach((friend) => {
    //   friendsIds.push(friend.userId);
    // });
    const friendsAlbums = await Album.find({ accessLevel: 1, ownerId: { $in: userId.friends } }) || [];
    return friendsAlbums;
  }
  catch(err) {
    throw err;
  }
}

albumController.getPublicAlbums = async () => {
  try {
    const publicAlbums = await Album.find({accessLevel: 2}).exec()
    return publicAlbums;
  }
  catch(err) {
    throw err;
  }
};


albumController.new = async (album) => {
  try {
    const newAlbum = await new Album(album).save();
    return newAlbum;
  } catch (err) {
    throw err;
  }
};

albumController.update = async (album) => {
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

albumController.delete = async (albumId) => {
  try {
    const album = await Album
      .deleteOne({ _id: albumId }).exec()
    return album;
  }
  catch (error) {
    throw error;
  }
};

export default albumController;