// ASYNC AWAIT

// The async Keyword - used t write functions that handle async actions
    // wrap async logic in func prepended with async
    // invoke func
    // EXAMPLE:
    async function myFunc() {
        // Function body here
      };      
      myFunc();
      //OR 
      const myFunc = async () => {
        // Function body here
      };      
      myFunc();
      // async func returns a promise
      //  we can use then(), catch()
        // if nothing returned = returns promise with resolved & value undefined
        // if non-promise value returned = returns a promise resolved to that value
        // if promise returned = it returns a promise
        // EXAMPLE:
        async function fivePromise() { 
            return 5;
          }          
          fivePromise()
          .then(resolvedValue => {
              console.log(resolvedValue);
            })  // Prints 5

    // WORKING EXAMPLE
        // FUNC
        function withConstructor(num){
            return new Promise((resolve, reject) => {
            if (num === 0){
                resolve('zero');
            } else {
                resolve('not zero');
            }
            })
        }      
        withConstructor(0)
            .then((resolveValue) => {
            console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
        })
        // ASYNC
        async function withAsync(num) {  
            if (num === 0){
                 return 'zero';
               } else {
                 return 'not zero';
               }
           }
           withAsync(100)
             .then((resolveValue) => {
             console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
           })

    // The await Operator
           // CAN ONLY BE USED INSIDE ASYNC
           // await = operator - returns the resolved value of a promise
            // waits, holds or pauses execution until given promise is resolved
            // EXAMPLE:
            async function asyncFuncExample(){
                let resolvedValue = await myPromise();
                console.log(resolvedValue);
              }
              // we use await to halt our execution until myPromise() is resolved and assign its resolved value to the variable resolvedValue. 
              // Then we log resolvedValue to the console.
              asyncFuncExample(); // Prints: I am resolved now!

        // WORKING EXAMPLE
        // library.js
        const brainstormDinner = () => {
            return new Promise((resolve, reject) => {
            console.log(`I have to decide what's for dinner...`)
            setTimeout(() => {
              console.log('Should I make salad...?')
              setTimeout(() => {
                console.log('Should I make ramen...?')
                setTimeout(() => {
                  console.log('Should I make eggs...?')
                  setTimeout(() => {
                    console.log('Should I make chicken...?')
                    resolve('beans')
                  }, 1000)
                }, 1000)
              }, 1000)
            }, 1000)
          })
          }
          
          module.exports = brainstormDinner
          
          // app.js
        const brainstormDinner = require('./library.js')
        // Native promise version:
        function nativePromiseDinner() {
          brainstormDinner().then((meal) => {
              console.log(`I'm going to make ${meal} for dinner.`);
          })
        } 
        // async/await version:
        async function announceDinner() {
          // Write your code below:
          let meal = await brainstormDinner();
          console.log(`I'm going to make ${meal} for dinner.`);  
        }
        announceDinner();

        /* OUTPUT: with a sec delay between each
        I have to decide what's for dinner...
        Should I make salad...?
        Should I make ramen...?
        Should I make eggs...?
        Should I make chicken...?
        I'm going to make beans for dinner
        */

    // Writing async Functions
        // We’re going to explore this using the following function, which returns a promise that resolves to 'Yay, I resolved!' after a 1 second delay:
        let myPromise = () => {
            return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Yay, I resolved!')
            }, 1000);
            });
        }
        // Now we’ll write two async functions which invoke myPromise():
        async function noAwait() {
         let value = myPromise(); // Without the await keyword, the function execution wasn’t paused. 
         console.log(value); // executed before the promise had resolved.
        }        
        async function yesAwait() {
         let value = await myPromise();
         console.log(value);
        }        
        noAwait(); // Prints: Promise { <pending> }
        yesAwait(); // Prints: Yay, I resolved!
        /*
        When used properly in yesAwait(), the variable value was assigned the resolved value of the myPromise() promise,
         whereas in noAwait(), value was assigned the promise object itself.
         */

        // WORKING EXAMPLE:
                // LIBRARY.JS
                const shopForBeans = () => {
                    return new Promise((resolve, reject) => {
                      const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
                    setTimeout(()=>{
                      let randomIndex = Math.floor(Math.random() * 5)
                      let beanType = beanTypes[randomIndex];
                      console.log(`2. I bought ${beanType} beans because they were on sale.`)
                     resolve(beanType);
                    }, 1000)
                  })
                  }                    
                  module.exports = shopForBeans
                // APP.JS
                // async & await were missing so the console log 3 was logging before 2
                const shopForBeans = require('./library.js');
                async function getBeans() {
                  console.log(`1. Heading to the store to buy beans...`);
                  let value = await shopForBeans();
                  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
                }                
                getBeans();

    // Handling Dependent Promises
        // chaining .then()
        function nativePromiseVersion() {
            // we use two functions which return promises: returnsFirstPromise() and returnsSecondPromise().
            returnsFirstPromise() // returnsFirstPromise() and ensure that the first promise resolved by using .then().
            .then((firstValue) => {
                // we log the resolved value of the first promise, firstValue, and then return returnsSecondPromise(firstValue).
                console.log(firstValue);
                return returnsSecondPromise(firstValue);
            })
            // We use another .then() to print the second promise’s resolved value to the console.
           .then((secondValue) => {
                console.log(secondValue);
            });
        }
        // Here’s how we’d write an async function to accomplish the same thing:
        async function asyncAwaitVersion() { // We mark our function as async.
            // we create a variable firstValue assigned await returnsFirstPromise(). 
            // This means firstValue is assigned the resolved value of the awaited promise.
            let firstValue = await returnsFirstPromise();
            console.log(firstValue); // we log firstValue to the console.
            // we create a variable secondValue assigned to await returnsSecondPromise(firstValue). 
            // Therefore, secondValue is assigned this promise’s resolved value.
            let secondValue = await returnsSecondPromise(firstValue);
            // we log secondValue to the console.
            console.log(secondValue);
           }

        // WORKING EXAMPLE:
        // library.js
        const shopForBeans = () => {
            return new Promise((resolve, reject) => {
              const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
            setTimeout(()=>{
              let randomIndex = Math.floor(Math.random() * 5)
              let beanType = beanTypes[randomIndex];
              console.log(`I bought ${beanType} beans because they were on sale.`)
             resolve(beanType);
            }, 1000)
          })
          }          
          let soakTheBeans = (beanType) => {
             return new Promise((resolve, reject) => {
               console.log('Time to soak the beans.')
              setTimeout(()=>{
                console.log(`... The ${beanType} beans are softened.`)
                resolve(true)
                }, 1000)
            })
          }          
          let cookTheBeans = (isSoftened) => {
            return new Promise((resolve, reject) => {
              console.log('Time to cook the beans.')
              setTimeout(()=>{
                if (isSoftened) {
                  console.log('... The beans are cooked!') 
                  resolve('\n\nDinner is served!')
                }
              }, 1000)
            })
          }                     
          module.exports = {shopForBeans, soakTheBeans, cookTheBeans} 
          // app.js
          const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');
          async function makeBeans() {
            let type = await shopForBeans();
            let isSoft = await soakTheBeans(type);
            let dinner = await cookTheBeans(isSoft);
            console.log(dinner);
          }
          makeBeans();
          /* OUTPUT: 
          I bought kidney beans because they were on sale.
          Time to soak the beans.
          ... The kidney beans are softened.
          Time to cook the beans.
          ... The beans are cooked!


          Dinner is served!
          */

    // Handling Errors
          // when using .catch() these no way of teeling where the error is
          // for this we use try....catch
            // catches sync & async errors
                // EXAMPLE:
                async function usingTryCatch() {
                    try {
                      let resolveValue = await asyncFunction('thing that will fail');
                      let secondValue = await secondAsyncFunction(resolveValue);
                    } catch (err) {
                      // Catches any errors in the try block
                      console.log(err);
                    }
                   }                   
                   usingTryCatch();
                   // Remember, since async functions return promises we can still use native promise’s .catch() with an async function
                   async function usingPromiseCatch() {
                    let resolveValue = await asyncFunction('thing that will fail');
                    }
                    
                    let rejectedPromise = usingPromiseCatch();
                    rejectedPromise.catch((rejectValue) => {
                    console.log(rejectValue);
                    })
            // WORKING EXAMPLE
                    // Library.js
                    let randomSuccess = () => {
                        let num = Math.random();
                        if (num < .5 ){
                          return true;
                        } else {
                          return false;
                        }
                       };
                       //This function returns a promise that resolves half of the time and rejects half of the time
                       let cookBeanSouffle = () => {
                        return new Promise((resolve, reject) => {
                          console.log('Fingers crossed... Putting the Bean Souffle in the oven');
                          setTimeout(()=>{
                            let success = randomSuccess();
                            if(success){
                              resolve('Bean Souffle');
                            } else {
                              reject('Dinner is ruined!');
                            }
                          }, 1000);
                        })
                       };
                       module.exports = cookBeanSouffle;
                       // app.js
                       const cookBeanSouffle = require('./library.js');
                       async function hostDinnerParty() {
                         try {
                           let dinner = await cookBeanSouffle();
                           console.log(`${dinner} is served!`);
                         } catch (error){
                           console.log(error);
                           console.log('Ordering a pizza!');
                         }
                       }
                       hostDinnerParty() 

    // Handling Independent Promises
        // which are not dependent on the results of one another to execute?
        // EXAMPLE:

        /*In the waiting() function, we pause our function until 
        the first promise resolves, then we construct the second promise. 
        Once that resolves, we print both resolved values to the console. */
        async function waiting() {
            const firstValue = await firstAsyncThing();
            const secondValue = await secondAsyncThing();
            console.log(firstValue, secondValue);
           }        
           /* In our concurrent() function, both promises are constructed 
           without using await. We then await each of their resolutions to 
           print them to the console. */   
           async function concurrent() {
            const firstPromise = firstAsyncThing();
            const secondPromise = secondAsyncThing();
           console.log(await firstPromise, await secondPromise);
           }

           /* Note: if we have multiple truly independent promises that we would like to execute fully in parallel, 
           we must use individual .then() functions and avoid halting our execution with await. */

           // WORKING EXAMPLE:
           // LIBRARY.JS
           let cookBeans = () => {
            return new Promise ((resolve, reject) => {
             setTimeout(()=>{
               resolve('beans')
             }, 1000)
           })
          }          
          let steamBroccoli = () => {
           return new Promise ((resolve, reject) => {
             setTimeout(()=>{
               resolve('broccoli')
             }, 1000)
           })
          }          
          let cookRice = () => {
           return new Promise ((resolve, reject) => {
             setTimeout(()=>{
               resolve('rice')
             }, 1000)
           })
          }          
          let bakeChicken = () => {
           return new Promise ((resolve, reject) => {
             setTimeout(()=>{
               resolve('chicken')
             }, 1000)
           })
          }          
          module.exports = {cookBeans, steamBroccoli, cookRice, bakeChicken}
          // APP.JS
          let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')          
          async function serveDinner() {
            const vegetablePromise = steamBroccoli();
            const starchPromise = cookRice();
            const proteinPromise = bakeChicken();
            const sidePromise = cookBeans();
            console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await  proteinPromise}, and ${await sidePromise}.` )
          }          
          serveDinner()

    // Await Promise.all()
          // concurrency when we have multiple promises which can be executed simultaneously is to await a Promise.all().
          // can pass an array of promises as the argument to Promise.all(), and it will return a single promise.
          // this promise will resolve when all have resolved - as an array of all
            // EXAMPLE:
            async function asyncPromAll() {
                const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
                for (let i = 0; i<resultArray.length; i++){
                  console.log(resultArray[i]); 
                }
              }

        // WORKING EXAMLE:
              // SAME AS LAST BUT WITH PROMISE.ALL
              async function serveDinnerAgain() {
                let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
                let vegetable = foodArray[0];
                let starch =  foodArray[1];
                let protein =  foodArray[2];
                let side =  foodArray[3];
                console.log(`Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`);
              }
              serveDinnerAgain()

    /*
    Review
    Awesome work getting the hang of the async...await syntax! Let’s review what you’ve learned:

    async...await is syntactic sugar built on native JavaScript promises and generators.
    We declare an async function with the keyword async.
    Inside an async function we use the await operator to pause execution of our function until an asynchronous action completes and the awaited promise is no longer pending .
    await returns the resolved value of the awaited promise.
    We can write multiple await statements to produce code that reads like synchronous code.
    We use try...catch statements within our async functions for error handling.
    We should still take advantage of concurrency by writing async functions that allow asynchronous actions to happen in concurrently whenever possible.
    */








