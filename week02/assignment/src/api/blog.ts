import express, { Response, Request, Router} from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.status(500).json({
        status:500,
        message: 'blog 조회 불가능, 서버 오류'
    });
});

module.exports = router;