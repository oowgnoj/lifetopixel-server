export default interface IJob {
  id: number;
  fieldIds: Array<number>;
  noteId: number;
  name: string;
  category: string;
  type: "input" | "ouput";
  startTime: Date;
  endTime: Date;
  duration: number;
}
