import { Day, User } from "../models";
import { IDay } from "../types";
import { filterPeriod } from "../common/helper";

interface IDayService {
  post: (payload: IDay) => void;
  get: (userId: string, term: string) => any;
}

const DayService: IDayService = {
  post: async (payload: IDay) => {
    return await Day.create(payload);
  },
  get: async (userId, term) => {
    if (!term) return Day.findAllByUserId(userId);
    return filterPeriod(await Day.findAllByUserId(userId), term);
  },
};

export default DayService;
