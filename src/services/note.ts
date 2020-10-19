import { getRepository } from "typeorm";
import { Note } from "../entity";

// optinal type =[week, month, year]
const NoteService = {
  post: async (payload: Note) => {
    const note = await getRepository(Note).create(payload);
    const results = await getRepository(Note).save(note);
    return results;
  },
  get: async (userId, term) => {
    return await getRepository(Note).find({ user: userId });
  },
};

export default NoteService;
