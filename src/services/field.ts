// import { Field, User } from "../models";
// import { IField } from "../types";
// import { filterPeriod } from "../common/helper";

// interface IFieldService {
//   post: (field: IField) => void;
//   get: (userId: string, term: string) => any;
// }
// // optinal type =[week, month, year]
// const FieldService: IFieldService = {
//   post: async (payload: IField) => {
//     const field = await Field.create(payload);
//     return field.save();
//   },

//   get: async (userId, term) => {
//     if (!term) return Field.findAllByUserId(userId);
//     return filterPeriod(await Field.findAllByUserId(userId), term);
//   },
// };

// export default FieldService;
