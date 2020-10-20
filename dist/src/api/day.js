"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const day_1 = __importDefault(require("../services/day"));
const authorization_1 = __importDefault(require("../middleware/authorization"));
const router = express_1.default.Router();
router.post("/", async (req, res) => {
    try {
        const day = await day_1.default.post(req.body);
        res.status(200).json(day);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}, authorization_1.default);
router.get("/", async (req, res) => {
    try {
        const { userId } = req.decoded;
        const term = req.query.term;
        const days = await day_1.default.get(userId, term);
        res.status(200).json(days);
    }
    catch (error) {
        res.status(404).send({ err: "day not found" });
    }
});
exports.default = router;
//# sourceMappingURL=day.js.map