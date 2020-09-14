export {}; //typescript error handle

import * as mongoose from "mongoose";
import { IUser } from "../types";

type IUserDocument = IUser & mongoose.Document;

// Define Schemes
const userSchema = new mongoose.Schema(
  {
    email: { type: String },
    nickname: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
export default mongoose.model<IUserDocument>("User", userSchema);
