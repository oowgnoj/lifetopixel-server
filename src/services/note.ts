import { Note, User } from "../models";
import { INote } from "../types";

interface INoteService {
  post: (INote, uid) => void;
  get: (email) => any;
}
// optinal type =[week, month, year]
const NoteService: INoteService = {
  post: async (payload: INote, userId) => {
    payload.userId = userId;
    const note = await Note.create(payload);
    return note.save();
  },
  get: async (userId) => {
    return Note.findAllByUserId(userId);
  },
};

export default NoteService;
