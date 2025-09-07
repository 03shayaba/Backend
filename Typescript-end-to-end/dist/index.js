"use strict";
// interface User{
//     name:string;
//     age:string;
//     email:string;
//     password:string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// Map where value can be User or Product
const myMap = new Map();
myMap.set('u1', { id: 'u1', name: 'John' });
myMap.set('p1', { id: 'p1', title: 'Laptop', price: 1200 });
// Access
console.log(myMap.get('u1')); // { id: 'u1', name: 'John' }
console.log(myMap.get('p1')); // { id: 'p1', title: 'Laptop', price: 1200 }
//# sourceMappingURL=index.js.map