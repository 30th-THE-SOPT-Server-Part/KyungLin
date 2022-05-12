import { Router } from "express";
import { UserController } from "../controllers";
const router: Router = Router();
import { body, validationResult } from "express-validator/check";


const userValidator = [
    body('name')
    .notEmpty().withMessage('이름 미기입')
    .isLength({min: 2, max: 8}).withMessage('이름(2-8글자 범위 확인)'),

    body('phone')
    .notEmpty().withMessage('휴대폰 번호 미기입'),
    body('email')
    .isEmail().withMessage('이메일 형식이 옳바르지 않습니다'),
    body('age')
    .isInt({min:0, max: 1000}),
    
    // (req, res) => {
    //     const errors = validationResult(req);
    //     if(!errors)
    // }
    
]
router.post('/', userValidator, UserController.createUser);
router.put('/:userId', UserController.updateUser);
router.get('/:userId', UserController.findUserById);
router.delete('/:userId', UserController.deleteUserById);

export default router;