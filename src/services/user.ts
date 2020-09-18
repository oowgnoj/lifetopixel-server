import jwt from "jsonwebtoken";
import { User } from "../models";
import { IUser } from "../types";

require("dotenv").config();

interface IUserService {
  register: (email, password, username) => void;
  login: (email, password) => any;
  checkUserExist: (email: string) => any;
}

export default class UserService implements IUserService {
  public async register(email, password, username) {
    const isUserExist = await this.checkUserExist(email);
    if (isUserExist) {
      throw new Error("email already exist");
    }
    const user = User.insert(email, password, username);
    return user;
  }

  public async checkUserExist(email) {
    return await User.findOneByEmail(email);
  }

  public async login(email, password) {
    const user = await User.validatePassword(email, password);
    if (user) {
      const token: String = this.generateToken(email);
      return { user, token };
    } else {
      throw new Error("Invalid Password");
    }
  }

  private generateToken(email) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jwt.sign({ uid: email }, process.env.TOKEN_SECRET, {
      expiresIn: 60 * 60 * 24,
      algorithm: "HS256",
    });
  }
}
