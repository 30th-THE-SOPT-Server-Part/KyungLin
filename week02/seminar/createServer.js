const http = require('http');

http.createServer((req,res) => {
    // 여기다 이제 서버에서 보내줄거
    res.write('<h1>hello sever part </h1>');
    res.end('<p>server love</p>');
}).listen(8080, () => {
    console.log('8080번에서 서버 대기 중');
});


/*
api란
서버 어플리케이션의 기능을 사용하기 위한 방법
구현 방식을 몰라도 서비스가 서로 통신 가능
ex) 카카오에서 api를 제공해줘서 카카오 로그인 사용 가능
rest api는 자원 중시
URI는 정보의 자원을 표현

verb 행위
자원에 대한 행위는 http method로 표현 (get,post,put,patch,delete)


URI ? URL ?
URI안에 URL이 존재

url은 위치를 가리킴
https://www.youtube.com/results?search_query=sopt
는 url이 아님. 위치를 가리키는 것이 아닌 검색 결과?


uri규칙
- 소문자가 적합
- 가독성을 위해 '-'하이픈 사용


*/


