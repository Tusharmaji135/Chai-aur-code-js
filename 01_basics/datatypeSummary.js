//  Primitive

//  7 types : String, Number, Booleen, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
console.table(myObj);

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// https://262.ecma-international.org/5.1/#sec-11.4.3


//********************************************Stack & Heap************************************************* */


//Stack(primitive)(copy)
//Heap(non-primitive)(reference,[original])


let u1={
    email:"djdj@gmail.cp",
    upi:"jidj@ypl"
}

let u2 =u1;
u2.email="tushar@gmail.com"

console.log(u1.email);
console.log(u2.email);
