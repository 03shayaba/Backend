"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x;
x = "Hello";
x = 23;
x = true;
console.log(typeof x);
function greet(name) {
    return `Hello Mr. ${name}`; //it returns the any data type even the function is uses to return the string
}
console.log(greet('Shahid'));
console.log(greet(true));
// function funcName(): never{
//    // it throws an exception or never returns
// }
function greet1() {
    console.log("Welcome to tutorials Point");
}
let msg = greet1();
console.log(msg);
//# sourceMappingURL=Any.js.map