import mongoose from "mongoose";

const { model, Schema } = mongoose;

const episodeSchema = new Schema({
  anime: String,
  episodeNumber: Number,
  episodeName: { type: String, default: "" },
  servers: [{ name: String, url: String }],
});

export default model("episode", episodeSchema);
