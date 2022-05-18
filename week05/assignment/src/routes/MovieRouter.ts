import { Router } from "express";
import MovieController from "../controllers/MovieController";
import { body } from "express-validator/check";
import auth from "../middleware/auth";


const router: Router = Router();

router.post('/', [
    body('title').notEmpty(),
    body('director').notEmpty(),
    body('story').notEmpty()

], MovieController.createMovie);
router.put('/:movieId', MovieController.updateMovie);
router.get('/:movieId', MovieController.getMovie);
router.delete('/:movieId', MovieController.deleteMovie);

router.post('/:movieId/comment',[
    body('writer').notEmpty(),
    body('comment').notEmpty()
], MovieController.createMovieComment);
router.put('/:movieId/comment/:commentId',[
    body('comment').notEmpty()
],auth, MovieController.updateMovieComment)

export default router;