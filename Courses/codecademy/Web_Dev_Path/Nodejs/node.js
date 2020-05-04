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
    
// Core Modules and Local Modules
    // Modules = is a colletion of code in a separate file to help manage readability - instead of having everyting in one file
    // each file can be used by using the require() function
    // it is essential for creating scalable programs that incorporate libraries & frameworks
    // Node has several modules to help perform common tasks = core modules
        // Core modules are located in the lib/ folder
        // we pass the module name in the require() function (local modules, so not core, we pass the path to the module. For Core we just pass the name)
            // Require in the 'events' core module:
            let events = require('events');
    // The require() function includes logic under the hood - doc to help https://nodejs.org/api/modules.html#modules_modules
        // first checks if the argument is a core module
            // if not - it will move to different attepts to locate it 
        // example:
            // dog.js
            module.exports = class Dog { 
            // module.exports: each file has this in node & it holds everything in the file/module that is available to use in a require
                constructor(name) {
                this.name = name;
                }            
                praise() {
                return `Good dog, ${this.name}!`;
                }
            };
            // app.js
            let Dog = require('./dog.js'); // now holds the module.exports
            // if no file extension is provided require() assumes it so if './dog was passed it would know it is ./dog.js
            const tadpole = new Dog('Tadpole');
            console.log(tadpole.praise());
    // EXERCISE:
        // PROGRAM WHERE A DOG CAN FIGHT A CAT
            // cat.js | dog.js = classes
            // assign cat.js module.exports
            module.exports = class Cat {
                constructor(name, clawStrength) {
                  this.name = name;
                  this.clawStrength = clawStrength;
                }
              };
            // do the same for dog.js
            module.exports = class Dog {
                constructor(name, toothStrength) {
                  this.name = name;
                  this.toothStrength = toothStrength;
                }
              };
            // NOW DOG & CAT CLASSES ARE BEING EXPORTED
            // Now require them in app.js
              // Require modules in:
                let Dog = require('./dog.js');
                let Cat = require('./cat.js');              
                let fight = (dog, cat) => {
                    if (dog.toothStrength > cat.clawStrength) {
                        console.log(`${dog.name} wins!`);
                    }
                    else if (dog.toothStrength < cat.clawStrength) {
                        console.log(`${cat.name} wins!`);
                    }
                    else {
                        console.log(`${dog.name} and ${cat.name} are equally skilled fighters!`);

                    }
                }
                const myDog = new Dog('Rex', Math.random());
                const myCat = new Cat('Tabby', Math.random());
                fight(myDog, myCat);
            // now do node app.js in bash and see who wins - it is random & it worked

// Intro to Node.js - web dev
    // Event-Driven Architecture
        // Node provides an EventEmitter class - we access by requiring in the events module
        // Require in the 'events' core module
        let events = require('events');
        // Create an instance of the EventEmitter class
        let myEmitter = new events.EventEmitter();

        // each event emitter instance has an .on() method
            // assigns a listener callback function 
                // takes 2 arguments - 1st = name of event as a string & 2nd = listener callback function
        // each event emitter instance also has .emit() method
            // announces a named event has occured
                // takes 1st arguments = the name of event as astring & 2nd = the data that should be passed into the listener callback function
        let newUserListener = (data) => {
            console.log(`We have a new user: ${data}.`);
        };    
        // Assign the newUserListener function as the listener callback for 'new user' events
        myEmitter.on('new user', newUserListener)    
        // Emit a 'new user' event
        myEmitter.emit('new user', 'Lily Pad') //newUserListener will be invoked with 'Lily Pad'

        // WORKING EXAMPLE
        
        // app.js
        let listenerCallback = (data) => {
            console.log('Celebrate ' + data);
        }
        let myEmitter = new events.EventEmitter();
        myEmitter.on('celebration', listenerCallback);
        myEmitter.emit('celebration', 'Covid is gone!')
        // in bash - node app.js = Celebrate Covid is gone!

    // Asynchronous JavaScript with Node.js
        // Node provides a number of APIs for performing async tasks which expect a callback function as arguments
            // These APIs trigger the subscription to and emitting of events to signal the completion of the operation
            // once completed the callback function is added to the queue or line, or list or synchronous tasks 
            // so if sync tasks never end the event-queue would never run
            // 
