import Day from "../entity/Day";
declare const DayService: {
    post: (payload: Day) => Promise<Day>;
    get: (userId: any, term: any) => Promise<Day[]>;
};
export default DayService;
