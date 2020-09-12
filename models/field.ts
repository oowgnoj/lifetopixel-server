export {}; //typescript error handle

import * as mongoose from "mongoose";
import { IField } from "../types";

type IFieldDocument = IField & mongoose.Document;

interface IFieldModel extends mongoose.Model<IFieldDocument> {
  findAll: () => [IField];
  create: (field) => any;
}
const fieldSchema = new mongoose.Schema(
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

fieldSchema.statics.create = function (payload: IField) {
  const field = new this(payload);
  return field.save();
};

// Find All
fieldSchema.statics.findAll = function () {
  return this.find({});
};
// Create Model & Export
export default mongoose.model<IFieldDocument & IFieldModel>(
  "Field",
  fieldSchema
);
