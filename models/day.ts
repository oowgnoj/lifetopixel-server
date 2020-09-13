export {}; //typescript error handle

import * as mongoose from "mongoose";
import { IDay } from "../types";

type IDayDocument = IDay & mongoose.Document;

// Define Schemes
const daySchema = new mongoose.Schema(
  {
    goodThing: { type: String },
    badThing: { type: String },
    goalTomorrow: { type: String },
    mainActivity: { type: String },
    score: { type: Number },
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
export default mongoose.model<IDayDocument>("Day", daySchema);
