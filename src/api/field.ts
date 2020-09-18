import express, { Request, Response } from "express";
import { FieldService } from "../services";
import authMiddleWare from "../middleware/authorization";
import { filterPeriod } from "../common/helper";
const router: express.Router = express.Router();

router.post(
  "/",
  async (req: Request, res: Response) => {
    try {
      const field = await FieldService.post(req.body);
      res.status(200).json(field);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  authMiddleWare
);

router.get("/", async (req: Request, res: Response) => {
  try {
    const term = req.query.term as string;
    const { userId } = req.decoded;
    let days = await FieldService.get(userId, term);
    res.status(200).json(days);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
