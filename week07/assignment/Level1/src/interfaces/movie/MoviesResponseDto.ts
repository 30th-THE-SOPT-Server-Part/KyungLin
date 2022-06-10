import MovieResponseDto from "./MovieResponseDto";

export interface MvoiesResponseDto {
    movies: MovieResponseDto[];
    lastPage: number;
}