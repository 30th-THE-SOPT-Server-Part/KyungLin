import { Router } from "express";
import { UserController } from "../controllers";
import { body } from "express-validator/check";
const router: Router = Router();

// routes => use (/user) => post (/)
router.post('/', [
    body('email').isEmail(),
    body('password').isLength({ min : 6 }),
    body('name').notEmpty(),
    body('phone').notEmpty()
], UserController.createUser);
router.put('/:userId', UserController.updateUser);
router.get('/:userId', UserController.findUserById);
router.delete('/:userId', UserController.deleteUserById);

router.post('/signin',[
    body('email')
        .notEmpty()    
        .isEmail(),
    body('password')
        .notEmpty()
        .isLength({min:6})
], UserController.signInUser)

export default router;