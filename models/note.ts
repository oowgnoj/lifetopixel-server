export {}; //typescript error handle

import * as mongoose from "mongoose";
import { INote } from "../types";

// Define Schemes
const NoteSchema = new mongoose.Schema(
  {
    title: { type: String },
    summary: { type: String },
    detail: { type: String },
    tag: { type: Array },
    job: { type: mongoose.Schema.Types.ObjectId, ref: "job" },
    field: { type: mongoose.Schema.Types.ObjectId, ref: "Field" },
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
export default mongoose.model<INote & mongoose.Document>("Note", NoteSchema);
