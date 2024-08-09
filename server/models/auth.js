import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  name: String,
  email: String,
  unieq: true,
  password: String,
});

const authModel = mongoose.model("auth", authSchema);

export default authModel;
