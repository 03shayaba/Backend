// interface User{
//     name:string;
//     age:string;
//     email:string;
//     password:string;
// }

// type Updateprops = Pick<User ,'name' |'age' |'email'>




// function updateUser(Updateprops:Updateprops){
//     // hit the database to update the user
// }
// function sumofAge(user1:User, user2:User){
//     return user1.age+user2.age;
// }

// const age = sumofAge({
//     name: "Taro", age: "20", email: "abc@email.com",
//     password: ""
// },{name:"jijo",age:"30", email:"abc@email.com", password: ""});
// console.log(age);



// record in type scripts

// interface User {
//   id: string;
//   name: string;
// }

// type Users = Record<string, User>;

// const users: Users = {
//   'abc123': { id: 'abc123', name: 'John Doe' },
//   'xyz789': { id: 'xyz789', name: 'Jane Doe' },
// };

// console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }



// map

// interface User {
//   id: string;
//   name: string;
// }

// interface Product {
//   id: string;
//   title: string;
//   price: number;
// }

// // Map where value can be User or Product
// const myMap = new Map<string, User | Product>();

// myMap.set('u1', { id: 'u1', name: 'John' });
// myMap.set('p1', { id: 'p1', title: 'Laptop', price: 1200 });

// // Access
// console.log(myMap.get('u1')); // { id: 'u1', name: 'John' }
// console.log(myMap.get('p1')); // { id: 'p1', title: 'Laptop', price: 1200 }



type Event1 = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK