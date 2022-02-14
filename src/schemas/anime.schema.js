import mongoose from "mongoose";

const { model, Schema } = mongoose;

const animeSchema = new Schema({
  name: String,
  synopsis: String,
  image: String,
  cover: String,
  releaseDate: String,
  study: String,
  onGoing: { type: Boolean },
  genres: [String],
  type: String,
  private: Boolean,
  visits: { type: Number, default: 0 },
});

export default model("anime", animeSchema);
