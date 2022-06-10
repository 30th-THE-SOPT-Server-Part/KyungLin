import express, { Request, Response } from "express";
import { UserCreateDto } from "../interfaces/user/UserCreateDto";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { UserService } from "../services";
import { UserUpdateDto } from "../interfaces/user/UserUpdateDto";
const { validationResult } = require('express-validator');
/**
 *  @route POST /user
 *  @desc Create User
 *  @access Public
 */

const createUser = async (req: Request, res: Response) => {
    
    const error = await validationResult(req);

    if (!error.isEmpty()){

        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, error));
    }

    const userCreateDto: UserCreateDto = req.body;

    try {
        const data = await UserService.createUser(userCreateDto);
    
        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED,message.CREATE_USER_SUCCESS))
    } catch (error) {
        console.log(error);

        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.DB_ERROR,message.INTERNAL_SERVER_ERROR))
    } //async await를 사용하기 때문에 이때 발생하는 에러를 try catch를 써야함
};

/**
 *  @route PUT /user/:userId
 *  @desc update User
 *  @access Public
 */

const updateUser = async (req:Request, res: Response) => {
    const userUpdateDto: UserUpdateDto = req.body;
    const { userId } = req.params;
    try {
        await UserService.updateUser(userId, userUpdateDto);
    
        res.status(statusCode.NO_CONTENT).send();
    } catch (error) {

        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.DB_ERROR,message.INTERNAL_SERVER_ERROR))
    }
}

/**
 *  @route GET /user/:userId
 *  @desc read User
 *  @access Public
 */

const findUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const data = await UserService.findUserById(userId);

        if(!data) {
            res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.DB_ERROR,message.INTERNAL_SERVER_ERROR))
        }

        res.status(statusCode.OK).send(util.success(statusCode.DB_ERROR,message.INTERNAL_SERVER_ERROR))
    }  catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.DB_ERROR,message.INTERNAL_SERVER_ERROR))
    }
}
/**
 *  @route DELETE /user/:userId
 *  @desc delete User
 *  @access Public
 */
const deleteUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        await UserService.deleteUserById(userId);

        res.status(statusCode.NO_CONTENT).send();  // 204
    }  catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.DB_ERROR,message.INTERNAL_SERVER_ERROR))
    }
}

export default {
    createUser,
    updateUser,
    findUserById,
    deleteUserById
}