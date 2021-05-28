import express from 'express';

import images from './routes/images.js';
import photoController from '../database/controllers/photoController.js';

const router = express.Router();
const users = express.Router();
const photos = express.Router();



const routes = (app) => {
  router.get('/api/images/list', images.getImageList);
  router.post('/api/images/upload',
    images.multerS3Upload.array('file'),
    photoController.savePhotoData
  );

  app.use(router);
}

export default routes;
