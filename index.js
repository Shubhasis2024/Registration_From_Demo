
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
dotenv.config();
const port = process.env.PORT;
const __dirname = path.resolve();

// MongoDb Connect
mongoose.connect(process.env.MONGO_URL);

const post = new mongoose.Schema({
    Firstname:String, 
    Lastname:String,
    email:String,
    college:String,
    roll:String,
    year: String,
  
});

const data = mongoose.model("userdata", post);

app.get("/api/posts", async (req, res) => {
  const posts = await data.find();
  res.json(posts);
});

app.post("/api/posts", async (req, res) => {
  const { Firstname,Lastname,email,college,roll, year  } = req.body;
  const newPost = new data({ Firstname,Lastname,email,college,roll, year});
  await newPost.save();
});

app.use(express.static(path.join(__dirname, "../Forntend")));

app.listen(port, () => {
  console.log(
    `Server is running on port http://localhost:${process.env.PORT}/`
  );
});