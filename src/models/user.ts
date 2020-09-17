export {}; //typescript error handle

import * as mongoose from "mongoose";
import { IUser } from "../types";

type IUserDocument = IUserModel & mongoose.Document;

interface IUserModel extends mongoose.Model<IUserDocument> {
  findOneByEmail: (email) => any;
  insert: (email, password, username) => any;
  validatePassword: (email, password) => IUser;
}

// Define Schemes
const userSchema = new mongoose.Schema(
  {
    email: { type: String },
    username: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);
userSchema.statics.insert = function (email, password, username) {
  const user = new this({
    email,
    password,
    username,
  });

  // return the Promise
  return user.save();
};

userSchema.statics.findOneByEmail = async function (email) {
  return await this.findOne({
    email,
  }).exec();
};

userSchema.statics.validatePassword = async function (email, password) {
  const user = await this.findOne({
    email,
  }).exec();
  return user.password == password ? user : false;
};
// Create Model & Export
export default mongoose.model<IUserDocument, IUserModel>("User", userSchema);
