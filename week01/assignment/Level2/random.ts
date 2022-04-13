import { Member,Dinner } from "./interface";

const dinner:Dinner = {
    member: [
        {
            name: '채정아',
            group: 'ob'
        },
        {
            name: '김동재',
            group: 'yb'
        },
        {
            name: '강민재',
            group: 'yb'
        },
        {
            name: '김루희',
            group: 'ob'
        },
        {
            name: '박진수',
            group: 'ob'
        }
    ],

    shuffle(array:Member[]):Member[] {
        array.sort(() => Math.random() - 0.5);
        return array;
    },
    organize(array:Member[]):void {
        this.shuffle(array);

        const ob = array.find(mem => mem.group == 'ob') as Member;  //as Member를 안해주면 undefined로 인식됨
        const yb = array.find(mem => mem.group == 'yb') as Member;

        const dinnerMember: string[] = [ob.name,yb.name];
        console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`);
    }

};

dinner.organize(dinner.member);

/*
array.pop,find() 모두 return 값이 undefined였음
이를 해결하기 위해
1. as Member로 타입 단언하기
2. 밑에서 호출할 때 ob?.name처럼 '?'를 추가하여 프로퍼티를 추가하도록 
 // const dinnerMember: string[] = [ob?.name,yb?.name];
(이때 '?'는 앞에서 배운 *선택적 프로퍼티*로 쓰이는 것이 아닌 *옵셔널 체이닝*이라는 개념!)

*/