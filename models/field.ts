export {}; //typescript error handle

import * as mongoose from "mongoose";
import { IField } from "../types";

const FieldSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String }, // 알고리즘, 책
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
export default mongoose.model<IField & mongoose.Document>("Field", FieldSchema);
