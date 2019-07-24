/* 
Node.js is a JavaScript runtime, or an environment that allows us to execute JavaScript 
code outside of the browser. A “runtime” converts code written in a high-level, 
human-readable, programming language and compiles it down to code the computer can execute.
*/

// check verson of node in bash
    // node -v

// REPL - READ, EVAL, PRINT, LOOP
    // 3 STATES
        // READ = program reads input from a user
        // EVAL = program evaluates users input
        // PRINT = program prints out its evaluation to console
            // LOOP = Loops through these states again

    // node comes with JS built in REPL
        // to access type cmd - node
        // a > will show = waiting for input
        // it will eval your input line by line, if you want to do multiple lines
            // type .editor & to enter ctrl D
        // Each session has memory of any varibles you use until closed

    // node global object
        // cmd - global = huge object
        // shorten = global.process
        // Object.keys(global) = easier to read list
        // to add to object (if necessary) = global.cat = 'meow'
            // console.log(global.cat) = meow

console.log('Heya!'); // to check, follow the below 
    // in bash go to directory of the js program (eg. app.js)
    // type - node app.js 
    // Heya! prints

// Accessing the Process Object - Doc https://nodejs.org/api/process.html
    // The process object is like the Task Manager for windows or Activity Monitor for Mac
        // process.env = stores & controls info about the environment for which the process is running
            // PWD property in process.env = string with directory in which the current process is located
            // An app in development stage may perform differently that in production
                // may need some extra login in development
                // should add aproperty to process.env called NODE_ENV with a value of development or production
                if (process.env.NODE_ENV === 'development'){
                    console.log('Testing! Testing! Does everything work?');
                  }
        // process.memoryUsage() = returns CPU info for current process..
            // { rss: 26247168,
            // heapTotal: 5767168,
            // heapUsed: 3573032,
            // external: 8772 }
                // Heap = means different things in different contexts
                    // could refer to a specific data structure
                    // or refer to a block of computer memory
                    // process.memoryUsage.heapUsed will return a number of bytes of memory the process is using
        //process.argv = holds array of cmd values provided when process was initiated 
            // 1st element = absolute path to Node which ran the process
            // 2nd element =path to file that's running
            // cmd line arguements (each are saparated with spaces)
                  // node myProgram.js testing several features
                  console.log(process.argv[3]); // Prints 'several'
    // EXERCISE:
        let initialMemory = process.memoryUsage().heapUsed;
        let word = process.argv[2];        
        console.log(`Your word is ${word}`)        
        // Create a new array
        let wordArray = [];        
        // Loop 1000 times, pushing into the array each time 
        for (let i = 0; i < 1000; i++){
        wordArray.push(`${word} count: ${i}`)        }
        
        console.log(`Starting memory usage: ${initialMemory}. 
        \nCurrent memory usage: ${process.memoryUsage().heapUsed}. 
        \nAfter using the loop to add elements to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory.`)
        // In bash
            // $ node app.js shattered >
            //  Your word is shattered
            // Starting memory usage: 3144256.
            // Current memory usage: 4052440.
            // After using the loop to add elements to the array, the process is using 911792 more bytes of memory.
    