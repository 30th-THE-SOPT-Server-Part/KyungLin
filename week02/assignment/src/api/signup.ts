import express, {Request, Response, Router} from 'express';
import { User,userStorage } from '../models/user';

const router: Router = express.Router();

router.post('/', (req: Request,res: Response) => {

    const { id, name } = req.body;

    if (id && name) {
        // 아이디 중복 검사
        if (userStorage.hasUserId(id)) {
            return res.status(409).json({
                status: 409,
                message: '존재하는 아이디입니다'
            });
        } else {
            const newUser: User = {id: id, name: name};
            userStorage.addUser(newUser);
            return res.status(200).json({
                status: 200,
                message: '회원가입 완료'
            });
        }
    } else {
        // 아이디, 이름 기입하지 않았을 때
        return res.status(404).json({
            status: 404,
            message: 'id,name 미기입'
        }); 
    }
});

module.exports = router;