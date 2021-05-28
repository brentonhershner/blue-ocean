import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const photosSchema = new Schema({
  userId: String,
  username: String,
  photoId: Number,
  uploadDate: String,
  description: String,
  tags: Array,
  accessLevel: Number,  /* 0=private, 1=all friends, [2=global(futureFeature)] */
  url: String
});

const Photo = model('Photo', photosSchema);

export default Photo;