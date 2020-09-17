import { Note, User } from "../models";
import { INote } from "../types";

interface INoteService {
  post: (INote, uid) => void;
  get: (email) => any;
}
// optinal type =[week, month, year]
const NoteService: INoteService = {
  post: async (payload: INote, email) => {
    const { _id } = await User.findOneByEmail(email);
    payload.userId = _id;
    const note = await Note.create(payload);
    return note.save();
  },
  get: async (email) => {
    const { _id } = await User.findOneByEmail(email);
    return Note.findAllByUserId(_id);
  },
};

export default NoteService;
