import express, { Request, Response } from "express";
const router = require("express").Router();
import { Day } from "../models";
import DayService from "../services/day";
router.post("/", async (req: Request, res: Response) => {
  try {
    const day = await DayService.postDay(req.body);
    res.status(200).json(day);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const days = await Day.find({
      userId: "5f5c5dd1edbce9b80823093c",
    }).populate("userId");
    res.status(200).json(days);
  } catch (error) {
    res.status(404).send({ err: "Todo not found" });
  }
});

module.exports = router;
