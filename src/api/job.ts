import express, { Request, Response } from "express";
import { JobService } from "../services";
import authMiddleWare from "../middleware/authorization";


const router: express.Router = express.Router();
router.use(authMiddleWare);
router.post(
  "/",
  async (req: Request, res: Response) => {
    try {
      const job = await JobService.post(req.body);
      res.status(200).json(job);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
);

router.get("/", async (req: Request, res: Response) => {
  try {
    const term = req.query.term as string;
    const { id } = req.decoded;
    let jobs = await JobService.get(id);
    console.log(jobs)
    res.status(200).json(jobs);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
