// FUNCATIONS

// FUNCATION DECLARATIONS
    function greetWorld() {
        console.log('Hello, world!');
    }
    // function = funcation keyword
    // greetWorld() = Identifier
    // {console.log('Hello, world!');} = funcation body

    // Hoisting - not good practice. funcation called befor eit is defined
    console.log(greetWorld()); // Output: Hello, World!

    function greetWorld() {
    console.log('Hello, World!');
    }

// CALLING A FUNCATION
    // call the function identifier 
    greetWorld(); // Output: Hello, world!

// PARAMETERS AND ARGUMENTS
    // Parameters are used to allow inputs & perform tasks using these inputs
    function calculateArea(width, height) {
        console.log(width * height);
    }

    // Calling with parameters 
    calculateArea(10, 6);

    // Another example
    function sayThanks(name) {
        console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
      }
      
      sayThanks('Cole');

// DEFAULT PARAMETERS - ES6
      // Predetermined values in case there are no arguements passed
      function greeting (name = 'stranger') {
        console.log(`Hello, ${name}!`)
      }
      
      greeting('Nick') // Output: Hello, Nick!
      greeting() // Output: Hello, stranger!

      // another example
      function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
        console.log(`Remember to buy ${item1}`);
        console.log(`Remember to buy ${item2}`);
        console.log(`Remember to buy ${item3}`);
      }
      

// RETURN
      // the below will print undefined as there is no return
      function rectangleArea(width, height) {
        let area = width * height 
      }
      console.log(rectangleArea(5, 7)) // Prints undefined

      // to print the answer we need to add a return
      function rectangleArea(width, height) {
        let area = width * height 
        return area;
      }
      console.log(rectangleArea(5, 7)) 

      // return statement in body will stop following code from running
      function rectangleArea(width, height) {
        if (width < 0 || height < 0) {
          return 'You need positive integers to calculate area!';
        }
        return width * height; // will not run if width is less than 0 or height is less than 0
      }

      // Example: Calculate the number of monitors needed to buy 
      function monitorCount(rows, columns) {
        return rows * columns;
      }
      
      const numOfMonitors = monitorCount(5, 4);
      
      console.log(numOfMonitors);

// HELPER FUNCTIONS
      // Return a value of a function inside another function
      function monitorCount(rows, columns) {
        return rows * columns;
      }
      
      function costOfMonitors(rows, columns) {
        return monitorCount(rows, columns) * 200;
      }
      
      const totalCost = costOfMonitors(5, 4);
      console.log(totalCost);

// FUNCTION EXPRESSIONS
      // in a function expression, the function name is usually omitted
      // FE often stored in a variable
      // no name = anonymous function

    const calculateArea = function(width, height) {
          const area = width * height;
          return area;
      };

    // variable name = name or identifir of function 
      // ES6 = common pratice to use const
    //  assign anonymous function with parameters
    // Set curly braces that contain the function body

    // to invoke (call?) - cannot hoist
    calculateArea(5, 8);

    //EXAMPLE: Day plants need watered
    const plantNeedsWater = function(day, plantNeedsWater) {
        if (day === 'Wednesday') {
          return true;
        } else {
          return false;
        }
      }          
      
      console.log(plantNeedsWater('Tuesday')); // false

// ARROW FUNCTIONS - shorthand functions
      // use () => instead of saying function
      // parameters go in ( ) of the arrow function
      const rectangleArea = (width, height) => { // instead of  const rectangleArea = function(width, height)
        let area = width * height;
        return area
      }

// CONCISE BODY ARROW FUNCTIONS - refacter arrow function (most condensed)
      // Zero parameters needs empty parathases
      const functionName = () => {};
      // One parameter do not require parathases
      const functionName = paramOne => {};
      // Two or more parameters need parathases
      const functionName = (paramOne, paramTwo) => {};

  // IMPLICIT RETURN
      // Single-line Block = doesn't need curly braces
      const sumNumbers = number => number + number;
      // Multi-lin Block - Same as above?
      const sumNumbers = number => {
        const sum = number + number;
        return sum;
      };
      // Other example
        // multi
        const squareNum = (num) => {
          return num * num;
        };
        //Single
        const squareNum = num => num * num;
        /*
        The parentheses around num have been removed, since it has a single parameter.
        The curly braces { } have been removed since the function consists of a single-line block.
        The return keyword has been removed since the function consists of a single-line block.
        */

    
// REVIEW
      /*
      Review Functions
      Give yourself a pat on the back, you just navigated through functions!

      In this lesson, we covered some important concepts about functions:

      A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

      A parameter is a named variable inside a function's block which will be assigned the value of the argument passed 
      in when the function is invoked: 

      ES6 introduces new ways of handling arbitrary parameters through default parameters which allow us to assign a 
      default value to a parameter in case no argument is passed into the function.

      To return a value from a function, we use a return statement.


      It's good to be aware of the differences between function expressions, arrow functions, and function declarations. 
      As you program more in JavaScript, you'll see a wide variety of how these function types are used.
      */