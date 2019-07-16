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