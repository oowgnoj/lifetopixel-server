export default interface INote {
  _id: string;
  fieldId: number;
  title: string;
  summary: string;
  detail: string;
  tag: Array<string>;
  urls: Array<string>;
  userId: string;
}
