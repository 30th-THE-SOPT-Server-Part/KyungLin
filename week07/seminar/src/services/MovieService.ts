import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { MovieCreateDto } from "../interfaces/movie/MovieCreateDto";
import Movie from "../models/Movie";
import { MovieCommentInfo } from "../interfaces/movie/MovieInfo";
import { MovieCommentCreateDto } from "../interfaces/movie/MovieCommentCreateDto";
import { MovieInfo } from "../interfaces/movie/MovieInfo";
import MovieResponseDto from "../interfaces/movie/MovieResponseDto";
import MovieCommentUpdateDto from "../interfaces/movie/MovieCommentUpdateDto";
import { MovieOptionType } from "../interfaces/movie/MovieOptionType";
const createMovie = async (movieCreateDto: MovieCreateDto): Promise<PostBaseResponseDto> => {
    try {
        const movie = new Movie(movieCreateDto);

        await movie.save()

        const data = {
            _id: movie._id
        }
        return data;
    } catch(error) {
        console.log(error);
        throw error;
    }
};

const createMovieComment = async(movieId: string, movieCommentCreateDto: MovieCommentCreateDto): Promise<MovieInfo | null> => {
    try{
        const movie = await Movie.findById(movieId);
        if(!movie) return null;

        const newComments: MovieCommentInfo[] = [...movie.comments, movieCommentCreateDto];  // 자바스크립트 문법 스프레드로 기존 코멘트에 새로운 코멘트를 더한다
        const updatedMovie = await Movie.findOneAndUpdate({_id: movieId}, { comments: newComments}, {new: true});
        if (!updatedMovie) return null;

        return updatedMovie;


    }catch(error) {
        console.log(error);
        throw error;
    }
};

const getMovie = async(movieId: string): Promise<MovieResponseDto|null> => {
    try{
    const movie = await Movie.findById(movieId).populate('comments.writer','name');
    if (!movie) return null;
    
    return movie;

    } catch(error) {
        console.log(error);
        throw error;
    }
}

const updateMovieComment = async(movieId: string, commentId: string, userId: string,movieCommentUpdateDto: MovieCommentUpdateDto): Promise<MovieInfo|null> => {
    try {
        const movie = await Movie.findById(movieId);
        if(!movie) return null;

        const data = await Movie.findOneAndUpdate(
            { _id: movieId, comments: { $elemMatch: {_id: commentId, writer: userId}}},
            {
                $set: {
                    'comments.$.writer': userId,
                    'comments.$.comment': movieCommentUpdateDto.comment,
                }
            }, { new: true});
            return data;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

// const getMoviesBySearch = async (search: string): Promise<MovieResponseDto[]> => {
//     const regex = (pattern: string) => new RegExp(`.*${pattern}.*`);

//     try{
//         const titleRegex =regex(search);

//         const movies = await Movie.find({title: {$regex: titleRegex}});

//         return movies;
//     } catch(error) {
//         console.log(error);
//         throw error;
//     }
// }

const getMoviesBySearch = async (search: string, option: MovieOptionType, page: number): Promise<MovieResponseDto[]> => {
    const regex = (pattern: string) => new RegExp(`.*${pattern}.*`);

    let movies: MovieInfo[] = [];
    const perPage: number = 2;

    try{
        const titleRegex =regex(search);

        if (option === 'title') {
            movies = await Movie.find({ title: {$regex: titleRegex}});
        } else if (option === 'director') {
            movies = await Movie.find({director: {$regex: titleRegex}});
        } else {
            movies = await Movie.find({
                $or: [
                    {director: {$regex: titleRegex}},
                    {title: {$regex: titleRegex}},
                ]
            });
        }

        movies = await Movie.find({title: {$regex: titleRegex}})
            .sort({ createdAt: -1 })
            .skip(perPage * (page - 1))
            .limit(perPage);

        const total: number = await Movie.countDocuments({});
        const lastPage: number = Math.ceil(total / perPage);
        

        return movies;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

export default {
    createMovie,
    createMovieComment,
    getMovie,
    updateMovieComment,
    getMoviesBySearch, 
}