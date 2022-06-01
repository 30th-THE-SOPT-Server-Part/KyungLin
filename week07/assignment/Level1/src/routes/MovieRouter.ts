import { Router } from "express";
import { body } from "express-validator/check";
import movieController from "../controllers/movieController";

const router: Router = Router();


router.post('/', [
    body('title').notEmpty(),
    body('director').notEmpty()
],movieController.createMovie);

router.get('/:movieId', [
    body('writer').notEmpty(),
    body('comment').notEmpty()
, movieController.createMovieComment])

router.get('/', movieController.getMovieBySearch);

export default router;