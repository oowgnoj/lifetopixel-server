import express, { Request, Response } from "express";
import { DayService } from "../services";
import authMiddleWare from "../middleware/authorization";
import { filterPeriod } from "../common/helper";
const dayRouter: express.Router = express.Router();

dayRouter.post(
  "/",
  async (req: Request, res: Response) => {
    try {
      const { userId } = req.decoded;
      const day = await DayService.post(req.body, userId);
      res.status(200).json(day);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  authMiddleWare
);

dayRouter.get("/", async (req: Request, res: Response) => {
  try {
    const { term } = req.query;
    const { userId } = req.decoded;
    let days = await DayService.get(userId);
    if (term && typeof term == "string") {
      days = filterPeriod(days, term);
    }
    res.status(200).json(days);
  } catch (error) {
    res.status(404).send({ err: "day not found" });
  }
});

export default dayRouter;
