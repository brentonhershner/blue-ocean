// const mongoose = require('mongoose');
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/blueocean', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('mongoose connection error', error);
});

db.once('open', () => {
  console.info('mongoose connected successfully');
});

export default db;

