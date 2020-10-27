import { getRepository } from "typeorm";
import { Note } from "../entity";
import { TagService } from "../services";


const NoteService = {
  post: async (payload, user: number) => {
    const tags = await TagService.getTags(payload.tags)
    payload.tags = tags
    const note = await getRepository(Note).create(payload);
    return await getRepository(Note).save(note);
  },
  get: async (userId, term) => {
    return await getRepository(Note).find({ user: userId });
  },
};

export default NoteService;
