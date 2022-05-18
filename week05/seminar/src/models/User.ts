import mongoose from "mongoose";
import { UserInfo } from "../interfaces/user/UserInfo";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  // null이 될 수 없음
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number
    },
    school: {
        name: { type: String },
        major: { tupe: String }
    },
    
});

export default mongoose.model<UserInfo & mongoose.Document>("User",UserSchema);  //<어떤 type으로>("어떤 이름으로", 어떤 것을 내보낼거임)
