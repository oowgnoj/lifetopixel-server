import { Job, User } from "../models";
import { IJob } from "../types";
import { filterPeriod } from "../common/helper";

interface IJobService {
  post: (IJob) => void;
  get: (userId: string, term: string) => any;
}
// optinal type =[week, month, year]
const JobService: IJobService = {
  post: async (payload: IJob) => {
    const job = await Job.create(payload);
    return job.save();
  },
  get: async (userId, term) => {
    if (!term) return Job.findAllByUserId(userId);
    return filterPeriod(await Job.findAllByUserId(userId), term);
  },
};

export default JobService;
