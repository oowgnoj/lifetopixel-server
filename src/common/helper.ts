export const filterPeriod = (data: Array<any>, term: string) => {
  let target = new Date();
  switch (term) {
    case "week":
      target.setDate(target.getDate() - 7);
      data = data.filter((element: any) => element.createdAt > target);
    case "month":
      target.setDate(target.getDate() - 30);
      data = data.filter((element: any) => element.createdAt > target);
    case "year":
      target.setDate(target.getDate() - 365);
      data = data.filter((element: any) => element.createdAt > target);
  }
  return data;
};

export default {};
