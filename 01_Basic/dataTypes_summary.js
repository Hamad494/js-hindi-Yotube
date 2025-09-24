// # Primitives 

// 7 dataTypes: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const Score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 4323456678765432345678766554n
console.log(typeof(bigNumber));


// #Refrence type (Non-Primitives)

// Array, Objects, Functions

const heroes = ["Hammad", "Nadeem", "Amjad"];
let myObj = {
      name: hammad,
      age: 22,

}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof(anothertype))