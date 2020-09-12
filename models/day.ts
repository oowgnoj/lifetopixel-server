export {}; //typescript error handle

import * as mongoose from "mongoose";
import { IDay } from "../types";

// Define Schemes
const daySchema = new mongoose.Schema(
  {
    _id: { type: Number, unique: true, required: true },
    goodThing: { type: String },
    badThing: { type: String },
    goalTomorrow: { type: String },
    mainActivity: { type: String },
    score: { type: Number },
    jobIds: { type: Array },
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
export default mongoose.model<IDay & mongoose.Document>("Day", daySchema);
