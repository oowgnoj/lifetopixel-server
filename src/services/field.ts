import { Field, User } from "../models";
import { IField } from "../types";

interface IFieldService {
  post: (field: IField, userId: string) => void;
  get: (userId: string) => any;
}
// optinal type =[week, month, year]
const FieldService: IFieldService = {
  post: async (payload: IField, userId) => {
    payload.userId = userId;
    const field = await Field.create(payload);
    return field.save();
  },

  get: async (userId) => {
    return Field.findAllByUserId(userId);
  },
};

export default FieldService;
