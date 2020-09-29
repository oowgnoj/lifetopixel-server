import express, { Request, Response } from "express";
import UserService from "../services/user";
import authMiddleWare from "../middleware/authorization";

const UserServiceInstance = new UserService();

const router = require("express").Router();

router.get("test", (req, res) => {
  return res.status(200).json({ hi: "hello" });
});
router.get("/user", authMiddleWare, async (req: Request, res: Response) => {
  try {
    const user = await UserServiceInstance.getUser(req.decoded.uid);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(401).send(error.message);
  }
});

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
    return res.status(200).send(user);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

export default router;
