"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//public
class Person {
    constructor() {
        this.name = "";
    }
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}
const person = new Person();
person.name = "John";
person.greet();
// private
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    calculateInterest() {
        const interestRate = 0.05;
        return this.balance * interestRate;
    }
}
// Creating an instance of the BankAccount class
const account = new BankAccount(1000);
// Attempting to access private members
// console.log(account.balance); 
// console.log(account.calculateInterest());
//protected
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("The animal makes a sound");
    }
}
class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks!`);
    }
}
// Creating an instance of the Dog class
const dog = new Dog("Buddy");
dog.bark();
//# sourceMappingURL=Access-modifier.js.map