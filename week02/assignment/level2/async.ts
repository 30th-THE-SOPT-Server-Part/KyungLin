// 비동기처리 방식 3가지


// 1. callback 함수
// console.log('안녕하세요');

// setTimeout( ():void => {
//     console.log('Set Time out');
// }, 2000); //1000 -> 1초

// console.log('끝');

// 2. promise


// const condition: boolean = false;

// const promise = new Promise( (resolve, reject) => {
//     if (condition) {
//         resolve('성공이다');

//     } else {
//         reject(new Error('실패다'));
//     }
    
// });


// //resolve는 then으로 에러는 catch로 받는다.
// promise
//     .then((resolveData):void => {
//         console.log(resolveData)
//     })
//     .catch(error => console.log(error));


/*
typescript 함수 정의

간단한 타입 정의
type fn = (arg: argType) => ReturnType

type fiin = (arg:ArgType): ReturnType => {

};

 */

//promise chaining - 여러개의 프로미스를 연결하여 사용
    

// const restaurant = (callback: () => void,time: number) => {
//     setTimeout(callback,time);
// }



// const order = ():Promise<string> => {
//     return new Promise((resolve,reject) => {
//         restaurant(() => {
//             console.log('레스토랑 진행 상황- 음식 주문 ');
//             resolve('음식 주문 시작');
//         },1000);
//     });
// }

// //order의 반환 값은 promise안에 resoleve의 반환값인 string

// const cook = (progress:string): Promise<string> => {
//     return new Promise((resolve,reject) => {
//         restaurant(()=>{
//             console.log('레스토랑 진행상황- 음식 조리 중');
//             resolve(`${progress} => 음식 조리중`);
//         },2000);
//     });
// }

// const serving = (progress:string): Promise<string> => {
//     return new Promise((resolve,reject) => {
//         restaurant(() => {
//             console.log('레스토랑 진행상황-음식 서빙 중');
//             resolve(`${progress} => 음식 서빙 중`);
//         },2500)
//     });

// }

// const eat = (progress:string): Promise<string> => {
//     return new Promise((resolve,reject) => {
//         restaurant( () => {
//             console.log('레스토랑 진행사황 - 음식 먹는 중');
//             resolve(`${progress} => 먹는 중`);
//         },3000)
//     });
// }

// order()
//     .then (progress => cook(progress))
//     .then (progress => serving(progress))
//     .then (progress => eat(progress))
//     .then (progress => console.log(progress));
    
//cathc는 단일 catch로 잡을 수 있음


// Promise.resolve(123)  // 바로 resolve로 갈 수 있음. 
//     .then(res => {
//         throw new Error('에러발생');
//         return 456;
//     })
//     .then(res => {
//         console.log(res); //절대 실행되지 않는다. 위에서 error
//         return Promise.resolve(789);

//     })
//     .catch(error => {

//         //모든 에러가 catch에서 잡힘
//         console.log(error.message);
//     })


// 2. async await

// 1.함수 표현식
// const asyncFunction1 = async() => {
// }
// 2. 함수 선언식
// async function asyncFunction2(){} 

// let asyncFunc1 = (msg: string): Promise<string> => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`asyncfun1-${msg}`)
//         },1000)
//     });
// }

// let asyncFunc2 = (msg: string): Promise<string> => {
//     return new Promise( resolve => {
//         setTimeout(() => {
//             resolve(`asyncfun2-${msg}`);
//         },1500);
//     });
// };

// const asyncMain = async() => {
//     let func1 = await asyncFunc1('성공');
//     console.log(func1);
//     let func2 = await asyncFunc2('성공');
//     console.log(func2);
// }

// asyncMain();

// let promiseMain1 = (): void => {
//     asyncFunc1('server part').then((result:string) => {
//         console.log(result);
//         return asyncFunc2('김경린');
//     }).then((result:string) => {
//         console.log(result);
//     });
// }

// promiseMain1();

//async await*********
// const asyncMain = async () => {
//     let result = await asyncFunc1('sever part');
//     console.log(result);
//     result = await asyncFunc2('김경린');
//     console.log(result);
// }

// asyncMain();

