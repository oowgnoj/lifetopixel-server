import { Day, User } from "../models";
import { IDay } from "../types";

interface IDayService {
  post: (payload: IDay, uid: string) => void;
  get: (email: string) => any;
}
// optinal type =[week, month, year]
const DayService: IDayService = {
  post: async (payload: IDay, uid) => {
    payload.userId = uid;
    const day = await Day.create(payload);
    return day.save();
  },
  get: async (uid) => {
    return Day.findAllByUserId(uid);
  },
};

export default DayService;
