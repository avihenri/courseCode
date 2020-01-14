// VARIABLES

// OLDER VERSION - var

        var myName = 'Avril';
        var favoriteFood = 'pizza';
        var numOfSlices = 8;
        console.log(favoriteFood); // pizza
        console.log(numOfSlices); // 8

// VARIABLE RULES

    // Cannot start with numbers
    // Case sensitive - shouldn't have two varriables the same with different cases
    // Cannot be the same as keyword - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords 

// NEW VERSION (ES6)

    // let - can be reassigned a different value
        let meal = 'Enchiladas';
        console.log(meal); // Output: Enchiladas
        meal = 'Burrito';
        console.log(meal); // Output: Burrito
    // can also be declared without a value - undefined
        let price;
        console.log(price); // Output: undefined
        price = 350;
        console.log(price); // Output: 350   

    // const - cannot be reassigned & must be assigned when declared
        const entree = 'Enchiladas';
        console.log(entree); // Enchiladas
        entree = 'Taco'; // TypeError: Assignment to constant variable.


// MATHEMATICAL ASSIGNMENT OPERATORS

    // =    assigns
        let w = 4;
    // +=   assigns & calculates 
        w += 1; 
        console.log(w); // Output: 5
    // -=
        let x = 20;
        x -= 5; // Can be written as x = x - 5
        console.log(x); // Output: 15
    // *=
        let y = 50;
        y *= 2; // Can be written as y = y * 2
        console.log(y); // Output: 100
    // /=
        let z = 8;
        z /= 2; // Can be written as z = z / 2
        console.log(z); // Output: 4


// INCREMENT & DECREMENT OPERATOR

    // ++   increment op - increase by 1
        let a = 10;
        a++;
        console.log(a); // Output: 11

    // --   decrement op - decrease by 1
        let b = 20;
        b--;
        console.log(b); // Output: 19


// STRING CONCATENATION WITH VARIABLES

    // we use the + operator to concatenate
        let myPet = 'armadillo';
        console.log('I own a pet ' + myPet + '.'); 
        // Output: 'I own a pet armadillo.'
        
        let favoriteAnimal = 'tiger';
        console.log('My favorite animal: ' + favoriteAnimal)
    

// STRING INTERPOLATION

    const myPet = 'armadillo';
    console.log(`I own a pet ${myPet}.`);
    // Output: I own a pet armadillo.

    const myName = 'Avril';
    let myCity = 'Edinburgh';
    console.log(`My name is ${myName}. My favorite city is ${myCity}`);
    // My name is Avril. My favorite city is Edinburgh


// TYPEOF OPERATOR

    //typeof operator checks the value to its right and returns or passess back a string of the data type
        const unknown1 = 'foo';
        console.log(typeof unknown1); // Output: string
        
        const unknown2 = 10;
        console.log(typeof unknown2); // Output: number
        
        const unknown3 = true; 
        console.log(typeof unknown3); // Output: boolean


/* VARIABLES

Review Variables
Nice work! This lesson introduced you to variables, a powerful concept you will use in all your future programming endeavors.

Let's review what we learned:

Variables hold reusable data in a program and associate it with a name.
Variables are stored in memory.
The var keyword is used in pre-ES6 versions of JS.
let is the preferred way to declare a variable when it can be reassigned, and const is the preferred way to declare a variable with a constant value.
Variables that have not been initialized store the primitive data type undefined.
Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
The + operator is used to concatenate strings including string values held in variables
In ES6, template literals use backticks ` and ${} to interpolate values into a string.
The typeof keyword returns the data type (as a string) of a value. */