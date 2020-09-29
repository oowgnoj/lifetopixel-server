import jwt from "jsonwebtoken";
import { User } from "../models";
import { IUser } from "../types";

require("dotenv").config();

interface IUserService {
  register: (email, password, username) => any;
  getUser: (email,) => any;
  login: (email, password) => any;
  checkUserExist: (email: string) => any;
}

export default class UserService implements IUserService {
  public async register(email, password, username) {
    await this.checkUserExist(email);
    const user = User.insert(email, password, username);
    return user;
  }

  public async getUser(email) {
    const user = await User.findOneByEmail(email);
    if (user){
      return user
    }else{
      return null;
    }
  }

  public async checkUserExist(email) {
    const user = await User.findOneByEmail(email);
    if (user) {
      throw Error("존재하는 이메일입니다.");
    }
    return user;
  }

  public async login(email, password) {
    const user = await User.validatePassword(email, password);
    if (user) {
      const token: String = this.generateToken(email);
      return { user, token };
    } else {
      throw new Error("회원정보를 확인해주세요.");
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
