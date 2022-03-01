import mongoose from 'mongoose';

const {model, Schema} = mongoose;

const genreSchema = new Schema({
  genre: String,
  animes: {type: Number, default: 0},
});

export default model('genre', genreSchema);
