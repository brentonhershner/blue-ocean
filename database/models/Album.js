import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const albumSchema = new Schema({
  ownerId: String,
  userName: String,
  uploadDate: String,
  title: String,
  description: String,
  tags: Array,
  accessLevel: Number,  /* 0=private,  1=all friends, 2=global */
  photoIds: Array
});

const Album = model('Album', albumSchema);

export default Album;