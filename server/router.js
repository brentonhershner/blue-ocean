import albums from './routes/albumRouter.js';
import photoRouter from './routes/photoRouter.js';
import userRouter from './routes/userRouter.js';

const routes = (app) => {
  app.use('/api/albums', albums);
  app.use('/api/photos', photoRouter);
  app.use('/api/users', userRouter);
}

export default routes;
