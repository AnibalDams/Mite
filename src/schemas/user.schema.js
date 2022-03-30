import mongoose from 'mongoose';

const {model, Schema} = mongoose;

const userSchema = new Schema({
  id: String,
  username: String,
  password: String,
  createdAt: {type: Date, default: Date.now},
});

export default model('user', userSchema);
