import { Day } from "../models";
import { IDay } from "../types";

interface IDayService {
  postDay: (IDay) => void;
  getDay: () => any;
}
const DayService: IDayService = {
  postDay: (payload: IDay) => {
    const day = new Day(payload);
    return day.save();
  },
  getDay: async () => {
    return Day.find({});
  },
};

export default DayService;
