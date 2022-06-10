import { MovieInfo } from "../movie/MovieInfo";

export interface ReveiwResponseDto {
    writer: string;
    title: string;
    content: string;
    movie: MovieInfo;
}