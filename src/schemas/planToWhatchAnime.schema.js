import mongoose from "mongoose";

const { model, Schema } = mongoose;

const planToWatchAnimeSchema = new Schema({
  idAnime: String,
  name: String,
  synopsis: String,
  image: String,
  cover: String,
  user: String,
});

export default model("planToWatchAnime", planToWatchAnimeSchema);
