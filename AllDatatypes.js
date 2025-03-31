// Primitive
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt 

// output given in numbers of both values.
const score = 100
const scoreValue = 100.3
// console.log(score);
// console.log(scoreValue);


const isLoggedIn = false // this is  boolean DT
const outsideTemp = null // this is object DT 
console.log(typeof isLoggedIn);
console.log( typeof outsideTemp);

let userEmail;
// this is Symbol DT.
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(anotherId);


console.log(typeof id === anotherId);

// Reference (Non Primitive)

// Array, Objects, Functions

// this is Array.
const students = ["dheeraj", "rajat", "sumit", "abhishek"]

//this is Object.
let myObj = {
    name: "ram",
    age: 25,
}

//this is a Function.
const myFunc = function(){
    console.log("Hello World");
}
console.log(typeof myFunc);
