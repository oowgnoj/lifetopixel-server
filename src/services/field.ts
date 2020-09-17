import { Field, User } from "../models";
import { IField } from "../types";

interface IFieldService {
  post: (field: IField, id: string) => void;
  get: (email: string) => any;
}
// optinal type =[week, month, year]
const FieldService: IFieldService = {
  post: async (payload: IField, email) => {
    const { _id } = await User.findOneByEmail(email);
    payload.userId = _id;
    const field = await Field.create(payload);
    return field.save();
  },

  get: async (email) => {
    const { _id } = await User.findOneByEmail(email);
    return Field.findAllByUserId(_id);
  },
};

export default FieldService;
