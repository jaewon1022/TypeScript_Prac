"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//선택 매개변수 이후에 필수 매개변수를 두는 것은 허용되지 않는다.
//필수 매개변수가 선택 매개변수 뒤에 있을 시, 인자가 어떤 매개변수의 값인지 구분할 수 없기 때문이다. 
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const JW = new Human("JWon", 21, "Male");
const sayAll = (person) => {
    return `hello ${person.name}, ur age is ${person.age}. and ur gender is ${person.gender}!!!`;
};
console.log(sayAll(JW));
//# sourceMappingURL=index.js.map