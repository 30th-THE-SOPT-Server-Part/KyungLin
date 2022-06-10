import express, { Request, Response } from "express";
import statusCode from "../modules/statusCode"
import message from "../modules/responseMessage";
import util from "../modules/util";
import { RevieCreateDto } from "../interfaces/review/ReviewCreateDto";
import ReviewService from "../services/ReviewService";
import { ResponseContentEncoding } from "aws-sdk/clients/s3";

const { validationResult } = require('express-validator');

const createReview = async(req: Request, res: Response) => {
    
    const error = validationResult(req);
    if (!error.isEmpty()){
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }

    const reviewCreateDto: RevieCreateDto = req.body;
    const { movieId } = req.params;
    try{
        const data = await ReviewService.createReview(movieId, reviewCreateDto);

        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_REVIEW_SUCCESS, data));
        
    } catch(error){
        console.log(error)
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
};

const getReviews = async(req: Request, res: ResponseContentEncoding) => {

    const { search } = req.query;

    // const { movieId } = req.params;

    const page: number = Number(req.query.page || 1);
    try{
    
        const data = await ReviewService.getReviews(search as string, page);


        res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_REVEIW_SUCCESS, data));
    }catch(error){
        console.log(error)
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}




export default {
    createReview,
    getReviews
}