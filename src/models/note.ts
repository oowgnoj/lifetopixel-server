export {}; //typescript error handle

import * as mongoose from "mongoose";
import { INote } from "../types";

type INoteDocument = INote & mongoose.Document;

interface INoteModel extends mongoose.Model<INoteDocument> {
  create: (note) => any;
  findAllByUserId: (email) => INote[] | Boolean;
}
// Define Schemes
const noteSchema = new mongoose.Schema(
  {
    title: { type: String },
    summary: { type: String },
    detail: { type: String },
    tag: { type: Array },
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

noteSchema.statics.findAllByUserId = async function (_id) {
  return await this.find({
    userId: _id,
  }).exec();
};
// Create Model & Export
export default mongoose.model<INoteDocument, INoteModel>("Note", noteSchema);
