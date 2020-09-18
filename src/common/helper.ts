import { isArray } from "util";

// 배열과
export const filterPeriod = (data: Array<any>, term: string) => {
  const target = new Date();
  const range = { today: 1, week: 7, month: 30, year: 365 };
  if (term in range) {
    target.setDate(target.getDate() - range[term]);
    return data.filter((element: any) => element.createdAt > target);
  } else {
    throw new Error("기간을 확인해주세요");
  }
};

export default {};
