import express, { Response, Request, Router} from 'express';
import { rm,sc } from '../constants/index';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.status(sc.SERVICE_UNAVAILABLE).json({
        status: sc.SERVICE_UNAVAILABLE,
        message: rm.INTERNAL_SERVER_ERROR
    });
});

module.exports = router;