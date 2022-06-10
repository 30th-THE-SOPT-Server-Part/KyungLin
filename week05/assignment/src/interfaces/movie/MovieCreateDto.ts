import { MovieCommentInfo } from "./MovieInfo";

export interface MovieCreateDto {
    title: string;
    director: string;
    startDate?: Date;
    thumbnail?: string;
    story?: string;
    comments?: MovieCommentInfo[];
}