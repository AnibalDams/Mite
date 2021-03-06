import mongoose from 'mongoose';

const {model, Schema} = mongoose;

const episodeSchema = new Schema({
  anime: String,
  animeName: String,
  episodeNumber: Number,
  thumbnail: String,
  episodeName: {type: String, default: ''},
  servers: [{name: String, url: String}],
  uploadedAt: {type: Date, default: Date.now},
});

export default model('episode', episodeSchema);
