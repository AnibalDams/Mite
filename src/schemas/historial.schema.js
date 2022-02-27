import mongoose from "mongoose";

const { model, Schema } = mongoose;

const historialSchema = new Schema({
  type: String,
  name: String,
  image: String,
});

export default model("historial", historialSchema);
