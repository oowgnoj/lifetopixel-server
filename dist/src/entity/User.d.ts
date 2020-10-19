import { BaseEntity } from "typeorm";
import { Day } from "./Day";
import { Job } from "./Job";
export declare class User extends BaseEntity {
    id: number;
    email: string;
    password: string;
    userName: string;
    days: Day[];
    jobs: Job[];
    registeredAt: Date;
    hashpPassword(): Promise<void>;
    comparePassword(candidatePassword: string): Promise<boolean>;
}
export default User;
