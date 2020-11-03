import { getRepository, getConnection } from "typeorm";
import { Tag } from "../entity";

const TagService = {
  post: async (payload) => {
    const tag = await getRepository(Tag).create(payload);
    return await getRepository(Tag).save(tag);
  },

  get: async (user, term) => {
    return await getRepository(Tag).find({ user });
  },

  getOrCreate: async (tags, user) => {
    return await Promise.all(
      tags.map(async (tag) => {
        return await getRepository(Tag)
          .findOneOrFail({ id: tag })
          .catch((err) => TagService.post({ name: tag, user: user }));
      })
    );
  },
};

export default TagService;
