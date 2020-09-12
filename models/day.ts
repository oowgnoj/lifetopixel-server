export {}; //typescript error handle

import * as mongoose from "mongoose";
import { IDay } from "../types";

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

daySchema.statics.create = async function (payload: IDay) {
  const day = new this(payload);
  return day.save();
};

// Find All
daySchema.statics.findAll = function () {
  return this.find({});
};

// Find One by day_id
daySchema.statics.findOneByday_id = function (day_id: Number) {
  return this.findOne({ day_id });
};

daySchema.statics.findNdays = function (numDays: number) {
  const today = new Date();
  const pastWeek = new Date(new Date(today).setDate(today.getDate() - numDays));
  return this.find({
    createdAt: { $gte: today, $lt: pastWeek },
  });
};
// Create Model & Export
module.exports = mongoose.model<IDay & mongoose.Document>("Day", daySchema);
