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
  console.log(`listening on port ${PORT}`);
});

app.get('/getimagelist', async (req, res, next) => {
  const folderPath = path.join(__dirname, 'public/images/')
  console.log('folderPath is', folderPath);
  const fileList = await readdir(folderPath);
  console.log('getimagelist', fileList);
  res.send(fileList);
});

const __dirname = path.resolve();
app.use(express.static('public'));
