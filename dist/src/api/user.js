"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../services/user");
const router = require("express").Router();
router.post("/signin", async (req, res) => {
    try {
        const { email, password, username } = req.body;
        const user = await user_1.signup(email, password, username);
        return res.status(200).json(user);
    }
    catch (error) {
        return res.status(401).send(error.message);
    }
});
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await user_1.login(email, password);
        return res.status(200).send(user);
    }
    catch (error) {
        res.status(401).send(error.message);
    }
});
exports.default = router;
//# sourceMappingURL=user.js.map