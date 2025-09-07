"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    firstName: "Tom",
    lastName: "Hanks",
    sayHello: function () { } //Type template 
};
person.sayHello = function () {
    console.log("hello " + person.firstName);
};
person.sayHello();
//# sourceMappingURL=object.js.map