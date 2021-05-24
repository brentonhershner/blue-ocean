// import Router from 'express-promise-router';
import path from 'path';
import { readdir } from 'fs/promises';
import multer from 'multer';

const images = {};

const folderPath = 'imageFolder/testImages/'
const fullPath = path.join(path.resolve(), 'public/', folderPath);
console.log(fullPath);

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
    cb(null, `${file.fieldname}-${timedate}.jpeg`);
  },
});

const uploadFile = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }
}).single("file");

images.upload = async (req, res, next) => {
  try {
    await uploadFile(req, res, next);
    if (req.file === undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    console.log('success');
    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.name,
    });
  } catch {
    const err = 'error'
    console.log('error');
    // console.error(err);
    res.status(500).send({
      message: `Could not upload the file: ${req.file.name}. ${err}`,
    });
  }
};




// const uploadFileMiddleware = util.promisify(uploadFile);


// images.upload = (async (req, res, next) => {
//   console.log('/api/images');
//   var imageData = Buffer.alloc(0);
//   req.on('data', (chunk) => {
//     imageData = Buffer.concat([imageData, chunk]);
//   });
//   req.on('end', () => {
//     var file = multipart.getFile(imageData);
//     fs.writeFile(folderPath, file.data, (err) => {
//       res.writeHead(err ? 400 : 201, headers);
//       res.end();
//       next();
//     });
//   });
// });

export default images;
