//var 재선언 재할당 가능
// let 재선언 불가능 재할당 가능


//재선언
// var name = "김경린";
// var name = "채정아"; //가능

// let name2 = "김철수";
// let name2 = "김영희"; //불가능

// //재할당
// let name3 = '이동현';
// name3 = '주효식';

// const name4 = '김루희';
// name4 = '박진형';

// var : Function Scope  //블록과 관계없이 접근 가능
// let,const : Block Scope

// if (true) {
//     var x = 'var variable';

// }
// console.log(x);

// if(true) {
//     const y = 'const variable';
// }
// console.log(y)  //접근 불가



//Scope


// function foo () {
//     if(true) {
//         var name = '채정아';
//         consoele.log('if-block-',name)
//     }
//     console.log('function-block-',name)
// }
// console.log('global',name);

// //함수 내에서 var는 접근 가능하지만 함수 밖으로 넘어가면 x

// 재선언,재할당, 호이스팅 문제로 let,const를 주로 씀

