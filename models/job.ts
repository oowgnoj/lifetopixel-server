export {}; //typescript error handle

import * as mongoose from "mongoose";
import { IJob } from "../types";

// Define Schemes
const jobSchema = new mongoose.Schema(
  {
    name: { type: String, default: false },
    category: { type: String },
    type: { type: String }, //input or output
    startTime: { type: Date },
    endTime: { type: Date },
    duration: { type: Number }, // 시간 단위
    field: { type: mongoose.Schema.Types.ObjectId, ref: "Field" },
    memo: { type: mongoose.Schema.Types.ObjectId, ref: "Memo" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IJob & mongoose.Document>("Job", jobSchema);
