// BROWSER COMPATIBILITY AND TRANSPILATION


    // Transpilation is the process of converting one programming language to another.
    /*
    NPM
        Before we install Babel, we need to setup our project to use the node package manager (npm). Developers use npm to 
        access and manage Node packages. Node packages are directories that contain JavaScript code written by other developers.
         You can use these packages to reduce duplication of work and avoid bugs.

        Before we can add Babel to our project directory, we need to run npm init. The npm init command creates a package.json 
        file in the root directory.

        A package.json file contains information about the current JavaScript project. Some of this information includes:

        Metadata — This includes a project title, description, authors, and more.
        A list of node packages required for the project — If another developer wants to run your project, npm looks inside 
        package.json and downloads the packages in this list.
        Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process. 
        In a later exercise, we will add a script that runs Babel and transpiles ES6 to ES5.
        If you have Node installed on your computer, you can create a package.json file by typing npm init into the terminal.

        The terminal prompts you to fill in fields for the project’s metadata (name, description, etc.)

        You are not required to answer the prompts, though we recommend at minimum, you add your own title and description. 
        If you don’t want to fill in a field, you can press enter. npm will leave fill these fields with default values or leave
        them empty when it creates the package.json file.
    */

    // We install Babel with the following two commands:
        // $ npm install babel-cli -D
        // $ npm install babel-preset-env -D

    // .babelrc - specify the version of the source JavaScript code.
        // You can specify the initial JavaScript version inside of a file named .babelrc. In your root directory, 
        // you can run **touch .babelrc** to create this file.
            // preset - specifies version of JS file
            // {
            //     "presets": ["env"]
            //  }

    // Babel Source Lib
        // In package.json file 
            // "scripts": {
            //     "test": "echo \"Error: no test specified\" && exit 1"
            //   },
            // We need to add a build for babel
                // "scripts": {
                //     "test": "echo \"Error: no test specified\" && exit 1",
                //     "build": "babel src -d lib"
                // }
                    // babel — The Babel command call responsible for transpiling code.
                    // src — Instructs Babel to transpile all JavaScript code inside the src directory.
                    // -d — Instructs Babel to write the transpiled code to a directory.
                    // lib — Babel writes the transpiled code to a directory called lib.
    
    // Build - npm run build
        // Now, we need to call "build" from the command line to transpile and write ES5 code to a directory called lib.


    // Review
           /* In this lesson, you learned about browser compatibility and transpilation. Let’s review the key concepts:

            - ES5 — The old JavaScript version that is supported by all modern web browsers.
            - ES6 — The new(er) JavaScript version that is not supported by all modern web browsers. The syntax is more readable, 
                similar to other programming languages, and addresses the source of common bugs in ES5.
            - caniuse.com — a website you can use to look up HTML, CSS, and JavaScript browser compatibility information.
            - Babel — A JavaScript package that transpiles JavaScript ES6+ code to ES5.
            - npm init — A terminal command that creates a package.json file.
            - package.json — A file that contains information about a JavaScript project.
            - npm install — A command that installs Node packages.
            - babel-cli — A Node package that contains command line tools for Babel.
            - babel-preset-env — A Node package that contains ES6+ to ES5 syntax mapping information.
            - .babelrc — A file that specifies the version of the JavaScript source code.
            - "build" script — A package.json script that you use to tranpsile ES6+ code to ES5.
            - npm run build — A command that runs the build script and transpiles ES6+ code to ES5.
            
            For future reference, here is a list of the steps needed to set up a project for transpilation:

            1. Initialize your project using npm init and create a directory called src
            2. Install babel dependencies by running
                    npm install babel-cli -D
                    npm install babel-preset-env -D
            3. Create a .babelrc file inside your project and add the following code inside it:
                    {
                    "presets": ["env"]
                    }
            4. Add the following script to your scripts object in package.json:
                    "build": "babel src -d lib"
            5. Run npm run build whenever you want to transpile your code from your src to lib directories. */