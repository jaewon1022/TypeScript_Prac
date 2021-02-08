const name = "JW__", age = 21, gender = "Male";

const sayAll = (name:string, age:number, gender:string) => {
    return `hello ${name}, ur age is ${age}. and ur gender is ${gender}!!!`;
}

console.log(sayAll(name, age, gender));

export {}