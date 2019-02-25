// HIGHER-ORDER FUNCTIONS - a function that either accepts functions as parameters, returns a function, or both!
// (functions can behave like any other type of data)

    // Functions as Data
        // if we have a function with a really big name we can assign it to a variable 
        // with a shorter name for better readable code -
        const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
            for(let i = 1; i <= 1000000; i++) {
              if ( (2 + 2) != 4) {
                console.log('Something has gone very wrong :( ');
              }
            }
          }
          
          const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes; // assign to shorter name
          
          is2p2(); // invoke (call)
          
          console.log(is2p2.name); // to find the name of function assigned

    // Functions as Parameters
          // functions called as parameters are called callback functions            
            const addTwo = num => num + 2; // function that adds 2

            const timeFuncRuntime = funcParameter => {
            let t1 = Date.now();
            funcParameter();
            let t2 = Date.now();
            return t2 - t1;
            };

            const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes); // checks how long checkthattwo... function takes to run

            const checkConsistentOutput = (func, val) => {
            let checkOne = func(val);
            let checkTwo = func(val);
            if (checkOne === checkTwo) {
                return checkOne;
            } else {
                return 'This function returned inconsistent results';
            }
            }

            checkConsistentOutput(addTwo, 4); // takes func addTwo and and adds 2 to val parameter

        /*
        Review
            Great job! By thinking about functions as data and learning about higher-order functions, you've taken important steps in being able to write clean, modular code and take advantage of JavaScript's flexibility.

            Let's review what we learned in this lesson:

            Abstraction allows us to write complicated code in a way that's easy to reuse, debug, and understand for human readers

            We can work with functions the same way we would any other type of data including reassigning them to new variables

            JavaScript functions are first-class objects, so they have properties and methods like any object

            Functions can be passed into other functions as parameters

            A higher-order function is a function that either accepts functions as parameters, returns a function, or both
        */
