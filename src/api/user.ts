import express, { Request, Response } from "express";
const router = require("express").Router();
import { User } from "../models";
import UserService from "../services/user";

router.post("/register", async (req: Request, res: Response) => {
  try {
    const result = await UserService.register(req.body);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/login", async (req: Request, res: Response) => {
  try {
    const token = await UserService.login(req.body);
    res.cookie("jwt", token, { secure: true, httpOnly: true });
    return res.status(200).send(true);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
