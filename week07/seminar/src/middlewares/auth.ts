// 토큰을 헤더에서 받아와서 검증해주는 곳

import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import config from "../config";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";

// request의 헤더에 있는 bearer token을 파싱해서 토큰만 가져오기


export default (req: Request, res: Response, next: NextFunction) => {
//split(' ')까지가 (Bearer, token) 이므로 reverse해서 0 인덱스 가져옴

    const token = req.headers["authorization"]?.split(' ').reverse()[0];
    //토큰이 없을 때
    if(!token) {
        return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, message.NULL_VALUE_TOKEN));
    }   
    try{
        const decoded = jwt.verify(token, config.jwtSecret);
        req.body.user = (decoded as any).user;  // payload 꺼내오기, decoded 타입 단언 필요

        next();  // 미들 웨어는 요청과 응답의 중간에 있슴. 검증하고 넘김 next는 미들웨어 실행이 끝나면 다음으로 넘기도록
    } catch (error: any) {
        console.log(error);
        if (error.name === 'TokenExpiredError') {
            return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, message.INVALID_TOKEN));
        }
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));

    }

}