import mongoose from 'mongoose';

const {model, Schema} = mongoose;

const userProfileSchema = new Schema({
  id: String,
  name: String,
  avatar: String,
  user: String,
  createdAt: {type: Date, default: Date.now},
});

export default model('userProfile', userProfileSchema);
