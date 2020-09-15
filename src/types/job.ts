export default interface IJob {
  userId: string;
  fieldIds: Array<number>;
  noteId: number;
  name: string;
  category: string;
  type: "input" | "ouput";
  startTime: Date;
  endTime: Date;
  duration: number;
}
