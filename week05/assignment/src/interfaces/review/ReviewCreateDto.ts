import mongoose from "mongoose";


export interface RevieCreateDto {
    writer: mongoose.Types.ObjectId;
    title: string;
    content: string;
}

// movie는 params로 넣을거