import express, { Request, Response, Router } from "express";
import DayService from "../services/day";
import authMiddleWare from "../middleware/authorization";
const router: express.Router = express.Router();

router.post(
  "/",
  async (req: Request, res: Response) => {
    try {
      const day = await DayService.post(req.body);
      res.status(200).json(day);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  authMiddleWare
);

router.get("/", async (req: Request, res: Response) => {
  try {
    // console.log(req.decoded)
    const { userId } = req.decoded;
    const term = req.query.term as string;
    const days = await DayService.get(1, term);
    res.status(200).json(days);
  } catch (error) {
    res.status(404).send({ err: "day not found" });
  }
});

export default router;
