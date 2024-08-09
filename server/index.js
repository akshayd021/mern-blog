import express from "express";
import conect from "./config/db.js";
import authRoute from "./routes/blog.js";
const app = express();
const port = 3001;

conect();
app.get("/", (req, res) => {
  res.send("Done");
});

app.use("api/v1", authRoute);

app.listen(port, () => {
  console.log("port is running");
});
