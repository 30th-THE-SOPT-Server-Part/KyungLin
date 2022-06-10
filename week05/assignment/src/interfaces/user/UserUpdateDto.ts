import { SchoolInfo } from "../School/Schoolinfo";

export interface UserUpdateDto {
    // update는 들어올 수도 있고 아닐 수도 있다 -> optional
    // 바꿀 수도 있고 아ㅣㄴㄹ 수도 있으니까 모두 optional

    name?: string;
    phone?: string;
    email?: string;
    age?: number;
    school?: SchoolInfo;
}