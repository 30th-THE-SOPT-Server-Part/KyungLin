import express, { Request, Response, Router} from 'express';
import { User, userStorage } from '../models/user';
import { rm,sc } from '../constants/index';


const router: Router = express.Router();

router.get('/', (req: Request,res: Response) => {
    return res.status(sc.OK).json({
        status: sc.OK,
        message: rm.READ_USER_SUCCESS,
        data: userStorage.users 
    }) 
});

router.get('/:userId', (req: Request,res: Response) => {

    const userId: string = req.params.userId;  
    const user: User | undefined = userStorage.getUser(userId);   

    if (user) {
        return res.status(sc.OK).json({
            status: sc.OK,
            message: rm.READ_USER_SUCCESS,
            data: {id: user.id, name: user.name}
            }) 
    } else {
        return res.status(sc.NOTFOUND).json({
            status: sc.NOTFOUND,
            message: rm.NO_USER
            })
    }
});


module.exports = router;
