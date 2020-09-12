export {}; //typescript error handle

import * as mongoose from "mongoose";
import { IJob } from "../types";

// Define Schemes
const jobSchema = new mongoose.Schema(
  {
    name: { type: String, default: false },
    category: { type: String },
    type: { type: String },
    startTime: { type: Date },
    endTime: { type: Date },
    duration: { type: Number }, // 시간 단위
  },
  {
    timestamps: true,
  }
);

// Create new job document
jobSchema.statics.create = function (payload: IJob) {
  // this === Model
  const job = new this(payload);
  // return Promise
  return job.save();
};

// Find All
jobSchema.statics.findAll = function () {
  // return promise
  // V4부터 exec() 필요없음
  return this.find({});
};

// Find One by jobid
jobSchema.statics.findOneByjobid = function (jobId: Number) {
  return this.findOne({ jobId });
};

module.exports = mongoose.model<IJob & mongoose.Document>("Day", jobSchema);
