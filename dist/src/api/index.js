"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./user"));
const day_1 = __importDefault(require("./day"));
const authorization_1 = __importDefault(require("../middleware/authorization"));
const AppRouter = express_1.default.Router();
AppRouter.use("/", user_1.default);
AppRouter.use("/", authorization_1.default);
AppRouter.use("/day", day_1.default);
exports.default = AppRouter;
//# sourceMappingURL=index.js.map