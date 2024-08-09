import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  categorie: {
    type: mongoose.Schema.Types.ObjectId,
    refer: "categorie",
  },
  desc: {
    type: String,
  },
  thumb: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    refer: "users",
  },
});

const blogModel = mongoose.model("blogs", blogSchema);

export default blogModel;
