export default interface IField {
    _id: string;
    name: string;
    description: string;
    jobIds?: Array<number>;
    noteIds?: Array<number>;
    userId: string;
}
