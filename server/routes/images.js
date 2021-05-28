// import Router from 'express-promise-router';
import path from 'path';
// import { readdir } from 'fs/promises';
import aws from "aws-sdk";
import multer from 'multer';
import multerS3 from 'multer-s3';
import config from '../../config.js';

import cloudStorage from '../../database/controllers/cloudStorage.js';

const images = {};

const folderPath = 'imageFolder/testImages/'
const fullPath = path.join(path.resolve(), 'public/', folderPath);

const s3 = new aws.S3(config.aws);

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

images.multerUpload = multer({
  storage: storageConfig,
  // limits: { fileSize: 2 * 1024 * 1024 }
});

images.multerS3Upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: config.aws.Bucket,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function(req, file, cb) {
      cb(null, {
        fieldName: file.fieldname,
      });
    },
    key: function(req, file, cb) {
      const regex = /:|\./g;
      const timedate = (new Date()).toISOString().replace(regex, '');
      cb(null, `images/${timedate}-${file.originalname}`);
    }
  })
});

images.getImageList = async (req, res) => {
  try {
    // const filenames = await readdir(fullPath);
    // const imageUrls = filenames
    //   .filter((filename) => filename !== '.DS_Store')
    //   .map((filename) => folderPath + filename)
    const imageUrls = await cloudStorage.getAllUrls();

    const imageObjects = imageUrls.map(file => {
      return { name: file, url: file, }
    })
    res.status(200).send(imageObjects);
  } catch (error) {
    res.status(500).send(error);
  }
};

// images.upload = async (req, res, next) => {
//   console.log("🚀 ~ file: images.js ~ line 68 ~ images.upload= ~ req", Object.keys(req))
//   await images.multerS3Upload.array('file')(req, res, next);
//   console.log(Object.keys(req))
//   console.log(req.files);
//   next();
// };


export default images;
