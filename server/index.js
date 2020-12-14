import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import posts from "./routes/posts.js";
import dotEnv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotEnv.config();
}

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("this is the home page!!!");
  next();
});

app.use("/posts", posts);

mongoose.connect(process.env.mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Mongo Database Connection
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose Datebase.."));
mongoose.set("useFindAndModify", false);

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`Server running on port: http://localhost:${port}`)
);
