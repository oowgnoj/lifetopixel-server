import express, { Request, Response } from "express";
import { FieldService } from "../services";
import authMiddleWare from "../middleware/authorization";
import { filterPeriod } from "../common/helper";
const fieldRouter: express.Router = express.Router();

fieldRouter.post(
  "/",
  async (req: Request, res: Response) => {
    try {
      const { userId } = req.decoded;
      const field = await FieldService.post(req.body, userId);
      res.status(200).json(field);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error });
    }
  },
  authMiddleWare
);

fieldRouter.get("/", async (req: Request, res: Response) => {
  try {
    const { term } = req.query;
    const { userId } = req.decoded;
    let days = await FieldService.get(userId);
    if (term && typeof term == "string") {
      days = filterPeriod(days, term);
    }
    res.status(200).json(days);
  } catch (error) {
    res.status(404).send({ err: "Todo not found" });
  }
});

export default fieldRouter;
