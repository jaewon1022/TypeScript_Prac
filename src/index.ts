interface Human {
    name:string;
    age:number;
    gender:string;
}

const person = {
    name: "JW__", 
    age: 21, 
    gender: "Male"
};

const sayAll = (person:Human) => {
    return `hello ${person.name}, ur age is ${person.age}. and ur gender is ${person.gender}!!!`;
}

console.log(sayAll(person));

export {}