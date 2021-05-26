import { ViewModuleSharp } from '@material-ui/icons';

import mongoose from 'mongoose';
const { Schema, model } = mongoose;
mongoose.connect('mongodb://localhost/db', {
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

const friendSchema = new Schema({
  userId: Number,
  userName: String
});

const userSchema = new Schema({
  userId: Number,
  fullName: String,
  email: String,
  password: String,
  userLevel: Number,  /* 1=general user, 2='super user', 3=admin  */
  friends: [friendSchema],
  pending: [friendSchema], /* friend requests sent */
  requested: [friendSchema]  /* incoming friend requests */
});

const photoSchema = new Schema({
  photoId: Number,
  ownerId: Number,
  uploadDate: Date,
  description: String,
  tags: Array,
  accessLevel: Number,  /* 0=private, [1=select friends(futureFeature)], 2=all friends, [3=global(futureFeature)] */
  url: String
});

const userPhotosSchema = new Schema({
  ownerId: Number,
  ownerName: String,
  photos: [photoSchema]
});

const Friend = model('Friend', friendSchema);
const User = model('User', userSchema);
const Photo = model('Photo', photoSchema);
const UserPhotos = model('UserPhotos', userPhotosSchema);

export { Friend, User, Photo, UserPhotos }
export default db;