import { SchoolInfo } from "../School/Schoolinfo";

export interface UserCreateDto {
    name: string;
    phone: string;
    email: string;
    age?: number;
    school?: SchoolInfo;
}