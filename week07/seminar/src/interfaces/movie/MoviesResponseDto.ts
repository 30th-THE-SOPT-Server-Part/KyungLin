import { MovieResponseDto } from "./MovieResponseDto";

export interface MoviesResponseDto {
    movies: MoviesResponseDto[];
    lastPage: number;
}