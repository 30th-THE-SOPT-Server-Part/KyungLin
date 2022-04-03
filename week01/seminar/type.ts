// // let variable :T = 초기값;

// let isDone: string = '김경린';

// console.log(isDone);
// let grade: number = 4;

// //함수
// const sum = (x: number,y:number): number => {
//     return x * y;
// }

// //배열
// // const variable: T[] = 초기값
// // let variable: Array<T> = 초기값

// const ages: number[] = [1,2,3,4,5];
// // const ages: Array<number> = [1,2,3,4];

// // const strArray: string[] = ["hi","hell"];

// const strArray: Array<string> = ["hi","hello"];



// // object vs Object
// //대문자 Object는 자바스크립트의 모든 타입이 할당 될수 있음
// //소문자는 원시타입을 제외한 나머지 가능
// const f1 = (obj:object):void => {
//     console.log(obj);
// }

// const f2 = (obj:Object):void => {
//     console.log(obj);
// }

// f1([1,2,3,4]);
// // f1('hih'); 원시타입인 stirng이 들어갈 수 없다

// f2([1,2,3,4]);
// f2('hih');




// //함수 타입 표현
// //:반환타입 지정

// const div = (x:number,y:number):number => {
//     return x / y
// }


// null과 undefined

let p: null = null;
let u: undefined = undefined;

//해당 타입은 자신 이외의 값 할당 안됨
// let x: null = 2;



//타입 단언

// 1. angle-bracket 타입 단언
let name3: any = '김경린';  //any 마법 (아무 타입이나 가능)l
let name3Length: number = (<string>name3).length;  //length를 쓰려면 string이라는 보장이 되어있어야함
console.log(name3Length)

// 2. as
let name4: any = '서버';
let name4Length: number = (name4 as string).length;

// (마법의) any

