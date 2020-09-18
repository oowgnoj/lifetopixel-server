import { Day, User } from "../models";
import { IDay } from "../types";

interface IDayService {
  post: (payload: IDay, userId: string) => void;
  get: (userId: string) => any;
}
// optinal type =[week, month, year]
const DayService: IDayService = {
  post: async (payload: IDay, userId) => {
    payload.userId = userId;
    const day = await Day.create(payload);
    return day.save();
  },
  get: async (userId) => {
    return Day.findAllByUserId(userId);
  },
};

export default DayService;
