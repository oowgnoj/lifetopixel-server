export {}; //typescript error handle

import * as mongoose from "mongoose";
import { INote } from "../types";

type INoteDocument = INote & mongoose.Document;

interface INoteModel extends mongoose.Model<INoteDocument> {
  findAll: () => [INote];
  create: (note) => any;
}
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

NoteSchema.statics.create = function (payload: INote) {
  const note = new this(payload);
  return note.save();
};

// Find All
NoteSchema.statics.findAll = function () {
  return this.find({});
};

// Create Model & Export
export default mongoose.model<INoteDocument & INoteModel>("Note", NoteSchema);
