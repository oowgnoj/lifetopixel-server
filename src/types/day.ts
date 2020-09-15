export default interface IDay {
  userId: string;
  goodThing: string;
  badThing: string;
  goalTomorrow: string;
  mainActivity: string;
  score: number;
  jobs?: Array<number>;
}
