import mongoose from 'mongoose';

const {model, Schema} = mongoose;

const animeSchema = new Schema({
  id: String,
  name: String,
  synopsis: String,
  image: String,
  cover: String,
  characters: {type: [{name: String, role: String, image: String}]},
  releaseDate: String,
  study: String,
  onGoing: {type: Boolean},
  genres: [String],
  type: String,
  private: Boolean,
  views: {type: Number, default: 0},
  uploadedAt: {type: Date, default: Date.now},
});

export default model('anime', animeSchema);
