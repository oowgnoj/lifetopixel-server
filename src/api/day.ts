import express, { Request, Response, Router } from "express";
import DayService from "../services/day";
import authMiddleWare from "../middleware/authorization";
const router: express.Router = express.Router();
router.use(authMiddleWare);

router.post("/", async (req, res) => {
  console.log(req);
  try {
    const day = await DayService.post(req.body);
    res.status(200).json(day);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const { id } = req.decoded;
    const term = req.query.term as string;
    const days = await DayService.get(id, term);
    res.status(200).json(days);
  } catch (error) {
    res.status(404).send({ err: error.message });
  }
});

export default router;
