// typeof -> 타입을 호출

// const name = '장서현';
// console.log(typeof name);  //string

// let age = 18;
// console.log(typeof age);


// 백틱
// //백틱미사용
// console.log('안녕하세요 제 이름은 '+name+'입니다. 제 나이는 '+age+'살 입니다.');

// //백틱사용
// console.log(`안녕하세요 제 이름은 ${name}입니다. 제 나이는 ${age}살 입니다.`);



//null undefined의 타입

// console.log(typeof null) //object  null인데 왜 object로 뜨지...? => 자바스크립트의 버그래요~
// console.log(typeof undefined) //undefined 초기화되지 않은 값


//array는 모든 타입을 담을 수 있다. 
// let arr = ["안녕",1,true];

//array.map은 배열 내 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열 반환

let num = [1,2,3,4];
const newNumArr = num.map(x => {
    return x * 2;
})

// const newNumArr = num.map(x => x * 2);
// console.log(newNumArr)

// //map은 새로운 배열 반환

// newNumArr.map( x => {
//     console.log(x);
// })

// for문
// for of 반복할 수 있는 객체를 순회 (symbol.iterator 속성을 가지는 것)

for (const x of newNumArr) {
    console.log(x);
}

for (let i = 0; i< newNumArr.length;i++){
    console.log(newNumArr[i]);
}

// for in은 객체의 속성들을 반복하여 작업수행. 객체의 key값에는 접근가능 val는 불가
for (const i in newNumArr) {
    console.log(newNumArr[i]);
}

// foreach는 array객체에서만 사용가능 (ES6부터는 map,set에서도 가능)
newNumArr.forEach((x) => {
    console.log(x);
})