import Photo from '../models/Photo.js';

const photoController = {};

photoController.savePhotoData = (req, res, next) => {
  const userId = req.body.userId.toString();


  req.files.forEach((photo) => {
    try {

      new Photo({
        photoId: photo.key,
        ownerId: userId,
        uploadDate: new Date().toISOString(),
        description: '',
        tags: [],
        accessLevel: 0,  /* 0=private, [1=select friends(futureFeature)], 2=all friends, [3=global(futureFeature)] */
        url: photo.location,
      }).save();
    } catch (error) {
      throw error;
    }
  })

  if (req.files === undefined) {
    res.status(400).send({ message: "Please upload a file!" });
  }

  res.status(200).send({
    message: "Uploaded the file successfully: " + req.files,
  });
}

export default photoController;