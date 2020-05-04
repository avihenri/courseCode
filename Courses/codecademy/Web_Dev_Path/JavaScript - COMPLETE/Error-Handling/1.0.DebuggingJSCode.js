// DEBUGGING JAVASCRIPT CODE
    // Error Stack Traces
        // compiler - translates your code for a computer to understand
            // if it cannot read your code, it will throw an error
        // This is called error stack trace 
            // where the error is, what type of error & the description of the error

    // Reading Error Stack Traces
        /* ERROR -
            /home/ccuser/workspace/learn-javascript-debugging-code/app.js:1
            myVariable;
            ^
            ReferenceError: myVariable is not defined 
        */
        // Line error occurred = 1 in app.js
        // Type = ReferenceError
        // Error message = myVariable is not defined

        /*
            Based on the following error stack trace, fill in the answers to the questions below:
            ------------------------------------------------------------------

            /home/ccuser/workspace/learn-javascript-debugging-code/script.js:5
            if (numberSum > total;) {
                                ^
                        
            SyntaxError: Unexpected token ;

            ------------------------------------------------------------------

            From what file was this error thrown?
            1 - Answer: script.js
            On what line of that file was this error thrown?
            2 - Answer: 5
            What type of error was thrown in this stack trace?
            3 - Answer: SyntaxError
            What is the description of the error in this stack trace?
            4 - Answer: Unexpected token ; */

    // JavaScript Error Types
        // Common error types
            // SyntaxError = typo in code making it invalid (not properly closed brackets, parentheses and semicolons)
            // ReferenceError = Variable doesn't exists (maybe not declared)
            // TypeError = Attempt to perform an operations on a value of the wrong type (array, string etc)
        // Other errors
            //  EvalError
                // Creates an instance representing an error that occurs regarding the global function eval().
            // InternalError 
                // Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".
            // RangeError
                // Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.           
            // URIError
                 // Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.
                 
        myVariable++;
        // 1 - What type of error will be thrown on the line above: 
        ReferenceError
        const myString = 42;
        myString.substring(0);
        // 2 - What type of error will be thrown on the line above: 
        TypeError
        const myRandomNumber; = Math.random();
        // 3 - What type of error will be thrown on the line above: 
        SyntaxError

    // Debugging Errors
        // Process
            // run code - find error type, description & location
            // go to the file & line number and identify the bug
            // fix the bug & re-run the code
            // repeat steps 1-3 until it works

    // Locating Silent Bugs
        // Just because the console is error free doesn't mean your code is bug free 
        // Using console.log() helps debug your code if it is not working as expected

    // Debugging with console.log()
        // Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.
        function getLaterFirstLetter(string1, string2) {
            const firstLetter1 = string1.charAt(0);  // was charAt(1)
            const firstLetter2 = string2.charAt(0);  // was charAt(1)
            
            if (firstLetter1 === firstLetter2) {
            return null;
            } else if (firstLetter1 < firstLetter2) { // was firstLetter1 > firstLetter2
            return string2;
            } else {
            return string1;
            }
        }
        
        // Should return "blueberry"
        console.log("getLaterFirstLetter('avocado', 'blueberry') returns: " + getLaterFirstLetter('avocado', 'blueberry'));        
        // Should return "zebra"
        console.log("getLaterFirstLetter('zebra', 'aardvark') returns : " + getLaterFirstLetter('zebra', 'aardvark'));        
        // Should return null
        console.log("getLaterFirstLetter('astro', 'afar') returns: " + getLaterFirstLetter('astro', 'afar'));

        /*
            getLaterFirstLetter('avocado', 'blueberry') returns: blueberry
            getLaterFirstLetter('zebra', 'aardvark') returns : zebra
            getLaterFirstLetter('astro', 'afar') returns: null
        */

    /*
    Debugging Review
        You just learned a lot of techniques for helping you get unstuck in all debugging situations. Congratulations! 
        Let’s synthesize everything you learned into one debugging process.

       1. Is your code throwing errors? If so, read the error stack trace for the type, description, and location of the error. 
            Go to the error’s location and try to fix.
       2. Is your code broken but not throwing errors? Walk through your code using console.log() statements. When unexpected results occur, 
            isolate the bug and try to fix it.
       3. Did you locate the bug using steps 1 and 2, but can’t fix the bug? Consult documentation to make sure you are using all JavaScript 
            functionality properly. If you are still stuck, Google your issue and consult Stack Overflow for help. Read solutions or post your 
            own Stack Overflow question if none exist on the topic.
        It may take some time and practice, but this is how all developers work through their issues, so don’t give up, and you’ll be an 
        expert in no time.

        Congratulations again on learning all of these new techniques. Let’s give them one more round of practice so you can see how much progress you’ve made!
        */
