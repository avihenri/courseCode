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
