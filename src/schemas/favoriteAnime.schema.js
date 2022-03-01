import mongoose from 'mongoose';

const {model, Schema} = mongoose;

const favoriteAnimeSchema = new Schema({
  idAnime: String,
  name: String,
  synopsis: String,
  image: String,
  cover: String,
  user: String,
});

export default model('favoriteAnime', favoriteAnimeSchema);
