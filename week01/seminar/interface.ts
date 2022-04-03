
// Interface 
// 여러가지 프로퍼티를 갖는 새로운 타입 정의
// 앞글자는 대문자로!


interface ServerPart {
    name: string;
    age: number;
    group: string;
    mbti: string[];
}

const serverPart: ServerPart = {
    name: '김경린',
    age: 1,
    group: 'YB',
    mbti: ['isfj']   //모든 프로퍼티를 안넣으면 오류남  뒤에 선택적 프로퍼티 참고

}

const serverMembers: ServerPart[] = [

]; //배열로 들어갈 수 있다. 

console.log(serverPart);


//선택적 프로퍼티
// '?'를 붙여서 표시

interface Closet {
    name: string;
    shirt: number;
    pants: number;
    sunglass?: number;  // sunglass는 선택적 프로퍼티
    hat?: number;
}

const closet: Closet = {
    name: '김경린',
    shirt: 2,
    pants: 3,
    sunglass: 1,
    //hat은 없어도 됨
}