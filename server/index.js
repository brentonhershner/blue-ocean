import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import serverConfig from './serverConfig.js';
// import passport from 'passport';
// import cookieParser from 'cookie-parser';

import routes from './router.js';
import kitchenSinkRouter from './routes/kitchenSink.js';

import db from '../database/index.js';

const PORT = serverConfig.PORT;
const app = express();
const corsOptions = {
  origin: "http://localhost:3000"
};

db.on('error', (error) => {
  console.error('mongoose connection error', error);
});

db.once('open', () => {
  console.info('mongoose connected successfully');
});

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/everything', kitchenSinkRouter);
routes(app);

app.use(express.static('build'));
app.use(express.static('public'));

app.listen(PORT, () => {
  console.info(`listening on port ${PORT}`);
});
