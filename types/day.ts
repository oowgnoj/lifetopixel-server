export default interface IDay {
  id: number;
  goodThing: string;
  badThing: string;
  goalTomorrow: string;
  mainActivity: string;
  score: number;
  jobs?: Array<number>;
}
