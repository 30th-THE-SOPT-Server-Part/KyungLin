import { SchoolInfo } from "../School/Schoolinfo";

export interface UserInfo {
    name: string;
    phone: string;
    email: string;
    age: number;
    school: SchoolInfo;
    // school: {
    //     name: string;
    //     major: string
    // }
}