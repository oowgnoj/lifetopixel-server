import express, { Request, Response } from "express";
import { DayService } from "../services";
import authMiddleWare from "../middleware/authorization";
import { filterPeriod } from "../common/helper";
const dayRouter: express.Router = express.Router();

dayRouter.post(
  "/",
  async (req: Request, res: Response) => {
    try {
      const { uid } = req.decoded;
      const day = await DayService.post(req.body, uid);
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
    const { uid } = req.decoded;
    let days = await DayService.get(uid);
    if (term && typeof term == "string") {
      days = filterPeriod(days, term);
    }

    res.status(200).json(days);
  } catch (error) {
    res.status(404).send({ err: "Todo not found" });
  }
});

export default dayRouter;
