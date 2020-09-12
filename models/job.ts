export {}; //typescript error handle

import * as mongoose from "mongoose";
import { IJob } from "../types";

type IJobDocument = IJob & mongoose.Document;

interface IJobModel extends mongoose.Model<IJobDocument> {
  findAll: () => [IJob];
  create: (job) => any;
}

// Define Schemes
const jobSchema = new mongoose.Schema(
  {
    name: { type: String, default: false },
    category: { type: String },
    type: { type: String }, //input or output
    startTime: { type: Date },
    endTime: { type: Date },
    duration: { type: Number }, // 시간 단위
    field: { type: mongoose.Schema.Types.ObjectId, ref: "Field" },
    memo: { type: mongoose.Schema.Types.ObjectId, ref: "Memo" },
  },
  {
    timestamps: true,
  }
);

jobSchema.statics.create = function (payload: IJob) {
  const job = new this(payload);
  return job.save();
};

// Find All
jobSchema.statics.findAll = function () {
  return this.find({});
};

export default mongoose.model<IJobDocument & IJobModel>("Job", jobSchema);
