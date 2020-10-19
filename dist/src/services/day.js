"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Day_1 = __importDefault(require("../entity/Day"));
const DayService = {
    post: async (payload) => {
        const day = await typeorm_1.getRepository(Day_1.default).create(payload);
        const results = await typeorm_1.getRepository(Day_1.default).save(day);
        return results;
    },
    get: async (userId, term) => {
        return await typeorm_1.getRepository(Day_1.default).find({ user: userId });
    },
};
exports.default = DayService;
//# sourceMappingURL=day.js.map