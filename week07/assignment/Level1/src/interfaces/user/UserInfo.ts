import { SchoolInfo } from "../School/Schoolinfo";

export interface UserInfo {
    name: string;
    phone: string;
    email: string;
    password: string;
    age: number;
    school: SchoolInfo;
    // school: {
    //     name: string;
    //     major: string
    // }
}