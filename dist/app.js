"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./src/api"));
typeorm_1.createConnection().then(connection => {
    const app = express_1.default();
    app.use(express_1.default.json());
    app.use(api_1.default);
    app.listen(5000);
});
//# sourceMappingURL=app.js.map