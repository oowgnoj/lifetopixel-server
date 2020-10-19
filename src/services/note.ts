// import { Note, User } from "../models";
// import { INote } from "../types";
// import { filterPeriod } from "../common/helper";

// interface INoteService {
//   post: (INote) => void;
//   get: (userId: string, term: string) => any;
// }
// // optinal type =[week, month, year]
// const NoteService: INoteService = {
//   post: async (payload: INote) => {
//     const note = await Note.create(payload);
//     return note.save();
//   },
//   get: async (userId, term) => {
//     if (!term) return Note.findAllByUserId(userId);
//     return filterPeriod(await Note.findAllByUserId(userId), term);
//   },
// };

// export default NoteService;
