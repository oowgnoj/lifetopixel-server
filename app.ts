import "reflect-metadata";
import { createConnection } from "typeorm";
import { Request, Response } from "express";
import express from 'express'
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import AppRouter from './src/api'
import {User} from './src/entity/User'
import { Day } from "./src/entity/Day";

// create typeorm connection
createConnection().then(connection => {

    // create and setup express app
    const app = express();
    app.use(express.json());
    app.use(AppRouter)
    // register routes

    // app.get("/users", async function(req: Request, res: Response) {
    //     const users = await userRepository.find();
    //     res.json(users);
    // });

   
    // app.post("/users", async function(req: Request, res: Response) {
    //     const user = await userRepository.create(req.body);
    //     const results = await userRepository.save(user);
    //     return res.send(results);
    // });

    // app.get("/days", async function(req: Request, res: Response) {
    //     const days = await dayRepository.find({ relations: ["user"] })
    //     res.json(days);
    // });

   
    // app.post("/days", async function(req: Request, res: Response) {
        // const day = await dayRepository.create(req.body);
        // const results = await dayRepository.save(day);
        // return res.send(results);
    // });


    // start express server
    app.listen(5000);
});