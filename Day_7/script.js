
//Exercise 1
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  // Example usage
  const person = new Person("Alice", 30);
  person.introduce();



//Exercise 2

class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  
    perimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  // Example usage
  const rectangle = new Rectangle(5, 10);
  console.log("Area:", rectangle.area()); // Outputs: Area: 50
  console.log("Perimeter:", rectangle.perimeter()); // Outputs: Perimeter: 30


  //Exercise 3

  class Shape {
    calculateArea() {
      // To be implemented by derived classes
      throw new Error("Method 'calculateArea()' must be implemented.");
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  // Example usage
  const circle = new Circle(5);
  console.log("Circle Area:", circle.calculateArea()); // Outputs: Circle Area: 78.53981633974483
  
  const rectangle2 = new Rectangle(5, 10);
  console.log("Rectangle Area:", rectangle.calculateArea()); // Outputs: Rectangle Area: 50

  //Exercise 4
  class BankAccount {
    constructor(accountNumber, balance = 0) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount <= 0) {
        console.log("Deposit amount must be greater than zero.");
        return;
      }
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        console.log("Withdrawal amount must be greater than zero.");
        return;
      }
      if (amount > this.balance) {
        console.log("Insufficient funds.");
        return;
      }
      this.balance -= amount;
      console.log(`Withdrawn ${amount}. New balance is ${this.balance}.`);
    }
  
    getAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}\nBalance: ${this.balance}`);
    }
  }
  
  // Example usage
  const account = new BankAccount("1234567890", 1000);
  account.deposit(500); // Deposited 500. New balance is 1500.
  account.withdraw(200); // Withdrawn 200. New balance is 1300.
  account.getAccountInfo();
  // Outputs:
  // Account Number: 1234567890
  // Balance: 1300

  //Exercise 5
  class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    makeSound(sound) {
      console.log(`${this.name} the ${this.species} makes the sound: ${sound}`);
    }
  }
  
  // Example usage
  const dog = new Animal("Buddy", "Dog");
  dog.makeSound("Woof"); // Outputs: Buddy the Dog makes the sound: Woof
  
  const cat = new Animal("Whiskers", "Cat");
  cat.makeSound("Meow"); // Outputs: Whiskers the Cat makes the sound: Meow

  //Exercise 6
  class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    makeSound(sound) {
      console.log(`${this.name} the ${this.species} makes the sound: ${sound}`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name, "Dog");
    }
  
    makeSound() {
      super.makeSound("Woof");
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name, "Cat");
    }
  
    makeSound() {
      super.makeSound("Meow");
    }
  }
  
  class Bird extends Animal {
    constructor(name) {
      super(name, "Bird");
    }
  
    makeSound() {
      super.makeSound("Chirp");
    }
  }
  
  // Example usage
  const dog2 = new Dog("Buddy");
  dog.makeSound(); // Outputs: Buddy the Dog makes the sound: Woof
  
  const cat2 = new Cat("Whiskers");
  cat.makeSound(); // Outputs: Whiskers the Cat makes the sound: Meow
  
  const bird = new Bird("Tweetie");
  bird.makeSound(); // Outputs: Tweetie the Bird makes the sound: Chirp


  //Exercise 7
  class Shape {
    constructor(color, name) {
      this.color = color;
      this.name = name;
    }
  }
  
  class Circle extends Shape {
    constructor(color, name, radius) {
      super(color, name);
      this.radius = radius;
    }
  
    get area() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Square extends Shape {
    constructor(color, name, sideLength) {
      super(color, name);
      this.sideLength = sideLength;
    }
  
    get area() {
      return this.sideLength ** 2;
    }
  }
  
  // Example usage
  const circle2 = new Circle("red", "Circle", 5);
  console.log(`${circle.name} color is ${circle.color} and its area is ${circle.area}`);
  
  const square2 = new Square("blue", "Square", 5);
  console.log(`${square.name} color is ${square.color} and its area is ${square.area}`);

  //Exercise 8
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Example usage
  const person2 = new Person("Alice", 30);
  person.greet(); // Outputs: Hello, my name is Alice and I am 30 years old.

  //Exercise 9

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  class Student extends Person {
    constructor(name, age, studentID) {
      super(name, age);
      this.studentID = studentID;
    }
  
    greet() {
      super.greet();
      console.log(`My student ID is ${this.studentID}.`);
    }
  }
  
  // Example usage
  const student = new Student("Alice", 20, "12345");
  student.greet();
  // Outputs:
  // Hello, my name is Alice and I am 20 years old.
  // My student ID is 12345.