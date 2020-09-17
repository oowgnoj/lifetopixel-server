import express, { Request, Response } from "express";
import { NoteService } from "../services";
import authMiddleWare from "../middleware/authorization";
import { filterPeriod } from "../common/helper";

const noteRouter: express.Router = express.Router();

noteRouter.post(
  "/",
  async (req: Request, res: Response) => {
    try {
      const { uid } = req.decoded;
      const day = await NoteService.post(req.body, uid);
      res.status(200).json(day);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  authMiddleWare
);

noteRouter.get("/", async (req: Request, res: Response) => {
  try {
    const { term } = req.query;
    const { uid } = req.decoded;
    let notes = await NoteService.get(uid);
    if (term && typeof term == "string") {
      notes = filterPeriod(notes, term);
    }
    res.status(200).json(notes);
  } catch (error) {
    res.status(404).send({ err: "note not found" });
  }
});

export default noteRouter;
