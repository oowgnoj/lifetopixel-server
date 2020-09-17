export {}; //typescript error handle

import * as mongoose from "mongoose";
import { IJob } from "../types";

type IJobDocument = IJob & mongoose.Document;

interface IJobModel extends mongoose.Model<IJobDocument> {
  create: (job) => any;
  findAllByUserId: (email) => IJob[] | boolean;
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
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    field: { type: mongoose.Schema.Types.ObjectId, ref: "Field" },
    note: { type: mongoose.Schema.Types.ObjectId, ref: "Note" },
  },
  {
    timestamps: true,
  }
);

jobSchema.statics.create = async function (job: IJob) {
  return new this(job);
};

jobSchema.statics.findAllByUserId = async function (email) {
  return await this.find({
    userId: email,
  }).exec();
};

export default mongoose.model<IJobDocument, IJobModel>("Job", jobSchema);
