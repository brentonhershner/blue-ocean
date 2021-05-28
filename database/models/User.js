import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  userId: String,
  fullName: String,
  userName: String,
  email: String,
  password: String,
  userLevel: Number,  /* 1=general user, 2='super user', 3=admin  */
  friends: [String],
  pending: [String], /* friend requests sent */
  requested: [String]  /* incoming friend requests */
});

const User = model('User', userSchema);

export default User;