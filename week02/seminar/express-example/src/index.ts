import express,{ Request,Response,NextFunction} from 'express';

const app = express();  //express 객체 받아옴

app.use(express.json()); // express 에서 request body를 json으로 받아오겠슴

app.use('/api',require('./api')); // use -> 메소드와 관계없는 모든 요청
// localhost:8000/api -> api 폴더 
// localhost: 8000/api/user -> api폴더로 가서 그 안에 라우팅을 통해 user 폴더로 이동해서 user.ts

app.get('/',(req:Request, res:Response, next:NextFunction) => {
    res.send('HI my name is kyunglin');
}); // get => http method



app.listen('8000', () => {
    console.log(`
        #############################################
            🛡️ Server listening on port: 8000 🛡️
        #############################################
    `);

}); // 8000번 포트에서 서버 실행

