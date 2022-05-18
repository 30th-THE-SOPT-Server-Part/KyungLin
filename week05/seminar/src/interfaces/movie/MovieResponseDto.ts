import { MovieCommentInfo } from "./MovieInfo";

export default interface MovieResponseDto {
    title: string;
    director: string;
    startDate: Date;
    thumbnail?: string;
    comments: MovieCommentInfo;
}