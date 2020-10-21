import { getRepository } from "typeorm";
import { Job } from "../entity";

// optinal type =[week, month, year]
const JobService = {
  post: async (payload: Job) => {
    const job = await getRepository(Job).create(payload);
    const results = await getRepository(Job).save(job);
    return results;
  },
  get: async (userId) => {
    return await getRepository(Job).find({relations: ['note'], where: { user: userId}});
  },
};

export default JobService;
