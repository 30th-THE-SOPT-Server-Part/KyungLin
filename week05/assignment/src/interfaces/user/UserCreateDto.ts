import { SchoolInfo } from "../School/Schoolinfo";

export interface UserCreateDto {
    name: string;
    phone: string;
    email: string;
    password: string;
    age?: number;
    school?: SchoolInfo;
}