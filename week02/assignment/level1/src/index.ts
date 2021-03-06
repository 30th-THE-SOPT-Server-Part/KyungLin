import express, {Request, Response, NextFunction} from 'express';

const app = express();

app.use(express.json());

app.use('/api', require('./api'));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('***LEVEL2 발전 과제 페이지***');
});

app.listen('8000', () => {
    console.log(
        '서버 가동'
    );
});
