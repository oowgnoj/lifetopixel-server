import express, { Request, Response } from "express";
const router = require("express").Router();
import { User } from "../models";

router.post("/", async (req: Request, res: Response) => {
  try {
    const day = await User.create(req.body);
    res.status(200).json(day);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(404).send({ err: "Todo not found" });
  }
});

module.exports = router;
