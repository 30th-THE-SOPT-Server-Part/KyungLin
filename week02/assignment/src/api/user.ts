import express, { Request, Response, Router} from 'express';
import { User, userStorage } from '../models/user';



const router: Router = express.Router();

router.get('/', (req: Request,res: Response) => {
    return res.status(200).json({
        status: 200,
        message: 'user 조회 가능',
        data: userStorage.users 
    }) 
});

router.get('/:userId', (req: Request,res: Response) => {

    const userId: number = req.params.userId as unknown as number;
    const user: User | undefined = userStorage.getUser(userId)   

    if (user) {
        return res.status(200).json({
            status: 200,
            message: 'user 조회 가능',
            data: {id: user.id, name: user.name}
            }) 
    } else {
        return res.status(404).json({
            status: 404,
            message: '해당 user가 존재하지않습니다'
            })
    }
});


module.exports = router;
