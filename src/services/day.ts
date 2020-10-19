
// import {getConnection} from "typeorm";
// import {Day} from '../entity/Day'

// export function getDay(req: Request, res: Response) {
//     return getConnection().getRepository(Day).find();
// }

import {getConnection, getRepository} from "typeorm";

import Day from '../entity/Day'
import { IDay } from "../types";
import { filterPeriod } from "../common/helper";


const DayService = {
  post: async (payload: Day) => {
    const day = await getRepository(Day).create(payload);
    const results = await getRepository(Day).save(day)
    return results
  },
  get: async (userId, term) => {
    return await getRepository(Day).find({user:userId})
  },
};

export default DayService;
