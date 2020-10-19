"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.login = exports.signup = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../entity/User"));
exports.signup = async (email, password, username) => {
    try {
        const user = new User_1.default();
        user.email = email;
        user.password = password;
        user.userName = username;
        user.save();
        return user;
    }
    catch (error) {
        console.error(error);
    }
};
exports.login = async (email, password) => {
    const user = await User_1.default.findOne({ email });
    console.log(user);
    if (!user) {
        throw new Error('회원 정보를 확인해주세요.');
    }
    const isValid = await user.comparePassword(password);
    console.log(isValid);
    if (!isValid) {
        throw new Error('회원 정보를 확인해주세요.');
    }
    if (user) {
        const token = exports.generateToken(email);
        return { user, token };
    }
    else {
        throw new Error("회원정보를 확인해주세요.");
    }
};
exports.generateToken = (email) => {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jsonwebtoken_1.default.sign({ uid: email }, process.env.TOKEN_SECRET, {
        algorithm: "HS256",
    });
};
//# sourceMappingURL=user.js.map