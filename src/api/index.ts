import express, { Request, Response } from "express";
import userRouter from "./user";
import dayRouter from "./day";
import tagRouter from "./tag";
import noteRouter from "./Note";
// import jobRouter from "./Job";
import fieldRouter from "./Field";

const AppRouter: express.Router = express.Router();
AppRouter.use("/", userRouter);
AppRouter.use("/day", dayRouter);
AppRouter.use("/tag", tagRouter);
AppRouter.use("/note", noteRouter);
// AppRouter.use("/job", jobRouter);
AppRouter.use("/field", fieldRouter);

export default AppRouter;
