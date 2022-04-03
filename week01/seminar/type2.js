// typeof -> 타입을 호출

// const name = '김경린';
// console.log(typeof name);

// let age = 18;
// console.log(typeof age);

// //안녕하세요 제 이름은 김경린입니다. 제 나이는 18살입니다.

// //백틱미사용
// console.log('안녕하세요 제 이름은 '+name+'입니다. 제 나이는 '+age+'살 입니다.');

// //백틱사용
// console.log(`안녕하세요 제 이름은 ${name}입니다. 제 나이는 ${age}살 입니다.`);

//null undefined의 타입

// console.log(typeof null) //object  null인데 왜 object로 뜨지...? => 자바스크립트의 버그래요~
// console.log(typeof undefined) //undefined 초기화되지 않은 값


//array는 모든 타입을 담을 수 있다. 
//array.map은 배열 내 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열 반환

// let num = [1,2,3,4];
// // const newNumArr = num.map(x => {
// //     return x * 2;
// // })

// const newNumArr = num.map(x => x * 2);
// console.log(newNumArr)

// //map은 새로운 배열 반환
// newNumArr.map(x => {
//     console.log(x);
// })
// //for of는 순회
// for (const x of newNumArr) {
//     console.log(x);
// }

