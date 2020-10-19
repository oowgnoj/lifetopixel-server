"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const jwt = require("jsonwebtoken");
const User_1 = require("../entity/User");
const authCheck = async (token) => {
    return await jwt.verify(token, process.env.TOKEN_SECRET);
};
exports.default = async (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).json({
            success: false,
            message: "not logged in",
        });
    }
    try {
        const decoded = await authCheck(token);
        const userInfo = await User_1.User.findOne({ email: decoded.uid });
        req.decoded = decoded;
        if (req.method === "POST") {
            req.body.userId = userInfo.id;
        }
        next();
    }
    catch (error) {
        res.status(403).json({
            hasError: true,
            message: error.message,
        });
    }
};
//# sourceMappingURL=authorization.js.map