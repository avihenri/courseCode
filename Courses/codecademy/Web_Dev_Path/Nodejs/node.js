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
            // NEED MORE HELP ON THIS!!

    // User Input/Output
        // console.log() = thin-wrapper on nodes stdout.write() which writes to the screen
        // stdin.on() - can be used on the process method to get user input
        process.stdin.on('data', (userInput) => {
            let input = userInput.toString()
            console.log(input)
          });

    // ERRORS   
        // Node has all standard errors
          // EvalError, SyntaxError, RangeError, ReferenceError, TypeError & URIError
        // we can use try..catch for error handling
        // many node api's use error first arguments
          // if there was an async error it will be passed to the first argument but if not the 1st arg will be undefined
          const errorFirstCallback = (err, data)  => {
            if (err) {
              console.log(`There WAS an error: ${err}`);
            } else {
               // err was falsy
                console.log(`There was NO error. Event data: ${data}`);
            }
          }
          // invoke api method - api.errorProneAsyncApi('problematic input', errorFirstCallback);

    // Filesystem
        // Its important that javascript scripts have limited access to filesystem
        // this is called sandboxing
          // it keeps users secure from malicious behaviour 
        // node has less restrictions and can use fs core module to interact with the filsystem
          // each method has a sync or async option
          // .readFile() - reads data from a specific file
        const fs = require('fs');

        let readDataCallback = (err, data) => {
        if (err) {
            console.log(`Something went wrong: ${err}`);
        } else {
            console.log(`Provided file contained: ${data}`);
        }
        };

        fs.readFile('./file.txt', 'utf-8', readDataCallback);
        
    // Readable streams
        // normally we don't want to read whole files at once so we stream parts
        // can do line-by-line - .createInterface() returns an EventEmitter set up to emit 'line' events:

        // We require in the readline and fs core modules.
        const readline = require('readline');
        const fs = require('fs');

        // We assign to myInterface the returned value from invoking readline.createInterface() with an object containing our designated input.
        const myInterface = readline.createInterface({
            // We set our input to fs.createReadStream('text.txt') which will create a stream from the text.txt file.
            input: fs.createReadStream('text.txt')
        });

        // Next we assign a listener callback to execute when line events are emitted. A 'line' event will be emitted after each line from the file is read.
        myInterface.on('line', (fileLine) => {
            // Our listener callback will log to the console 'The line read: [fileLine]', where [fileLine] is the line just read.
            console.log(`The line read: ${fileLine}`);
        });

        // writable streams
            // we can write line-by-line createWriteStream
        const fs = require('fs')
        const fileStream = fs.createWriteStream('output.txt');

        fileStream.write('This is the first line!'); 
        fileStream.write('This is the second line!');
        fileStream.end(); // writable streams don't stop automatically so we need to end


        const myInterface = readline.createInterface({
            input: fs.createReadStream('shoppingList.txt')
          });
          
          const fileStream = fs.createWriteStream('shoppingResults.txt');
          
          let transformData = (line) => {
            fileStream.write(`They were out of: ${line}\n`);
          }
          
          myInterface.on('line', transformData)

    // Create an HTTP Server
          // need of node is to create web servers , computer processes that listen that listen for requests from clients & return responses
          // http.createServer() - returns an instance of the http.server
          // http.server has .listen() - to listen for requests
          // when we run http.createServer() we pass in a custom callback function (requestListener)
          // this will be triggered once the server is listening and receives requests
        //   requestListener
        //     - expects 2 arguments - request object & a response object
        //     - each time a request is made - requestListener callback function is invoked - passing in the request & response objects of the incoming request
        //     - request & response objects come with a number of properties & methods of their own
        //     - requestListener is responsible for setting the response header & body
        //     - it must signal that the interaction is complete by calling the response.end()

        // We required in the http core module.
        const http = require('http');
        // We created a server variable assigned to the return value of the http.createServer() method.
        let requestListener = (request, response) => {
        // Within the requestListener callback, we make changes to the response object, response, 
        // so that it can send the appropriate information to the client sending the request. 
        // The status code 200 means that no errors were encountered. The header communicates that the file 
        // type is text, rather than something like audio or compressed data.
        response.writeHead(200, {'Content-Type': 'text/plain' });
        response.write('Hello World!\n');
        response.end();
        };
        // We invoked http.createServer() with our requestListener callback. 
        // This is similar to running the .on() of an EventEmitter: the requestListener will execute 
        // whenever an HTTP request is sent to the server on the correct port.
        const server = http.createServer(requestListener);
        // // The last line starts the server with the port 3000. Every server on a given machine specifies a unique port so that traffic can be correctly routed.
        server.listen(3000);

        /*
        Review
            Awesome work! You’ve learned a lot about Node.js including:

            - Node.js is a JavaScript runtime, an environment that allows us to execute our JavaScript code by converting it into something a computer 
            can understand.
            - REPLs are processes that read, evaluate, print, and repeat (loop), and Node.js comes with its own REPL we can access in our terminal with 
            the node command.
            - We run JavaScript programs with Node in the terminal by typing node followed by the file name (if we’re in the same directory) or the 
            absolute path of the file.
            - Code can be organized into separate files, modules, and combined through requiring them where needed using the require() function.
            - In addition to core modules, modules included within the environment to efficiently perform common tasks, we can also create our 
            own modules using module.exports and the require() function.
            - We can access NPM, a registry of hundreds of thousands of packages of re-usable code from other developers, directly through our terminal.
            - Node has an event-driven architecture.
            - We can make our own instances of the EventEmitter class and we can subscribe to listen for named events with the .on() method and emit 
            events with the .emit() method.
            - Node uses an event loop which enables asynchronous actions to be handled in a non-blocking way by adding callback functions to a queue 
            of tasks to be executed when the callstack is empty.
            - In order to handle errors during asynchronous operations, provided callback functions are expected to have an error as their first parameter.
            - Node allows for both output, data/feedback to a user provided by a computer, and input data/feedback to the computer provided by the user.
            - - The Node fs core module is an API for interacting with the file system.
            - Streams allow us to read or write data piece by piece instead of all at once.
            - The Node http core module allows for easy creation of web servers, computer processes that listen for requests from clients and return responses.

            */
        
        
        
        
        
        
        
        
        