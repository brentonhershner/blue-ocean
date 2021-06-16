import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// import passport from 'passport';
// import cookieParser from 'cookie-parser';

import routes from './router.js';
import kitchenSinkRouter from './routes/kitchenSink.js';

import db from '../database/index.js';

db.on('error', (error) => {
  console.error('mongoose connection error', error);
});

db.once('open', () => {
  console.info('mongoose connected successfully');
});

const PORT = 3001;
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/everything', kitchenSinkRouter);
routes(app);

app.use(express.static('build'));

app.listen(PORT, () => {
  console.info(`listening on port ${PORT}`);
});
