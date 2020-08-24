/* 
* *** ADVANCED JAVASCRIPT ***
   ~ = COMPLETE
* SCOPE
* CONTROL FLOW
* ES5 & ES6
* FUNCTIONS ~
* ARRAYS ~
* OBJECTS ~
* - PASS BY VALUE VS PASS BY REFERENCE
* - TYPE COERCION
* ES7 (ES2016)
* ES8 (ES2017)
* ES9 (ES2018) - ES8 ASYNC AWAIT
* ES10 (ES2019)
* LOOPS
* DEBUGGING
* HOW JS WORKS
*/

/****************************/
/* *** ADVANCED FUNCTIONS *** */
/****************************/
const first = () => {
  const greet = "Hi";
  const second = () => {
    const name = "Avril"; // parent does not have access to this
    alert(greet); // has access to parent function value
  };
  return second;
};

const newFunc = first(); // gets the result of first()
newFunc();

// Closures - function ran, and executed. Won't run again
// BUT - it will remember there are references to the variables

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b; // each arrow is a function
curriedMultiply(3); // returns the second function (b) => a * b - a being 3
curriedMultiply(3)(4); // = 12
const multiplyBy5 = curriedMultiply(5); // can be used to * 5

// Compose
const compose = (f, g) => (a) => f(g(a)); // sum(sum(5)) go from center - 5 +1 +1

const sum = (num) => num + 1;

compose(sum, sum)(5); // 7

//  Avoiding side effects & functional purity

// SIDE EFFECT
var a = 1;
function b() {
  a = 2;
}
console.log("this is a side effect");

// FUNCTIONAL PURITY = Deterministic - should always do the same thing
// input -> into a function -> complete function -> return a value

/****************************/
/* *** ADVANCED ARRAYS *** */
/****************************/

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
  // should use map for this
  double.push(num * 2);
});

// MAP

const mapArray = array.map((num) => {
  return num * 2; // always has to return something & creates a new array
});

// Shorthand
const newArr = array.map((num) => num * 2);

// FILTER
const filterArray = array.filter((num) => {
  return num > 5; // only add items that are greater than 5
});

// REDUCE
// can filter & map
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 5); // 34 - all array calculated together plus 5

/****************************/
/* *** ADVANCED OBJECTS *** */
/****************************/

// REFERENCING TYPE
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
object1 = object2; // true
object1 = object3; // false;

object1.value = 15;
object1.value; // 15
object2.value; // 15

// object 1 & 2 are in their own box & object2 is referencing everything in object1's box
// object 3 is in its own box so results in false if compared with object 1 or 2

// CONTEXT VS SCOPE
// context is where we are and you can use this keyword

console.log(this); // would be the window object
this.alert("blah"); // this is like window.alert

function a() {
  console.log(this); // still the window object - window.a
}

const object4 = {
  a: function () {
    console.log(this); // is the a function in object4 - object4.a
  },
};

