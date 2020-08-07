// ADVANCED FUNCTIONS
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

// ADVANCED ARRAYS

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

// ADVANCED OBJECTS

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
