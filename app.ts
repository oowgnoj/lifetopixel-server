import "reflect-metadata";
import { createConnection } from "typeorm";
import { Request, Response } from "express";
import express from "express";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import AppRouter from "./src/api";
const cors = require("cors");

const PORT = process.env.PORT
// create typeorm connection
createConnection().then((connection) => {
  // create and setup express app
  const app = express();
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(express.json());
  app.use(AppRouter);
  app.set("jwt-secret", process.env.TOKEN_SECRET);

  app.listen(PORT);
});
