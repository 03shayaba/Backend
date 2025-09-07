let x: any;
x = "Hello";
x = 23;
x = true;

console.log(typeof x); 



function greet(name: any): string{
   return `Hello Mr. ${name}`;     //it returns the any data type even the function is uses to return the string
}
console.log(greet('Shahid'));
console.log(greet(true));



// function funcName(): never{
//    // it throws an exception or never returns
// }



function greet1(): void{
  console.log("Welcome to tutorials Point");
}
let msg: void = greet1();
console.log(msg);
