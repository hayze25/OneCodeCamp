square = (a) => {
  ans = a * a
  console.log(ans)
}

square(20);


Hello = (person) => {
    console.log(`Hello! ${person}`)
}

Hello(`Friendric`);

const person = {
    firstname : `Friendric`,
    lastname :  `Cortes`
}

person = {firstname, lastname};

console.log(firstname, lastname);

const arr1 = [1 , 2 , 3]
const arr2 = [4 , 5 , 6]

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);

 calculateRectangleArea = (length = 1, width = 1) => {
    return length * width;
}

console.log(calculateRectangleArea(20,30));

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Instantiate an object of the Person class
  const person1 = new Person('John', 30);
  
  // Call the introduce method
  person1.introduce(); 