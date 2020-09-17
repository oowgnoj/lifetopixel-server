import { Day, User } from "../models";
import { IDay } from "../types";

interface IDayService {
  post: (payload: IDay, uid: string) => void;
  get: (email: string) => any;
}
// optinal type =[week, month, year]
const DayService: IDayService = {
  post: async (payload: IDay, email) => {
    const { _id } = await User.findOneByEmail(email);
    payload.userId = _id;
    const day = await Day.create(payload);
    return day.save();
  },
  get: async (email) => {
    const { _id } = await User.findOneByEmail(email);
    return Day.findAllByUserId(_id);
  },
};

export default DayService;
