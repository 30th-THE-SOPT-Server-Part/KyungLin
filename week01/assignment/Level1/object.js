
/*
//object
//속성은 {key:value} 형태 함수일 수도 있음
//map 반환 undefined? 다시 알아보기  => return을 해야 반환이 되는 거지 밑의 경우에는 console.log만 있음

const sopt = {
    season : 30,
    group : ['YB','OB'],
    part : ['서버','기획','디자인','안드로이드','웹','ios'],
    president : '김규민',
    introduce: function () {
        this.part.map(name => {
            console.log(`솝트 내 파트는 ${name} 파트가 있어요!`)
        });
    }
}

console.log(sopt.group);
sopt.introduce();


//Array

let array = [1,2,3,4,true,'김경린'];

let array2 = [
    {
        name: '김소령',
        age:5
    },
    {
        name: '박정무',
        age: 15
    }
];

console.log(typeof array2);  //object => 객체 타입이다

*/

// ***JS에서 function은 일급 객체!***
//변수 or 데이터 구조에 담을 수 있음. 다른 함수에 파라미터로 전달할 수 있음. 반환값으로 사용할 수 있슴.

//함수 선언식

// function sum(a,b) {
//     return a+b;
// }

// //함수 표현식 *****

// let sum = (a,b) => {
//     return a+b;
// }

// function menu(dinner) {
//     return `오늘 메뉴는 ${dinner}입니다`;
// }

// const str2 = menu('삼겹살');

// const menu = (dinner) => {
//     return `오늘 메뉴는 ${dinner}입니다`;
// }

// const str2 = menu('곱창');
// console.log(str2);

/*
함수 표현식을 더 많이 씀.
실제 흐름이 해당 함수에 도달했을 때부터 사용되기 때문
선언식은 정의 이전에도 사용할 수 있음
*/

const func = (num) => {
    return num*num;
}

// const multiple = (func,num) => {
//     console.log(func(num));
// }

// const multiple = function(func,num){
//     console.log(func(num));
// }

// multiple(func,3);

// //연산자

// //1.증감연산자 ++,--
// let a = 2;
// let b = ++a;
// console.log(b)

// //2. 사칙연산 +,-,*,/ 
let a = 2 + 3;
let x = 5;
let b = 2 * 3;
let c = 3 - 2;
let d = 4 / 2;

// console.log(a,b,c,d);


// //3.동시연산자
// // ==은 값을 비교 ===은 값과 타입을 비교

// if(a === x) {
//     console.log('a===x');
// }

// let y = '5';
// if (a === y){
//     console.log('a === y');
// }
// if (a == y){
//     console.log('a == y');
// }


// // 값만 비교 !=
// // 타입도 비교 !==

// if (x !== z){
//     console.log('x !== z');
// }

// // 나머지 %

// if (a === 3 && b === 3){
//     console.log('true');
// }

// //typeof 는 string이기때문에 꼭 ''스트링으로 비교하기!!!
// if (typeof a == 'number'){
//     console.log('type')
// }


//typescript는 코드 작성 단계에서 타입을 체크해 오류 발견

