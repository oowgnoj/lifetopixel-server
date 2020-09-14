export {}; //typescript error handle

import * as mongoose from "mongoose";
import { IField } from "../types";

type IFieldDocument = IField & mongoose.Document;

const fieldSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String }, // 알고리즘, 책
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
export default mongoose.model<IFieldDocument>("Field", fieldSchema);
