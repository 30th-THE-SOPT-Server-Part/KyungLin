interface Member {
    name: string;
    group: string;
}

interface Dinner {
    member: Member[];
    shuffle(array:Member[]): Member[];
    organize(array:Member[]): void;
    
}

export {Member,Dinner}

/*
export default [interfaceName] {} 을 하는 경우도 있는데*
이는 보통 파일 내에서 한개만 export할 때 쓰인다.
따라서 import할 때 어떤 이름으로든지 받아올 수 있음
/