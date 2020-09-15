export const filterPeriod = (data, term) => {
  let target = new Date();
  switch (term) {
    case "week":
      console.log("here");
      target.setDate(target.getDate() - 7);
      data = data.filter((day) => day.createdAt > target);
    case "month":
      target.setDate(target.getDate() - 30);
      data = data.filter((day) => day.createdAt > target);
    case "year":
      target.setDate(target.getDate() - 365);
      data = data.filter((day) => day.createdAt > target);
  }
  return data;
};

export default {};
