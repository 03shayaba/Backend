// var bignumber:bigint = 9007199254740991n;
// var x=1n;
// var y=2n;
// console.log(bignumber + x);
// console.log(bignumber + y);


var sym = Symbol();
var sym1 = Symbol();
console.log(sym == sym1);   //false
var sym2 = Symbol("abc");
var sym3 = Symbol("abc");

console.log(sym2 == sym3);      //false
console.log(sym)                //Symbol()
console.log(sym1);          //Symbol()
console.log(sym2);      //Symbol(abc)
console.log(sym3);      //Symbol(abc)


