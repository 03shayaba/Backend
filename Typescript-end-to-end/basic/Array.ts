// let arr : number[];
// arr = [1,2,3,4,5];
// console.log(arr[4]);
// console.log(arr[3]);
// console.log(arr.length)

var userData: {
  name: string;
  age: number;
  company: string;
  address:{
     houseNo:string,
    sector:string,
    city:string
  }
} = {
  name: "shayaba",
  age: 22,
  company: "microsoft",
  address:{
    houseNo:"house no-23",
    sector:'78-a',
    city:'gurgaon'
  }
};
userData.age = 21;

console.log(userData); //{ name: 'shayaba', age: 22, company: 'microsoft' }
