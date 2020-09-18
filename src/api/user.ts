import express, { Request, Response } from "express";
import UserService from "../services/user";

const UserServiceInstance = new UserService();

const userRouter = require("express").Router();
userRouter.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body;
    const user = await UserServiceInstance.register(email, password, username);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(401).send("존재하는 이메일 입니다.");
  }
});

userRouter.get("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserServiceInstance.login(email, password);
    res.cookie("x-access-token", user, { secure: true, httpOnly: true });
    return res.status(200).send(user);
  } catch (error) {
    res.status(401).send("회원 정보를 확인해주세요.");
  }
});

export default userRouter;
