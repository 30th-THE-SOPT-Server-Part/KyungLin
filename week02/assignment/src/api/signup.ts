import express, {Request, Response, Router} from 'express';

const router: Router = express.Router();

router.get('/', (req: Request,res: Response) => {
    return res.status(503).json({
        status: 503,
        message: '회원가입 서비스를 이용할 수 없습니다.'
    });
});

module.exports = router;