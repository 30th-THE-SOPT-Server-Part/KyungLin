import { Router } from "express";
import MovieController from "../controllers/MovieController";
import { body } from "express-validator/check";

const router: Router = Router();

router.post('/', [
    body('title').notEmpty(),
    body('director').notEmpty(),
    body('story').notEmpty()

], MovieController.createMovie);
router.put('/:movieId', MovieController.updateMovie);
router.get('/:movieId', MovieController.getMovie);
router.delete('/:movieId', MovieController.deleteMovie);

export default router;