import mongoose from "mongoose";

const categorieSchema = new mongoose.Schema({
  title: String,
});

const categorieModel = mongoose.model("categorie", categorieSchema);

export default categorieModel;
