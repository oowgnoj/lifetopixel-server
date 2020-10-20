import { getRepository } from "typeorm";

import Day from "../entity/Day";

const DayService = {
  post: async (payload: Day) => {
    const day = await getRepository(Day).create(payload);
    const results = await getRepository(Day).save(day);
    return results;
  },
  get: async (userId, term) => {
    return await getRepository(Day).find({ user: userId });
  },
};

export default DayService;
