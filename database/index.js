// const mongoose = require('mongoose');
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/blueocean', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

export default db;
