import { User } from "../models";
import user from "../models/user";
import { IUser } from "../types";
import jwt from "jsonwebtoken";
require("dotenv").config();

interface IUserService {
  register: (body) => void;
  checkUserExist: (email) => any;
  login: (body) => any;
}
// optinal type =[week, month, year]
const UserService: IUserService = {
  register: async ({ email, password, username }) => {
    const isEmailExist = await UserService.checkUserExist(email);
    if (isEmailExist) {
      return new Error("email already exist");
    } else {
      const user = User.create(email, password, username);
      return user;
    }
  },
  checkUserExist: async (email) => {
    return await User.findOneByEmail(email);
  },
  login: async ({ email, password }) => {
    const user = await User.validatePassword(email, password);
    if (user) {
      const token: String = jwt.sign({ uid: user.email }, process.env.secret, {
        expiresIn: 60 * 60 * 24,
        algorithm: "HS256",
      });
      return token;
    }
  },
};

export default UserService;
