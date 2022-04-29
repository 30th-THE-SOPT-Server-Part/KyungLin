import express,{ Request, Response, Router} from 'express';

const router:Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.send('<h3> 좋아요 +1 </h3>') 
});
//json말고 send로 내보내기

module.exports = router;