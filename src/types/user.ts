export default interface IUser {
  _id: string;
  email: number;
  nickname: string;
  password: string;
  days: Array<string>;
  fields: Array<string>;
  memos: Array<string>;
  jobs: Array<string>;
}
