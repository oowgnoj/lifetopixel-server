import express, { Request, Response } from "express";
import userRouter from "./user";
import dayRouter from "./day";
import jobRouter from "./job";
import authMiddleWare from "../middleware/authorization";

const AppRouter: express.Router = express.Router();
AppRouter.use("/", authMiddleWare);
AppRouter.use("/", userRouter);
AppRouter.use("/day", dayRouter);
AppRouter.use("/job", jobRouter);

export default AppRouter;
