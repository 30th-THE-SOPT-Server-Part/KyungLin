import express, {Router} from 'express';

const router: Router = express.Router();

router.use('/user', require('./user')); //use를 쓰는 이유 -> /user로 들어온 모든 요청을 user 모듈에 가져다 줄거임

module.exports = router;