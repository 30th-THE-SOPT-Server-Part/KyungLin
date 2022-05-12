import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { MovieCreateDto } from "../interfaces/movie/MovieCreateDto";
import { MovieResponseDto } from "../interfaces/movie/MovieResponseDto";
import { MovieUpdateDto } from "../interfaces/movie/MovieUpdateDto";
import Movie from "../models/Movie";


const createMovie = async(movieCreateDto: MovieCreateDto): Promise<PostBaseResponseDto> => {

    try{
        const newMovie = new Movie({
            title: movieCreateDto.title,
            director: movieCreateDto.director,
            startDate: movieCreateDto.startDate,
            thumbnail: movieCreateDto.thumbnail,
            story: movieCreateDto.story
        })

        await newMovie.save()

        const data = {
            _id: newMovie._id
        }

        return data
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const updateMovie = async(movieId: string, movieUpdateDto: MovieUpdateDto): Promise<void> => {
    try {
        await Movie.findByIdAndUpdate(movieId, movieUpdateDto);
        
    } catch(error) {
        console.log(error);
        throw error;
    }
}

const getMovie = async(movieId: string): Promise<MovieResponseDto | null> => {
    
    try {
        const data = await Movie.findById(movieId);

        if (!data){
            return null
        }
        return data
    } catch(error) {
        console.log(error);
        throw error;
    }
};

const deleteId = async(movieId: string): Promise<void> => {
    try{
        await Movie.findByIdAndDelete(movieId);
    } catch(error) {
        console.log(error);
        throw error;
    }
}
export default {
    createMovie,
    updateMovie,
    getMovie,
    deleteId
}