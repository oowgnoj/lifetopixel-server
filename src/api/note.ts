import express, { Request, Response } from "express";
import { NoteService } from "../services";
import authMiddleWare from "../middleware/authorization";
import { filterPeriod } from "../common/helper";

const router: express.Router = express.Router();
router.use(authMiddleWare);
router.post(
  "/",
  async (req: Request, res: Response) => {
    try {
      const day = await NoteService.post(req.body);
      res.status(200).json(day);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
);

router.get("/", async (req: Request, res: Response) => {
  try {
    const term = req.query.term as string;
    const { id } = req.decoded;
    let notes = await NoteService.get(id, term);
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
