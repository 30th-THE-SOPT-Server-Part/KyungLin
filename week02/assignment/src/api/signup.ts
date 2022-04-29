import express, {Request, Response, Router} from 'express';
import { User,userStorage } from '../models/user';

const router: Router = express.Router();
import { rm,sc } from '../constants/index';

router.post('/', (req: Request,res: Response) => {

    const { id, name } = req.body;

    if (id && name) {
        // 아이디 중복 검사
        if (userStorage.hasUserId(id)) {
            return res.status(sc.CONFLICT).json({
                status: sc.CONFLICT,
                message: rm.ALREADY_ID
            });
        } else {
            const newUser: User = {id: id, name: name};
            userStorage.addUser(newUser);
            return res.status(sc.CREATED).json({
                status: sc.CREATED,
                message: rm.SINGUP_SUCCESS
            });
        }
    } else {
        // 아이디, 이름 기입하지 않았을 때
        return res.status(sc.NOTFOUND).json({
            status: sc.NOTFOUND,
            message: rm.INVAILD_FORM
        }); 
    }
});

module.exports = router;