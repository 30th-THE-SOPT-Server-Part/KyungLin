import { SchoolInfo } from "../school/SchoolInfo";

export interface UserInfo {
    name: string;
    phone: string;
    email: string;
    age: number;
    school: SchoolInfo;
    
    // 가능하긴하나 분리하는게 더 굳
    // school: {
    //     name: string;
    //     major: string;
    // }

}