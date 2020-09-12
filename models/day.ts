export {}; //typescript error handle

import * as mongoose from "mongoose";
import { IDay } from "../types";

type IDayDocument = IDay & mongoose.Document;

interface IDayModel extends mongoose.Model<IDayDocument> {
  findAll: () => [IDay];
  create: (day) => any;
}
// Define Schemes
const daySchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true, required: true },
    goodThing: { type: String },
    badThing: { type: String },
    goalTomorrow: { type: String },
    mainActivity: { type: String },
    score: { type: Number },
    jobIds: { type: Array },
  },
  {
    timestamps: true,
  }
);

daySchema.statics.create = function (payload: IDay) {
  const day = new this(payload);
  return day.save();
};

// Find All
daySchema.statics.findAll = function () {
  return this.find({});
};

// Create Model & Export
export default mongoose.model<IDayDocument, IDayModel>("Day", daySchema);
