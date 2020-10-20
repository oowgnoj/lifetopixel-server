import express, { Request, Response } from "express";
import { JobService } from "../services";
import authMiddleWare from "../middleware/authorization";

const router: express.Router = express.Router();

router.post(
  "/",
  async (req: Request, res: Response) => {
    try {
      const day = await JobService.post(req.body);
      res.status(200).json(day);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  authMiddleWare
);

router.get("/", async (req: Request, res: Response) => {
  try {
    const term = req.query.term as string;
    const { id } = req.decoded;
    let jobs = await JobService.get(id, term);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
