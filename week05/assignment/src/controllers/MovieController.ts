import express, { Request, Response } from "express"
import { MovieCommentCreateDto } from "../interfaces/movie/MovieCommentCreateDto";
import { MovieCommentUpdateDto } from "../interfaces/movie/MovieCommentUpdateDto";
import { MovieUpdateDto } from "../interfaces/movie/MovieUpdateDto";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import MovieService from "../services/MovieService"

const { validationResult } = require('express-validator');

/**
 *  @route POST /movie
 *  @desc Create Movie
 *  @access Public
 */

const createMovie = async(req: Request, res: Response) => {

    const error = validationResult(req);
    if (!error.isEmpty()){
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }

    const movie = req.body;

    try{
        const data = MovieService.createMovie(movie);

        if(!data){
            res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.CREATE_MOVIE_FAIL));
        }

        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_MOVIE_SUCCESS, data));
    } catch(error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
};

/**
 *  @route PUT /movie/:movieId
 *  @desc Read Movie
 *  @access Public
 */

const updateMovie = async(req: Request, res: Response) => {
    const { movieId } = req.params;
    const movieUpdateDto: MovieUpdateDto = req.body;

    try{
        await MovieService.updateMovie(movieId, movieUpdateDto);

        res.status(statusCode.OK).send(util.success(statusCode.OK, message.UPDATE_MOVIE_SUCCESS));
    } catch(error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

/**
 *  @route GET /movie/movieId
 *  @desc GET Movie
 *  @access Public
 */

const getMovie = async(req: Request, res: Response) => {
    const { movieId } = req.params;

    try{
        const  data = await MovieService.getMovie(movieId);
        if (!data){
            res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.READ_MOVIE_FAIL));
        }
        else res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_MOVIE_SUCCESS, data));
    }catch(error){
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

/**
 *  @route DELETE /movie
 *  @desc Delete Movie
 *  @access Public
 */

const deleteMovie = async(req: Request, res: Response) => {
    const { movieId } = req.params;

    try{
        await MovieService.deleteId(movieId);

        res.status(statusCode.NO_CONTENT).send(util.success(statusCode.NO_CONTENT, message.DELETE_MOVIE_SUCCESS));
    } catch(error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

/**
 *  @route CREATE /movie/:movieId/comment
 *  @desc create Movie Comment
 *  @access Public
 */


const createMovieComment = async(req: Request, res:Response) => {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }

    
    const movieCommentCreateDto: MovieCommentCreateDto = req.body;
    const { movieId } = req.params;

    try{
        const data = await MovieService.createMovieComment(movieId, movieCommentCreateDto);
        if(!data) res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND,message.NOT_FOUND));

        else res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_MOVIE_COMMENT_SUCCESS, data));
    }catch(error){
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

/**
 *  @route PUT /movie/:movieId/comments/:commentId
 *  @desc PUT MovieComment
 *  @access Public
 */

const updateMovieComment = async(req: Request, res: Response) => {
    const { movieId, commentId } = req.params;
    const commentUpdateDto: MovieCommentUpdateDto = req.body;
    try{
        const data = await MovieService.updateMovieComment(movieId, commentId, req.body.user.id, commentUpdateDto);
        if(!data) return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));

        res.status(statusCode.NO_CONTENT).send();
        
    } catch(error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
    
}

export default {
    createMovie,
    updateMovie,
    getMovie,
    deleteMovie,
    createMovieComment,
    updateMovieComment

}