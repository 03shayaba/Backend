type personA={name:string};
type personB ={age:number};
type personC =personA & personB  

var username1:personA ={name:"shivani"};
var username2 :personB = {age:30};

var username3 = {name:'vani' ,age:30};   //object
console.log(typeof username3);