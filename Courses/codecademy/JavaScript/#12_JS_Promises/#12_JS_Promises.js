// JAVASCRIPT PROMISES

// What is a Promise?

/*
Promise object can be in one of three states:
Pending: The initial state— the operation has not completed yet.
Fulfilled: The operation has completed successfully and the promise now has a resolved value. 
For example, a request’s promise might resolve with a JSON object as its value.
Rejected: The operation has failed and the promise has a reason for the failure. 
This reason is usually an Error of some kind.
*/

 // Constructing a Promise Object
    //To create a new Promise object, we use the new keyword and the Promise constructor method:
    const executorFunction = (resolve, reject) => { };
    const myFirstPromise = new Promise(executorFunction);
        // executor function has two parameters --> resolve() & reject()
            // resolve - func with one parameter - changes status from pending to fulfilled
            // reject - func takes reason or error as an arguement - changes status from pending to rejected & reason will be set to arguement
        // EXAMPLE 
        const executorFunction = (resolve, reject) => { // executorFunction() is passed to the constructor and has two functions as parameters: resolve and reject.
            if (someCondition) { // TRUE
                resolve('I resolved!');
            } else { // FALSE
                reject('I rejected!'); 
            }
          }
          const myFirstPromise = new Promise(executorFunction); // declare a variable myFirstPromise
            // myFirstPromise is constructed using new Promise() which is the Promise constructor method.
        
        // SUNGLASSES EXAMPLE
        const inventory = {
            sunglasses: 0,
            pants: 1088,
            bags: 1344
          };          
          const myExecutor = (resolve, reject) => {
            if (inventory.sunglasses) {
              resolve('Sunglasses order processed.');
            } else {
              reject('That item is sold out.');
            }
          }          
          const orderSunglasses = () => {
            return new Promise(myExecutor);
          }          
          const orderPromise = orderSunglasses();          
          console.log(orderPromise); // REJECTED AS AT 0

    // The Node setTimeout() Function
          // setTimeout() is a Node API that uses callback functions to schedule tasks to be performed after a delay. 
            // EXAMPLE
            const delayedHello = () => {
                console.log('Hi! This is an asynchronous greeting!');
              };              
              setTimeout(delayedHello, 2000);
                // In at least two seconds delayedHello() will be invoked.
                // Async uses an event-loop
                    // after 2 secs delayedHello will be added to the loop
                    // any sync code will run before it can run
                    // may be longer than 3 secs

            // EXAMPLE 2
            const returnPromiseFunction = () => { // we invoked returnPromiseFunction() which returned a promise
                return new Promise((resolve, reject) => {
                  setTimeout(( ) => {resolve('I resolved!')}, 1000);
                });
              };              
              const prom = returnPromiseFunction(); // assigned that promise to the variable prom

            // WORKING EXAMPLE
            console.log("This is the first line code in app.js.");
            // Keep the line above as the first line of code
            // Write your code here:
            const usingSTO = () => {
              console.log('Yoho!');
            }
            setTimeout(usingSTO, 20);            
            // Keep the line below as the last line of code:
            console.log("This is the last line of code in app.js.");
          
   
          