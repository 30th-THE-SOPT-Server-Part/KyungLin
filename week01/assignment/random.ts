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

        let mem1: Member = array.pop() as Member;
        while (true) {
            if (mem1.group == 'ob'){
                break;   
                }
            else {
                mem1 = array.pop() as Member;
            }
        }
        

        let mem2: Member = array.pop() as Member;
        while (true) {
            if (mem2.group == 'yb'){
                break ;
                }
            else {
                mem2 = array.pop() as Member;
            }
        }

        const dinnerMember: string[] = [mem1.name,mem2.name];
        
        console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`);
    }
};

dinner.organize(dinner.member);