// import Router from 'express-promise-router';
import path from 'path';
import { readdir } from 'fs/promises';
import multer from 'multer';

const images = {};

const folderPath = 'imageFolder/testImages/'
const fullPath = path.join(path.resolve(), 'public/', folderPath);

images.getImageList = async (req, res) => {
  try {
    const fileList = await readdir(fullPath);
    res.status(200).send(fileList.map(file => {
      return {
        name: file,
        url: folderPath + file,
      }
    }));
  } catch (error) {
    res.status(500).send(error);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, fullPath);
  },
  filename: (req, file, cb) => {
    const regex = /:|\./g;
    const timedate = (new Date()).toISOString().replace(regex, '');;
    cb(null, `${timedate}-${file.originalname}`);
  },
});

const uploadFile = multer({
  storage,
  // limits: { fileSize: 2 * 1024 * 1024 }
}).array('file');

images.upload = async (req, res, next) => {
  try {
    await uploadFile(req, res, next);
    if (req.files === undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    console.log('success');
    res.status(200).send({
      message: "Uploaded the file successfully: " + req.files,
    });
  } catch {
    res.status(500).send({
      message: `Could not upload the file: ${req.files}.`,
    });
  }
};

export default images;
