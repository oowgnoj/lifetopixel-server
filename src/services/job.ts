import { Job, User } from "../models";
import { IJob } from "../types";

interface IJobService {
  post: (IJob, uid) => void;
  get: (email) => any;
}
// optinal type =[week, month, year]
const JobService: IJobService = {
  post: async (payload: IJob, email) => {
    const { _id } = await User.findOneByEmail(email);
    payload.userId = _id;
    const job = await Job.create(payload);
    return job.save();
  },
  get: async (email) => {
    const { _id } = await User.findOneByEmail(email);
    return Job.findAllByUserId(_id);
  },
};

export default JobService;
