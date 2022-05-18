import mongoose from "mongoose";

export interface PostBaseResponseDto {
    _id: mongoose.Schema.Types.ObjectId
}
// mongoose는 id가 영어로 복잡하게 되어있음. string type도 되고 mongoose.Schema.Types.ObjectId로도 씀