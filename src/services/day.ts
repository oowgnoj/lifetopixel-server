import { Day } from "../models";
import { IDay } from "../types";

interface IDayService {
  postDay: (IDay) => void;
  getDay: () => any;
}
// optinal type =[week, month, year]
const DayService: IDayService = {
  postDay: async (payload: IDay) => {
    const day = new Day(payload);
    return day.save();
  },
  getDay: async () => {
    return Day.find({});
  },
};

export default DayService;
