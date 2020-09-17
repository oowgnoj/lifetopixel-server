import express, { Request, Response } from "express";
import UserService from "../services/user";

const UserServiceInstance = new UserService();

const userRouter = require("express").Router();
userRouter.post("/register", async (req: Request, res: Response) => {
  try {
    const result = await UserServiceInstance.register(req.body);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(401).send("존재하는 이메일 입니다.");
  }
});

userRouter.get("/login", async (req: Request, res: Response) => {
  try {
    const user = await UserServiceInstance.login(req.body);
    res.cookie("x-access-token", user, { secure: true, httpOnly: true });
    return res.status(200).send(user);
  } catch (error) {
    res.status(401).send("회원 정보를 확인해주세요.");
  }
});

export default userRouter;
