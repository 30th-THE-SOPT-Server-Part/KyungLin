// 과제 조건
// 1. Member, Dinner interface 만들고 타입 지정하기
// 2. organize 내부 로직 채우기



interface Member {
    name: string;
    group: string;
}

interface Dinner {
    member: Member[];
    shuffle(array:Member[]): Member[];
    organize(array:Member[]): void;
    
}

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

        const dinnerMember: string[] = [];

        for(const mem of array){
            if(mem.group == 'ob'){
                dinnerMember[0] = mem.name;
            }
            else{
                dinnerMember[1] = mem.name;   // index [0] 이 없어도 [1] 먼저 접근 가능함  비어있을 땐 <1 empty item> 
            }

            if(dinnerMember[0] != undefined && dinnerMember[1] != undefined) {
                break;
            }
        }
        
        console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`);
    }
};

dinner.organize(dinner.member);