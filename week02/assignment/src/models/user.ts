import { builtinModules } from "module";

interface User {
    id: number,
    name: string
}

class userStorage {

    static users: User[] = [
        {id: 1, name: 'user1'},
        {id: 2, name: 'user2'},
        {id: 3, name: 'user3'}
    ];

    static getUser(userId: number): User | undefined {
        const user: User | undefined = this.users.find(data => data.id == userId);  // userId의 type이 number로 형변환이 안됨 === 사용 못함
        
        return user;
    }

    static hasUserId(userId: number) {
        if (this.getUser(userId) === undefined) {
            return 0;
        } else {
            return 1;
        }
    }

    static addUser(user: User) {
        this.users.push(user);
    }

}

export {userStorage,User};

//export와 module.exports의 차이
// array를 export할 때 그냥 변수명만 export하면 안됨 전체를 export해야됨