
import { getRepository, getConnection } from "typeorm";
import { Tag } from "../entity";

//   @Column()
// name: string;
  
// @ManyToOne((type) => User, (user) => user.days)
// @JoinColumn()
// user: User;

// @ManyToMany((type) => Note, note => note.tags)
// @JoinTable()
// notes: Note[];

// optinal type =[week, month, year]
const TagService = {
  post: async (payload: Tag) => {
    const tag = await getRepository(Tag).create(payload);
    const results = await getRepository(Tag).save(tag);
    return results;
  },
  get: async (user, term) => {
    return await getRepository(Tag).find({ user });
  },

  getTags: async (tags: number[])=> {
    return await Promise.all(tags.map(async (tag) => {
      return await getRepository(Tag).findOne({id: tag})
    }));
  }
};

export default TagService;
