// ENV
require("dotenv").config();

import express from "express";
import AppRouter from "./src/api";
var cors = require("cors");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 4500;

// Static File Service
app.use(express.static("public"));

// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
); // Node.js의 native Promise 사용
mongoose.Promise = global.Promise;

// CONNECT TO MONGODB SERVER
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e: Error) => console.error(e));

app.get("/test", (request, response) => {
  response.send("성공");
});
// jwt
app.set("jwt-secret", process.env.TOKEN_SECRET);
app.use(AppRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
