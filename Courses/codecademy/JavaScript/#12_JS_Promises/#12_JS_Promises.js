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
          
        // Consuming Promises - 
        // .then() - higher-order function - takes 2 callback functions as arguements (handlers)
            // first handler - onFulfilled - success handler
            // second handler - onRejcted - failure handler
            // then() can be invoked on one, both or neither

        // The onFulfilled and onRejected Functions
            // EXAMPLE ON FULFILLED
            const prom = new Promise((resolve, reject) => { // prom is a promise which will resolve to 'Yay!'.
              resolve('Yay!');
            });            
            const handleSuccess = (resolvedValue) => { // We define a function, handleSuccess(), which prints the argument passed to it.
              console.log(resolvedValue); // Since prom resolves, handleSuccess() is invoked with prom‘s resolved value, 'Yay', so 'Yay' is logged to the console.
            };            
            prom.then(handleSuccess); // Prints: 'Yay!' We invoke prom‘s .then() function passing in our handleSuccess() function.

            // WE SHOULD PROVIDE LOGIC FOR FULFILLED & REJECTED
            let prom = new Promise((resolve, reject) => {
              let num = Math.random();
              if (num < .5 ){
                resolve('Yay!');
              } else {
                reject('Ohhh noooo!');
              }
            });            
            const handleSuccess = (resolvedValue) => {
              console.log(resolvedValue);
            };            
            const handleFailure = (rejectionReason) => {
              console.log(rejectionReason);
            };            
            prom.then(handleSuccess, handleFailure);

          // WORKING EXAMPLE - SUNGLASSES
              // SUNGLASSES LIBRAURY.JS
                const inventory = {
                  sunglasses: 1900,
                  pants: 1088,
                  bags: 1344
              };              
              const checkInventory = (order) => {
                  return new Promise((resolve, reject) => {
                      setTimeout(() => {
                          let inStock = order.every(item => inventory[item[0]] >= item[1]);
                          if (inStock) {
                              resolve(`Thank you. Your order was successful.`);
                          } else {
                              reject(`We're sorry. Your order could not be completed because some items are sold out.`);
                          }
                      }, 1000);
                  })
              };              
                module.exports = { checkInventory };                
                // APP.JS
                const {checkInventory} = require('./library.js');
                const order = [['sunglasses', 1], ['bags', 2]];  
                const handleSuccess = (resolvedValue) => {
                  console.log(resolvedValue);
                }                
                const handleFailure = (rejectedValue) => {
                  console.log(rejectedValue);
                }                
                checkInventory(order).then(handleSuccess, handleFailure);
                // OUTPUT: Thank you. Your order was successful.

          // Using catch() with Promises
                // write cleaner code = separation of concerns
                  // organise code into distinct sections
              // chain then() so both fulfilled and failure are handled
                // EXAMPLE
                prom
                .then((resolvedValue) => {
                  console.log(resolvedValue);
                })
                .then(null, (rejectionReason) => {
                  console.log(rejectionReason);
                });
              // Catch() func - more readable code
                // takes one parameter - onRejected
                  // failure handler will be invoked if it is rejected
                // EXAMPLE:
                prom //prom is a promise which randomly either resolves with 'Yay!' or rejects with 'Ohhh noooo!'.
                // We pass a success handler to .then() and a failure handler to .catch().
                .then((resolvedValue) => { //If the promise resolves, .then()‘s success handler will be invoked with 'Yay!'.
                  console.log(resolvedValue); 
                })
                // If the promise rejects, .then() will return a promise with the same rejection 
                // reason as the original promise and .catch()‘s failure handler will be invoked with that rejection reason.
                .catch((rejectionReason) => {
                  console.log(rejectionReason);
                });

                // Working example - app.js (sunglasses)
                const {checkInventory} = require('./library.js');
                const order = [['sunglasses', 1], ['bags', 2]];                
                const handleSuccess = (resolvedValue) => {
                  console.log(resolvedValue);
                };                
                const handleFailure = (rejectReason) => {
                  console.log(rejectReason);
                };
                // sunglasses is set to 0 so should fail
                checkInventory(order).then(handleSuccess).catch(handleFailure);
                // OUTPUT: We're sorry. Your order could not be completed because some items are sold out.

            // Chaining Multiple Promises
                // useful for multiple programs using each other & executing in certain order
                // chaining is called composition
                // EXAMPLE:
                firstPromiseFunction() // We invoke a function firstPromiseFunction() which returns a promise.
                .then((firstResolveVal) => { // We invoke .then() with an anonymous function as the success handler.
                  return secondPromiseFunction(firstResolveVal); // Inside the success handler we return a new promise
                })
                .then((secondResolveVal) => { // We invoke a second .then() to handle the logic for the second promise settling.
                  console.log(secondResolveVal); // log the second promise’s resolved value to the console.
                });

                // WORKING EXAMPLE: SUNGLASSES
                // LIBRARY.JS
                const store = {
                  sunglasses: {
                    inventory: 817, 
                    cost: 9.99
                  },
                  pants: {
                    inventory: 236, 
                    cost: 7.99
                  },
                  bags: {
                    inventory: 17, 
                    cost: 12.99
                  }
                };                
                const checkInventory = (order) => {
                  return new Promise ((resolve, reject) => {
                   setTimeout(()=> {  
                   const itemsArr = order.items;  
                   let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
                   
                   if (inStock){
                     let total = 0;   
                     itemsArr.forEach(item => {
                       total += item[1] * store[item[0]].cost
                     });
                     console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
                     resolve([order, total]);
                   } else {
                     reject(`The order could not be completed because some items are sold out.`);
                   }     
                }, generateRandomDelay());
                 });
                };                
                // expects an array argument with the order as the first element and the purchase total as the second.
                const processPayment = (responseArray) => {
                  const order = responseArray[0];
                  const total = responseArray[1];
                  return new Promise ((resolve, reject) => {
                   setTimeout(()=> {  
                   let hasEnoughMoney = order.giftcardBalance >= total;
                   // For simplicity we've omited a lot of functionality
                   // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
                   if (hasEnoughMoney) {
                     console.log(`Payment processed with giftcard. Generating shipping label.`);
                     let trackingNum = generateTrackingNumber();
                     resolve([order, trackingNum]);
                   } else {
                     reject(`Cannot process order: giftcard balance was insufficient.`);
                   }
                   
                }, generateRandomDelay());
                 });
                };   
                // expects an array argument with the order as the first element and a tracking number as the second.
                const shipOrder = (responseArray) => {
                  const order = responseArray[0];
                  const trackingNum = responseArray[1];
                  return new Promise ((resolve, reject) => {
                   setTimeout(()=> {  
                     resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
                }, generateRandomDelay());
                 });
                };
                // This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
                function generateTrackingNumber() {
                  return Math.floor(Math.random() * 1000000);
                }                
                // This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
                function generateRandomDelay() {
                  return Math.floor(Math.random() * 2000);
                }                
                module.exports = {checkInventory, processPayment, shipOrder};

                // APP.JS
                const {checkInventory, processPayment, shipOrder} = require('./library.js');
                const order = {
                  items: [['sunglasses', 1], ['bags', 2]],
                  giftcardBalance: 79.82
                };                
                checkInventory(order)
                .then((resolvedValueArray) => {
                  // Write the correct return statement here:
                 return processPayment(resolvedValueArray);
                })
                .then((resolvedValueArray) => {
                  // Write the correct return statement here:
                  return shipOrder(resolvedValueArray);
                })
                .then((successMessage) => {
                  console.log(successMessage);
                })
                .catch((errorMessage) => {
                  console.log(errorMessage);
                });

          // Avoiding Common Mistakes
              // Mistake 1: Nesting promises instead of chaining them.
              // Mistake 2: Forgetting to return a promise.

          // Using Promise.all()
                // accepts an array of promises as its argument and returns a single promise. 
                // That single promise will settle in one of two ways:
                  // If every promise in the argument array resolves, the single promise returned from Promise.all() will 
                  // resolve with an array containing the resolve value from each promise in the argument array.
                  // If any promise from the argument array rejects, the single promise returned from Promise.all() will 
                  // immediately reject with the reason that promise rejected. This behavior is sometimes referred to as failing fast.
                // EXAMPLE
                // We declare myPromises assigned to invoking Promise.all().
                let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]); // We invoke Promise.all() with an array of three promises— the returned values from functions.
                myPromises
                  .then((arrayOfValues) => { // We invoke .then() with a success handler which will print the array of resolved values if each promise resolves successfully.
                    console.log(arrayOfValues);
                  })
                  .catch((rejectionReason) => { // We invoke .catch() with a failure handler which will print the first rejection message if any promise rejects.
                    console.log(rejectionReason);
                  });

              // WORKING EXAMPLE
                  // LIBRARY.JS
                  const checkAvailability = (itemName, distributorName) => { // expects two string arguments: an item and a distributor. It returns a promise. 
                    console.log(`Checking availability of ${itemName} at ${distributorName}...`);
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (restockSuccess()) {
                                console.log(`${itemName} are in stock at ${distributorName}`)
                                resolve(itemName);
                            } else {
                                reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
                            }
                        }, 1000);
                    });
                };                
                module.exports = { checkAvailability };      
                // This is a function that returns true 80% of the time
                // We're using it to simulate a request to the distributor being successful this often
                function restockSuccess() {
                    return (Math.random() > .2);
                }
                // APP.JS
                const {checkAvailability} = require('./library.js');
                const onFulfill = (itemsArray) => {
                  console.log(`Items checked: ${itemsArray}`);
                  console.log(`Every item was available from the distributor. Placing order now.`);
                };                
                const onReject = (rejectionReason) => {
                  console.log(rejectionReason);
                };                
                let checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
                let checkPants = checkAvailability('pants', 'Favorite Supply Co.');
                let checkBags = checkAvailability('bags', 'Favorite Supply Co.');                
                const promArr = [checkSunglasses, checkPants, checkBags];                
                Promise.all(promArr).then(onFulfill).catch(onReject);
                // Bash output
                  /* 
                  Checking availability of sunglasses at Favorite Supply Co....
                  Checking availability of pants at Favorite Supply Co....
                  Checking availability of bags at Favorite Supply Co....
                  sunglasses are in stock at Favorite Supply Co.
                  pants are in stock at Favorite Supply Co.
                  bags are in stock at Favorite Supply Co.
                  Items checked: sunglasses,pants,bags
                  Every item was available from the distributor. Placing order now.
                  */

          /*
          Review
            Awesome job! Promises are a difficult concept even for experienced developers, so pat yourself on the back. You’ve learned a ton about asynchronous JavaScript and promises. Let’s review:

            Promises are JavaScript objects that represent the eventual result of an asynchronous operation.
            Promises can be in one of three states: pending, resolved, or rejected.
            A promise is settled if it is either resolved or rejected.
            We construct a promise by using the new keyword and passing an executor function to the Promise constructor method.
            setTimeout() is a Node function which delays the execution of a callback function using the event-loop.
            We use .then() with a success handler callback containing the logic for what should happen if a promise resolves.
            We use .catch() with a failure handler callback containing the logic for what should happen if a promise rejects.
            Promise composition enables us to write complex, asynchronous code that’s still readable. We do this by chaining multiple .then()‘s and .catch()‘s.
            To use promise composition correctly, we have to remember to return promises constructed within a .then().
            We should chain multiple promises rather than nesting them.
            To take advantage of concurrency, we can use Promise.all().
          */
            


                

                

              


   
          