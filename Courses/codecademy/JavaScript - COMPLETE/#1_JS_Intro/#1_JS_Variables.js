// INTRODUCTION TO JAVASCRIPT

// CONSOLE
// Dispalys errors and messages for developers
console.log();

// COMMENTS (LIKE THIS LINE)
console.log(5); // or like this

// The below is a multi-line comment
/*
This is all commented 
console.log(10);
*/

// DATA TYPES
    // 1. Numbers: 4, 8, 1526, 23.42
    // 2. String:  '....' or "....."
    // 3. Boolean: true or false
    // 4. Null: no value
    // 5. Undefined:  also no value but a different use as null
    // 6. Symbol: Unique identifier - will come back to this
    // 7. Object: collecctions of related data
//First 6 are Primitive data types (PDT), most basic data types
//Objects are more complex
console.log('JavaScript');
console.log(2011);
console.log('Woohoo! I love to code! #codecademy');
console.log(20.49);

// ARITHMETIC OPERATORS
    // 1. Add: +
    // 2. Subtract: -
    // 3. Multiply: *
    // 4. Divide: /
    // 5 Remainders: %
console.log(3.5 + 30); // 33.5
console.log(2019 - 1969); // 50
console.log(65/240); // 0.2708333333333
console.log(0.2708 * 100); // 27.08

// STRING CONCATENATION
console.log('Hello' + ' ' + 'World'); // Hello World or you could put console.log('Hello ' + 'World');

// PROPERTIES
    // .length: is a method that calcualtes the number of characters ina string and joins with the . (dot operator)
console.log('Teaching the world how to code'.length); // 30

// METHODS
    // We call methods by appending an instance with a dot 'example string'.methodName()
    // find more here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype 
console.log('Codecademy'.toUpperCase()); // CODECADEMY
console.log('    Remove whitespace   '.trim()); // Remove whitespace

// BUILT-IN OBJECTS
    // Math object has a method .random()
console.log(Math.random() * 50); // random number between 0 & 50
    //Math.floor() rounds down a decimal number
Math.floor(Math.random() * 50); // returns 46
// Math Doc - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8)); // = 44  Returns the smallest integer greater than or equal to a number.
console.log(Number.isInteger(2017)); // = true -  checks if a number is an integer.

// REVIEW

/*

Let's take one more glance at the concepts we just learned:

Data is printed, or logged, to the console, a panel that displays messages, with console.log().
You can write single-line comments with // and multi-line comments between /* and */.
/*
There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.
Numbers are any number without quotes: 23.8879
Strings are characters wrapped in single or double quotes: 'Sample String'
The built-in arithmetic operators include +, -, *, /, and %.
Objects, including instances of data types, can have properties, stored information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.
Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().
We can access properties and methods by using the ., dot operator.
Built-in objects, including Math, are collections of methods and properties that JavaScript provides.
*/