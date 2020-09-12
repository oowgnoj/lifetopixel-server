export default interface IField {
  id: number;
  name: string;
  description: string;
  jobIds?: Array<number>;
  noteIds?: Array<number>;
}
