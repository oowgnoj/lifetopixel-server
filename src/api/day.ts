import express, { Request, Response } from "express";
const router = require("express").Router();
import { Day } from "../models";
import DayService from "../services/day";
import authMiddleWare from "../middleware/authorization";
const dayRouter: express.Router = express.Router();

router.post(
  "/",
  async (req: Request, res: Response) => {
    try {
      const day = await DayService.postDay(req.body);
      res.status(200).json(day);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  authMiddleWare
);

router.use("", authMiddleWare);
router.get("/", async (req: Request, res: Response) => {
  try {
    const days = await DayService.getDay();
    res.status(200).json(days);
  } catch (error) {
    res.status(404).send({ err: "Todo not found" });
  }
});

module.exports = router;
