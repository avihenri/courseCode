// LEARN JAVASCRIPT: ERROR HANDLING
    // Introduction to Error Handling
        // Two types of errors - ones that break your code and ones that still run
        // plan to anticipate & respond if there is an error

    // Runtime Errors
        // errors that occur at runtime (ReferenceError, TypeError)
        console.log('This message will be printed to the console.');
        function throwError () {
        return notDefinedVar;
        }
        // Call throwError() below:
        throwError();
        console.log('Because of the error, this will not printed!');
        /*
        This message will be printed to the console.
        /home/ccuser/workspace/error-handling-runtime-errors/main.js:4
        return notDefinedVar;
                ^

        ReferenceError: notDefinedVar is not defined
            at throwError (/home/ccuser/workspace/error-handling-runtime-errors/main.js:4:10)
            at Object.<anonymous> (/home/ccuser/workspace/error-handling-runtime-errors/main.js:8:1)
            at Module._compile (module.js:571:32)
            at Object.Module._extensions..js (module.js:580:10)
            at Module.load (module.js:488:32)
            at tryModuleLoad (module.js:447:12)
            at Function.Module._load (module.js:439:3)
            at Module.runMain (module.js:605:10)
            at run (bootstrap_node.js:427:7)
            at startup (bootstrap_node.js:151:9) */

    // Constructing an Error
        // JS Errors are objects that have a name & message property
        // We can throw our own errors using the Error function -
        console.log(Error('Your password is too weak.')); // Prints: Error: Your password is too weak.
            // error function takes a string which becomes the message
            // can include the new keyword -
            console.log(new Error('Your password is too weak.'));
            // Prints: Error: Your password is too weak.

    // The throw Keyword
        // Creating an error doesn't stop the program you need to throw the error
        throw Error('Something wrong happened');
        // Error: Something wrong happened
        console.log('This will never run');

    // The try...catch Statement
        // Use this to anticipate & handle errors
        try { // try block - code we want & where we can anticipate errors
            throw Error('This error will get caught'); // throw an error
          } catch (e) { // catch block - accepts the error as an argument to handle it
            console.log(e); // executes code the handle this error & logs error message but program keeps running
          }
          // Prints: This error will get caught          
          console.log('The thrown error that was caught in the try...catch statement!');
          // Prints: 'The thrown error that was caught in the try...catch statement!'

        try {
        throw Error('This is the try block');
        } catch(e) {
        console.log(e);
        }
        /* Error: This is the try block
            at Object.<anonymous> (/home/ccuser/workspace/error-handling-try-catch-i/main.js:3:9)
            at Module._compile (module.js:571:32)
            at Object.Module._extensions..js (module.js:580:10)
            at Module.load (module.js:488:32)
            at tryModuleLoad (module.js:447:12)
            at Function.Module._load (module.js:439:3)
            at Module.runMain (module.js:605:10)
            at run (bootstrap_node.js:427:7)
            at startup (bootstrap_node.js:151:9)
            at bootstrap_node.js:542:3 */
          

    // Handling with try...catch
        // handle errors thrown by JS Engine in browsers
        const someVar = 'Cannot be reassigned';
        try {
          someVar = 'Still going to try';
        } catch(e) {
          console.log(e);
        }
        // Prints: TypeError: Assignment to constant variable.

        // WORKING EXAMPLE
        function capAllElements(arr){
            try {
            arr.forEach((el, index, array) => {
              array[index] = el.toUpperCase();
            });
            } catch(e) {
          console.log(e);
          }
        }         
        capAllElements('Incorrect argument');
        /* TypeError: arr.forEach is not a function
            at capAllElements (/home/ccuser/workspace/error-handling-try-catch-ii/main.js:5:9)
            at Object.<anonymous> (/home/ccuser/workspace/error-handling-try-catch-ii/main.js:14:1)
            at Module._compile (module.js:571:32)
            at Object.Module._extensions..js (module.js:580:10)
            at Module.load (module.js:488:32)
            at tryModuleLoad (module.js:447:12)
            at Function.Module._load (module.js:439:3)
            at Module.runMain (module.js:605:10)
            at run (bootstrap_node.js:427:7)
            at startup (bootstrap_node.js:151:9) */


    /* Error Handling Review
        Great job with handling errors!
        
        In this lesson we went over:
        
        How mistakes in programming leads to errors.
        Why errors are useful for developers.
        Errors will prevent a program from executing unless it is handled.
        How to create an error using the Error() function.
        How to throw an error object using the throw keyword.
        How to use the try...catch statement to handle thrown errors.
        Evaluating code in a try block to anticipate errors.
        Catching the error in a catch block to allow our program to continue running.
        Why the try...catch statement would be useful in a program.
        Now you have the ability to create code that doesn’t break when an error is thrown! */

          
          