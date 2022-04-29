import express, {Router} from 'express';

const router: Router = express.Router();

router.use('/user', require('./user'));
router.use('/like', require('./like'));
router.use('/blog', require('./blog'));
router.use('/signup', require('./signup'));

module.exports = router;
