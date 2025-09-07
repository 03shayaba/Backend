"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fruitsData() {
    let item = 1;
    if (item >= 1) {
        return ['apple', 'banana'];
    }
    else if (item >= 5) {
        return 10;
    }
    else {
        return "shayaba";
    }
}
console.log(fruitsData());
function studentData(name) {
    if (typeof name == 'string') {
        return "student name is " + name;
    }
    if (typeof name == 'number') {
        return "student name is " + name;
    }
    else {
        "student name is " + name;
    }
}
console.log(studentData(10));
//# sourceMappingURL=union.js.map