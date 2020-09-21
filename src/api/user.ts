import express, { Request, Response } from "express";
import UserService from "../services/user";

const UserServiceInstance = new UserService();

const router = require("express").Router();
router.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body;
    const user = await UserServiceInstance.register(email, password, username);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(401).send(error.message);
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserServiceInstance.login(email, password);

    res.cookie("x-access-token", user.token, {
      secure: true,
      httpOnly: false,
      maxAge: 3600000,
    });

    return res.status(200).send(user);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

export default router;
