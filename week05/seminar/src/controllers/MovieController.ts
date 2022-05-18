import express, { Request, Response } from "express";
import statusCode from "../modules/statusCode"
import message from "../modules/responseMessage";
import util from "../modules/util";
import { MovieCommentInfo } from "../interfaces/movie/MovieInfo";
import { MovieCreateDto } from "../interfaces/movie/MovieCreateDto";
import MovieService from "../services/MovieService";
import { MovieCommentCreateDto } from "../interfaces/movie/MovieCommentCreateDto";
import MovieCommentUpdateDto from "../interfaces/movie/MovieCommentUpdateDto";
const { validationResult } = require('express-validator');
const createMovie = async(req: Request, res: Response) => {

    const error = validationResult(req);
    if (!error.isEmpty()){
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }

    const movieCreateDto: MovieCreateDto = req.body;

    try {
        const movie = await MovieService.createMovie(movieCreateDto);
        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_MOVIE_SUCCESS, movie));
    } catch(error) {
        console.log(error)
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}
const createMovieComment = async(req: Request, res: Response) => {

    const error = validationResult(req);
    if (!error.isEmpty()){
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }

    const { movieId } =req.params;
    const movieCommentCreateDto: MovieCommentCreateDto = req.body;
    try {

        const data = await MovieService.createMovieComment(movieId, movieCommentCreateDto);

        if(!data) res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
        
        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED,message.CREATE_MOVIE_COMMENT_SUCCESS,data))
    }catch(error) {
        console.log(error)
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

const getMovie = async(req: Request, res: Response) => {

    const { movieId } = req.params;
    try{
        const data = await MovieService.getMovie(movieId);

        if (!data){
            res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
        }

        res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_MOVIE_COMMENT_SUCCESS));

    } catch(error) {
        console.log(error)
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }

}
/**
 *  PUT 
 * /movie/:movieId
 * private
 */
const updateMovieComment = async(req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()){
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }
    
    const { movieId } = req.params;
    const { commentId } = req.params;
    const commentUpdateDto: MovieCommentUpdateDto = req.body;

    try {
        const data = await MovieService.updateMovieComment(movieId, commentId, req.body.user.id, commentUpdateDto);
        if (!data) return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));

        res.status(statusCode.NO_CONTENT).send();
    } catch(error) {
        console.log(error)
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default {
    createMovie,
    createMovieComment,
    getMovie,
    updateMovieComment
}