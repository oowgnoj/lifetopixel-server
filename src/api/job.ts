import express, { Request, Response } from "express";
import { JobService } from "../services";
import authMiddleWare from "../middleware/authorization";
import { filterPeriod } from "../common/helper";

const jobRouter: express.Router = express.Router();

jobRouter.post(
  "/",
  async (req: Request, res: Response) => {
    try {
      const { uid } = req.decoded;
      const day = await JobService.post(req.body, uid);
      res.status(200).json(day);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  authMiddleWare
);

jobRouter.get("/", async (req: Request, res: Response) => {
  try {
    const { term } = req.query;
    const { uid } = req.decoded;
    let days = await JobService.get(uid);
    if (term) {
      days = filterPeriod(days, term);
    }
    res.status(200).json(days);
  } catch (error) {
    res.status(404).send({ err: "job not found" });
  }
});

export default jobRouter;
