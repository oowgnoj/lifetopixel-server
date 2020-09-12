export default interface INote {
  id: number;
  fieldId: number;
  title: string;
  summary: string;
  detail: string;
  tag: Array<string>;
}
