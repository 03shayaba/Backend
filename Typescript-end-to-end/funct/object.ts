const data = {
  person: {
    info: {
      age: 25,
      skills: ["JS", "Python"]
    }
  }
};

console.log(data.person.info.skills[0]); // JS
console.log(data["person"]["info"]["skills"][0]); // JS



var person = {
   firstName:"Tom", 
   lastName:"Hanks", 
   sayHello:function() {  }  //Type template 
} 
person.sayHello = function() {    //here updating the sayHello
   console.log("hello "+person.firstName)
}  
person.sayHello()
