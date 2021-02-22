

// var : scope can be global if it is declared outside a function , or can be accessed only within the function if it is declared inside it; can be redeclared and updated
// let : declare a variable, block scoped, can be updated but not redeclared 
// const: declare a variable with a constant value, block scoped, can t be updated or redeclared

//spread operator : 
// -used to expand an iterable object or array into a list of arguments
// -used also for copyying an array, concatenating or combining arrays, adding an item to a list adding state in React 





function sum(a, b, c) {
    return a + b + c
}
// arrow function
const sum0 = (a, b, c = 3) => a + b + c;  // default c=2 if not passed 
console.log(sum0(1, 2))

var nr = [3, 4, 1];    // can't use const because I can t  reassign the array in the next example
//console.log(sum(...nr));

const a = 12;

//nr = [...nr, a]
console.log(nr)

function sum2(a, b, c, d) {
    return a + b + c + d
}

console.log(sum2(...nr, sum(...nr)))

const nr1 = [1, 2, 3] // i can update nr using push
nr1.push(10)
console.log(nr1);

// copy array
var arr = [...nr]
console.log(arr)
// concatenate
const languages = ["English", "French", "Romanian"]

arr = [...arr, ...languages]
console.log(arr)


// objects

var myself = {
    firstName: 'Andrei',
    lastName: 'Ciobanu',
    age: 22,
    jobs: ['intern at AquaSoft', 'student'],
    hobbies: ['coding', 'football', 'music', 'skiing']
}

var newObj = { ...myself }
console.log(newObj)

for (let property in myself) {
    console.log(`${property}: ${myself[property]}`)
}

let fullName = `${myself.firstName} ${myself.lastName}`
console.log(fullName)
console.log(myself.hobbies)

for (let i = 0; i < myself.hobbies.length; i++) {
    console.log(myself.hobbies[i].length)
}

const brands = ['Apple', 'Samsung', 'Lenovo']
for (let brand of brands) {
    console.log(brand)
}


myself.hobbies.forEach(hobby => console.log(hobby))

myself.hobbies[1] = 'handball' //replace football with handball
console.log(myself.hobbies)

var fruits = ['Banana', 'Apple', 'Kiwi', 'Lemon']
console.log(typeof fruits)
console.log(Array.isArray(fruits)); //return true if fruits object is an array, it is best to use is array instead of typeof which returned object

fruits.pop(); // removes the last element from the end of thr array
console.log(fruits)

fruits.shift(); //removes the first element from the beginning of the array
console.log(fruits)

fruits.push('Banana', 'Lemon') //add a new element or elements at the end of the array
console.log(fruits)

fruits.unshift('Strawberry', 'Blueberry') // add a new element or elements at the beginning of the array
console.log(fruits)

//splice can add or remove items from any position in an array
// parameters : start index, number of items to remove, items to add

fruits.splice(3, 0, 'Orange') // setting the second param 0 is equivalent to not deleting any of the items in the array
console.log(fruits)

fruits.splice(0, 2) //will delete the first 2 items of the array 
console.log(fruits)

fruits.splice(3, 2, 'Strawberry') // delete index 3 and index 4, but add strawberry instead
console.log(fruits)

console.log(fruits.reverse()) //first elememt becomes last element and vice versa

//console.log(fruits.fill('nothing')) //replaces all elements in the array with a static value
console.log(fruits.sort()) // sort the elements based on the alphabetical order


// callbacks ae used in asychronous functions, where one function has to wait for another function

//a promise can be : fulfilled, rejected, pending, settled


//     "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// A Promise is a JavaScript object that links producing code and consuming code

// fruits.splice(0,2)
var promise = new Promise(function (resolve, reject) {
    //Producing code
    if (fruits.length > 3) {
        resolve("Fruits array has more than 3 elements");
    }
    else {
        reject(Error("Fruits array has less than 3 elements"));
    }
});
//Consuming code -> must wait for a fulfilled promise
promise.then(function (result) {
    console.log(result);
}, function (err) {
    console.log(err);
});

// async makes a function return a promise
// await makes a function wait for a promise

//putting async in front of a function declaration will turn it into an async function so it will know how to expect the possibility of the await keyword being used 
// using async will make the return value of the function to be converted to promise


function hello() { return "Hello" };

hello();
//"Hello"
async function hello() { return "Hello" };

hello();
//Promise {<fulfilled>: "Hello"}
let hello0 = async function () { return "Hello" };

let hello1 = async function () { return "Hello" };

hello1();
//Promise {<fulfilled>: "Hello"}


let hello2 = async () => { return "Hello" }
hello2().then(console.log)


// await only works inside async functions 
// await can be put in front of any async promise-based function to pause code on that line until de promise fulfills an then retyrn the resulting value
// 
const fetch = require('node-fetch');

async function fetchFruit() {
    let fruitInfo = await fetch('http://api.tropicalfruitandveg.com/tfvjsonapi.php?tfvitem=Mango');
    const response = await fruitInfo.json();
    console.log(response);

}

fetchFruit()

//nested functions have acces to the scope above them
//all functions have access to the global scope
// closure makes possible for a function to have private variables
// the closure function has acces to the parent scope, even after the parent function has closed
// a self invoking function only runs once 


var add = (function () {
    let counter = 0;
    return function () {
        counter += 1;
        return counter;
    }
})();
add();
add();
console.log(`Counter is ${add()}`);











