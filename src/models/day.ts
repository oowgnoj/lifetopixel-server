export {}; //typescript error handle

import * as mongoose from "mongoose";
import { IDay, IUser } from "../types";

type IDayDocument = IDay & mongoose.Document;

interface IDayModel extends mongoose.Model<IDayDocument> {
  findAllByUserId: (email) => IUser | boolean;
}
// Define Schemes
const daySchema = new mongoose.Schema(
  {
    goodThing: { type: String },
    badThing: { type: String },
    goalTomorrow: { type: String },
    mainActivity: { type: String },
    score: { type: Number },
    jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

daySchema.statics.create = async function (day: IDay) {
  return new this(day);
};

daySchema.statics.findAllByUserId = async function (id) {
  return await this.find({
    userId: id,
  }).exec();
};

// Create Model & Export
export default mongoose.model<IDayDocument, IDayModel>("Day", daySchema);
