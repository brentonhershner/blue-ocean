import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import routes from './router.js';
import usersRouter from './usersRouter.js';
import photosRouter from './photosRouter.js';
import albumRouter from './albumRouter.js';

const PORT = 3001;
const app = express();


var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/users', usersRouter);
app.use('/api/photos', photosRouter);
app.use('/api/albums', albumRouter);
routes(app);

app.use(express.static('build'));

app.listen(PORT, () => {
  console.info(`listening on port ${PORT}`);
});
