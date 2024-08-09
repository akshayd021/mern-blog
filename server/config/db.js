import mongoose from "mongoose";

const conect = async () => {
  const res = await mongoose.connect("mongodb://localhost:27017/blog-mern");

  if(res){
    console.log("connect to db")
  }
};

export default conect;
