// LEARN JAVASCRIPT: CONDITIONALS

// CONDITIONAL STATEMENTS

/* 
A conditional statement checks specific condition(s) and performs a task based on the condition(s).
- if, else if, and else statements.
- comparison operators.
- logical operators.
- truthy vs falsy values.
- ternary operators.
- the switch statement.
*/

// IF STATEMENT
    let sale = true;
    sale = false; // changed to false
    if (sale) {
    console.log('Time to buy!'); // will run if true and not if false
    }

// ELSE STATEMENT 
    if(sale) {
        console.log('Time to buy!');
    } else {
        console.log('Time to wait for a sale.');
    }

// COMPARISON OPERATORS
/*
- Less than: <
- Greater than: >
- Less than or equal to: <=
- Greater than or equal to: >=
- Is equal to: ===
- Is NOT equal to: !==
*/
    let hungerLevel = 10;
    if (hungerLevel > 7) {
    console.log('Time to eat!')
    } else {
    console.log('We can eat later!')
    } // Time to eat!

// LOGICAL OPERATORS
// the and operator (&&) - checking if both are true
    if (stopLight === 'green' && pedestrians === 0) {
        console.log('Go!'); // will run
    } else {
        console.log('Stop');
    }

// the or operator (||) - checks if either condition is true
    if (day === 'Saturday' || day === 'Sunday') { // if it is sat the 2nd condition won't even be checked
        console.log('Enjoy the weekend!'); // runs if sat or sun
    } else {
        console.log('Do some work.'); // runs if mon-fri
    }

// the not operator, otherwise known as the bang operator (!)
// Essentially, the ! operator will either take a true value and pass back false, or it will take a false value and pass back true.
    let excited = true;
    console.log(!excited); // Prints false

    let sleepy = false;
    console.log(!sleepy); // Prints true

    let mood = 'sleepy';
    let tirednessLevel = 6;

    if (!mood === 'sleepy' || tirednessLevel > 8) {
    console.log('time to sleep');
    } else {
    console.log('not bed time yet') // this runs
    }

// TRUTHY & FALSY
    let myVariable = 'I Exist!';
    if (myVariable) {
    console.log(myVariable) // Will run as it has a value = truthy
    } else {
    console.log('The variable does not exist.')
    }
    // it has a truthy value but does not mean it is a true value, it just means it has a value assigned
    /* Falsy values:   
        - 0
        - Empty strings like "" or ''
        - null which represent when there is no value at all
        - undefined which represent when a declared variable lacks a value
        - NaN, or Not a Number
    */
    let numberOfApples = 0;
    if (numberOfApples){
        console.log('Let us eat apples!');
    } else {
        console.log('No apples left!');
    }  
    // Prints 'No apples left!'

// TRUTHY AND FALSY ASSIGNMENT
   let defaultName = username || 'Stranger';
    /* Because || or statements check the left-hand condition first, the variable defaultName will be assigned the actual value 
    of username if is truthy, and it will be assigned the value of 'Stranger' if username is falsy. This concept is also referred to 
    as short-circuit evaluation. */

    let tool = 'marker';
    // Use short circuit evaluation to assign  writingUtensil variable below:
    let writingUtensil = tool || 'pen';
    console.log(`The ${writingUtensil} is mightier than the sword.`); // The marker is mightier than the sword.

// TERNARY OPERATOR 
    let isNightTime = true;
    if (isNightTime) {
    console.log('Turn on the lights!');
    } else {
    console.log('Turn off the lights!');
    }
    // We can use a ternary operator to perform the same functionality:
    isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// ELSE IF STATEMENTS
    // you can have as many else if statements as you want
        let stopLight = 'yellow';
        if (stopLight === 'red') {
        console.log('Stop!');
        } else if (stopLight === 'yellow') {
        console.log('Slow down.');
        } else if (stopLight === 'green') {
        console.log('Go!');
        } else {
        console.log('Caution, unknown!');
        }

        let season = 'summer';
        if (season === 'spring') {
        console.log('It\'s spring! The trees are budding!');
        } else if (season === 'winter') {
        console.log('It\'s winter! Everything is covered in snow.');
        } else if (season === 'fall') {
        console.log('It\'s fall! Leaves are falling!');
        } else if (season === 'summer') {
        console.log('It\'s sunny and warm because it\'s summer!'); // will run
        } else {
        console.log('Invalid season.');
        }

// THE SWITCH KEYWORD
// A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:
    let groceryItem = 'papaya';
    switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime':
        console.log('Limes are $1.49');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    default:
        console.log('Invalid item');
        break;
    }
    // Prints 'Papayas are $1.29'

    let athleteFinalPosition = 'first place';
    switch (athleteFinalPosition) {
    case 'first place':
        console.log('You get the gold medal!');
        break;
    case 'second place':
        console.log('You get the silver medal!');
        break;
    case 'third place':
        console.log('You get the bronze medal!');
        break;
    default:
        console.log('No medal awarded.');
        break;
    }
    // Prints: You get the gold medal!

    /*

    CONDITIONAL STATEMENTS
    Review
    Way to go! Here are some of the major concepts for conditionals:

    - An if statement checks a condition and will execute a task if that condition evaluates to true.
    - if...else statements make binary decisions and execute different code blocks based on a provided condition.
    - We can add more conditions using else if statements.
    - Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
    - The logical and operator, &&, or "and", checks if both provided expressions are truthy.
    - The logical operator ||, or "or", checks if either provided expression is truthy.
    - The bang operator, !, switches the truthiness and falsiness of a value.
    - The ternary operator is shorthand to simplify concise if...else statements.
    - A switch statement can be used to simplify the process of writing multiple else if statements. 
    The break keyword stops the remaining cases from being checked and executed in a switch statement.

*/