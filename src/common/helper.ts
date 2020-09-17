export const filterPeriod = (data: Array<any>, term: string) => {
  const target = new Date();
  const range = { week: 7, month: 30, year: 365 };
  target.setDate(target.getDate() - range[term]);
  return data.filter((element: any) => element.createdAt > target);
};

export default {};
