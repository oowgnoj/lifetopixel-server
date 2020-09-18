import { Job, User } from "../models";
import { IJob } from "../types";

interface IJobService {
  post: (IJob, userId) => void;
  get: (userId) => any;
}
// optinal type =[week, month, year]
const JobService: IJobService = {
  post: async (payload: IJob, userId) => {
    payload.userId = userId;
    const job = await Job.create(payload);
    return job.save();
  },
  get: async (userId) => {
    return Job.findAllByUserId(userId);
  },
};

export default JobService;
