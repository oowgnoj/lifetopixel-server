import User from "../entity/User";
export declare const signup: (email: any, password: any, username: any) => Promise<User>;
export declare const login: (email: any, password: any) => Promise<{
    user: User;
    token: String;
}>;
export declare const generateToken: (email: any) => string;
