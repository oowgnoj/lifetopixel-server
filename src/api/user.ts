import express, { Request, Response } from "express";
import { login, signup, getByEmail } from "../services/user";
import authMiddleWare from "../middleware/authorization";

const router = require("express").Router();

router.post("/signin", async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body;
    const user = await signup(email, password, username);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(401).send(error.message);
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await login(email, password);
    return res.status(200).send(user);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.get(
  "/me",
  async (req: Request, res: Response) => {
    try {
      const { email } = req.decoded;
      const user = await getByEmail(email);
      return res.status(200).send(user);
    } catch (error) {
      res.status(200).send({});
    }
  },
  authMiddleWare
);

export default router;
