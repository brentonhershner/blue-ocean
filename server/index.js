import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import { readdir } from 'fs/promises';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.info(`listening on port ${PORT}`);
});

app.get('/getimagelist', async (req, res, next) => {
  const folderPath = path.join(__dirname, 'public/images/testImages/')
  const fileList = await readdir(folderPath);
  res.send(fileList);
});

const __dirname = path.resolve();
app.use(express.static('public'));
