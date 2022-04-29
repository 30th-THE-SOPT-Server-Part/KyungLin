import express, {Request,Response,Router} from 'express';

const router: Router = express.Router(); 

router.get('/',(req:Request, res:Response) => {
    return res.status(200).json({
        satus:200,
        message: '유저 조회 성공'
    });
});

router.get('/',(req:Request, res:Response) => {
    return res.status(200).json({
        status: 200,
        message: '유저 조회 성공'
    }); //http 상태 코드를 던져주는 것임
});

module.exports = router;