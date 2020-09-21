export default interface IJob {
  name: string;
  category: string;
  type: "input" | "ouput";
  memo: string;
  startTime: Date;
  endTime: Date;
  duration: number;
  userId: string;
  fieldIds: Array<number>;
  noteId: number;
}
