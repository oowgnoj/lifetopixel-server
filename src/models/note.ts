export {}; //typescript error handle

import * as mongoose from "mongoose";
import { INote } from "../types";

type INoteDocument = INote & mongoose.Document;

interface INoteModel extends mongoose.Model<INoteDocument> {
  create: (note) => any;
  findAllByUserId: (email) => INote[];
}
// Define Schemes
const noteSchema = new mongoose.Schema(
  {
    title: { type: String },
    summary: { type: String },
    detail: { type: String },
    tag: { type: Array },
    urls: { type: Array },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    job: { type: mongoose.Schema.Types.ObjectId, ref: "job" },
    field: { type: mongoose.Schema.Types.ObjectId, ref: "Field" },
  },
  {
    timestamps: true,
  }
);
noteSchema.statics.create = async function (note: INote) {
  return new this(note);
};

noteSchema.statics.findAllByUserId = async function (userId) {
  return await this.find({
    userId: userId,
  }).exec();
};

// Create Model & Export
export default mongoose.model<INoteDocument, INoteModel>("Note", noteSchema);