// INSTANTIATION
// make a copy of an object & reuse the code
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`WEEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");

/* *** PASS BY REF VS PASS BY VALUE *** */

// pass by value
let a = 5;
let b = 10;
let c = a; // copied value and put in new memory space

c++;
console.log(a); // 5
console.log(c); // 6

// pass by reference = objects
let obj1 = { name: "Yao", password: "123" };
let obj2 = obj1;

obj2.password = "easy";

console.log(obj1); // { name: 'Yao', password: 'easy' };
console.log(obj2); // { name: 'Yao', password: 'easy' };
// stored in memory and passed in reference so not copied like pass by value
// both pointing to the same info
// saves space in memory
// arrays are the same as objects so passed by reference
var c = [1, 2, 3, 4, 5];
var d = c;
d.push(5646546);
console.log(c); // [1, 2, 3, 4, 5, 5646546]
console.log(d); // [1, 2, 3, 4, 5, 5646546]

var e = [].concat(c); // new pice of memory
console.log(e); // [1, 2, 3, 4, 5]

let obj = { a: "a", b: "b", c: "c" };
let clone = Object.assign({}, obj);
obj.c = 5;
console.log(clone); // { a: 'a', b: 'b', c: 'c' }
console.log(obj); // { a: 'a', b: 'b', c: 5 }
let clone2 = { ...obj };
console.log(clone2); // { a: 'a', b: 'b', c: 'c' }
// only clones the first level = shallow clone
// if we changed obj to be like the below (imagine obj2 s obj)
let obj2 = { a: "a", b: "b", c: { deep: "clone me" } };
obj2.c.deep = "you will change them all!";
console.log(clone); // { a: 'a', b: 'b', c: { deep: 'clone me' }  }
console.log(obj2); // { a: 'a', b: 'b', c: { deep: 'clone me' }  }
console.log(clone2); // { a: 'a', b: 'b', c: { deep: 'clone me' }  }
// the second level is another address in memory so you only clone the first layer
// deep cloning -
let superClone = JSON.parse(JSON.stringify(obj2)); // changes obj2 to a string then parses it back into an object
console.log(superClone); // { a: "a", b: "b", c: { deep: "clone me" } }
// WARNING: be careful - performance complications with big objects

// TYPE COERCION

// It converts a type to another type with ==

1 == "1"; // true - will change the '1' to 1
1 === "1"; // false

if (1) {
  // 1 = true
  console.log(5);
}

// https://dorey.github.io/JavaScript-Equality-Table/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

/****************************/
/* **** ES7 (ES2016) **** */
/****************************/

"Hellooo".includes("o"); // true

const pets = ["cat", "dog", "bat"];
pets.includes("dog"); // true

const square = (x) => x ** 2; // power of 2
square(5); // 25

const cube = (y) => y ** 5; // power of 5
cube(4); // 64

/****************************/
/* **** ES8 (ES2017) **** */
/****************************/

// string padding
// .padStart() & .padEnd()
"Turtle".padStart(10); // will have 10 spaces at the beginning

const fun = (a, b, c, d) => {
  console.log(a);
};
fun(1, 2, 3, 4); // no error for the end comma

Object.values;
Object.entries;
Object.keys;

let obj = {
  username0: "Santa",
  username1: "Rudolf",
  username2: "Mr.Grinch",
};
Object.keys(obj).forEach((key, index) => {
  console.log(key, onj[key]);
}); // iterate like its an array

Object.values(obj).forEach((value) => {
  console.log(value);
}); // loops through al the values

Object.entries(obj).forEach((value) => {
  console.log(value);
}); // gives key & value

Object.entries(obj).map((value) => {
  return value[1] + value[0].replace("username", "");
}); // ["Santa0", "Rudolf1", "MR.Grinch2"]

/****************************/
/* **** ES10 (ES2019) **** */
/****************************/
// .flat() - flattens arrays and cleans up arrays
const arr = [1, [2, 3], [4, 5]];
arr.flat(); // [1,2,3,4,5]
const arr2 = [1, 2, [3, 4, [5]]];
arr.flat(); // [1,2,3,4,[5]]
const arr3 = [1, 2, [3, 4, [5]]];
arr.flat(2); // [1,2,3,4,5]

const entries = ["bob", "sally", , , , , , "cindy"];
entries.flat(); // ['bob', 'sally, 'cindy']

// flatMap()
// flattens arrays to 1 level and can create a new array

let userEmail = "                 blah@blah.com";
let userEmail2 = "blahde@blahda.com              ";
userEmail.trimStart();
userEmail2.trimEnd();

let userProfiles = [
  ["commanderTom", 23],
  ["derekZlander", 40],
  ["hansels", 30],
];
Object.fromEntries(userProfiles); // turns the above into an object
// object.entries - turns objects into arrays

try {
} catch (err) {
  // ES10 not forced to add the error to catch
}

/****************************/
/* ****ADVANCED LOOPS **** */
/****************************/

const basket = ["apples", "bananas", "grapes"];
const detailedBasket = {
  apples: 5,
  bananas: 5,
  grapes: 100,
};
// for
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

// forEach
basket.forEach((item) => {
  console.log(item);
});

// for of
// Iterating - arrays, strings
for (item of basket) {
  console.log(item);
}

// for in - objects
// returns the object properties apples, bananas, grapes
// we are enumerating over object properties
// objects are not iterable
for (item in detailedBasket) {
  console.log(item);
}

/****************************/
/* ****  DEBUGGING  **** */
/****************************/

// HOW TO DEBUG THE BELOW -
// const flatbread = [[0, 1], [2, 3], [4, 5]].reduce((a, b) => a.concat(b), []);

const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accum, arr) => {
  // console.log(arr);
  // console.log(accum);
  debugger;
  return accum.concat(arr);
}, []);

/****************************/
/* **** How does JS work *** */
/****************************/

// WHAT IS A PROGRAM
// - allocates memory
// - parse & execute scripts (read & run commands)

// JAVASCRIPT ENGINE
// - memory heap
const a = 1; // allocated to memory
// - call stack

// single threaded - one call at a time = synchronous programming, no deadlocks
// other languages are multi-thread
// we can use asynchronous with JS
console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
console.log(3);
// result = 1, 3, 2

// JS RUN-TIME ENVIRONMENT
// web api's, DOM, AJAX, EVENT LOOP (Timeout)

// recursion - function that calls itself
function foo() {
  foo();
}
foo();

/****************************/
/* ****    MODULES    **** */
/****************************/
// Bundles all your JS files into one by importing and exporting

/**************************************/
/* Optional Exercise: Javascript Logic*/
/**************************************/

// What is the Challenge? https://github.com/zero-to-mastery/Coding_Challenge-6
// Solve the below 3 javascript puzzles. The goal of this challenge is to practice our logic skills.
// Something that is useful not only in interviews when you get challenging problems, but also in your
// day to day work as a developer.First, start off by reading this article:
//https://medium.freecodecamp.org/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2

// Question 1:
// Clean the room function: given an input of[1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20],
// make a function that organizes these into individual array that is ordered.For example answer(ArrayFromAbove)
// should return: [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591].Bonus: Make it so it organizes
// strings differently from number types.i.e. [1, "2", "3", 2] should return [[1, 2], ["2", "3"]]

let numArr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
numArr.sort(function (a, b) {
  return a - b;
});
const sortNumArray = (arr) => {
  let counter = 0;
  numArr.forEach((num) => {});
};
sortNumArray(numArr);
console.log(numArr);

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function
// should find two different numbers in the array that, when added together, give the target number.
// For example: answer([1, 2, 3], 4)should return [1, 3]

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that
// if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
