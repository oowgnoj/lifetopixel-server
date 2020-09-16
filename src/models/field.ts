export {}; //typescript error handle

import * as mongoose from "mongoose";
import { IField } from "../types";

type IFieldDocument = IField & mongoose.Document;
interface IFieldModel extends mongoose.Model<IFieldDocument> {
  findAllByUserId: (email) => IField[] | boolean;
}
const fieldSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String }, // 알고리즘, 책
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

fieldSchema.statics.create = async function (field: IField) {
  return new this(field);
};

fieldSchema.statics.findAllByUserId = async function (email) {
  return await this.find({
    userId: email,
  }).exec();
};

// Create Model & Export
export default mongoose.model<IFieldDocument, IFieldModel>(
  "Field",
  fieldSchema
);
