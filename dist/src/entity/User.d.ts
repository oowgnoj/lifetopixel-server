import { BaseEntity } from "typeorm";
import { Day } from './Day';
export declare class User extends BaseEntity {
    id: number;
    email: string;
    password: string;
    userName: string;
    days: Day[];
    hashpPassword(): Promise<void>;
    comparePassword(candidatePassword: string): Promise<boolean>;
}
export default User;
