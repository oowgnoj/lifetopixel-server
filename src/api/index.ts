import express, { Request, Response } from "express";
import userRouter from "./user";
import dayRouter from "./day";
import jobRouter from "./job";
import fieldRouter from "./field";
import noteRouter from "./note";
import authMiddleWare from "../middleware/authorization";

const AppRouter: express.Router = express.Router();
AppRouter.use("/", userRouter);
AppRouter.use("/", authMiddleWare);
AppRouter.use("/day", dayRouter);
AppRouter.use("/job", jobRouter);
AppRouter.use("/field", fieldRouter);
AppRouter.use("/note", noteRouter);

export default AppRouter;
