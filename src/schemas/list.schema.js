import mongoose from 'mongoose';

const {model, Schema} = mongoose;

const userProfileListSchema = new Schema({
  animeId: String,
  animeName: String,
  animeSynopsis: String,
  animeMain: String,
  animeCover: String,
  userProfile: String,
  createdAt: {type: Date, default: Date.now},
});

export default model('userProfileList', userProfileListSchema);
