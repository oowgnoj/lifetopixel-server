import express, { Request, Response } from "express";
import UserService from "../services/user";

const userRouter = require("express").Router();
userRouter.post("/register", async (req: Request, res: Response) => {
  try {
    const result = await UserService.register(req.body);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).send(error);
  }
});

userRouter.get("/login", async (req: Request, res: Response) => {
  try {
    const token = await UserService.login(req.body);
    res.cookie("jwt", token, { secure: true, httpOnly: true });
    return res.status(200).send(token);
  } catch (error) {
    res.status(404).send(error);
  }
});

export default userRouter;
