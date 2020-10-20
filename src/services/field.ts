import { getRepository } from "typeorm";

import { Field } from "../entity";

const FieldService = {
  post: async (payload: Field) => {
    const field = await getRepository(Field).create(payload);
    const results = await getRepository(Field).save(field);
    return results;
  },
  get: async (userId, term) => {
    return await getRepository(Field).find({ user: userId });
  },
};

export default FieldService;
