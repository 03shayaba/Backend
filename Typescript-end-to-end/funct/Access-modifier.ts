//public
class Person {
   public name: string = "";
   public greet(): void {
      console.log(`Hello, my name is ${this.name}!`);
   }
} 
const person = new Person(); 
person.name = "John"; 
person.greet();


// private

class BankAccount {
   private balance: number; 
   constructor(initialBalance: number) {
      this.balance = initialBalance;
   } 
   private calculateInterest(): number {
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
   protected name: string; 
   constructor(name: string) {
      this.name = name;
   } 
   protected makeSound(): void {
      console.log("The animal makes a sound");
   }
} 
class Dog extends Animal {
   public bark(): void {
      console.log(`${this.name} barks!`);
   }
} 
// Creating an instance of the Dog class
const dog = new Dog("Buddy"); 
dog.bark();