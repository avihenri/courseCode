// CODE CHALLENGES: INTERMEDIATE JAVASCRIPT
    // Introduction
    // In the exercises that follow, you will practice and reinforce your understanding of JavaScript scope, 
    // arrays, loops, iterators, and objects. We encourage you to review the relevant lessons, look things up 
    // in the mdn documentation, check out the hints and solution code if you get stuck, and, most of all, have fun!

    // reverseArray()
        // Instructions
        //     1.
        //     Write a function, reverseArray(), that takes in an array as an argument and returns a new array with 
        //     the elements in the reverse order.
            
        //     There's a built-in method that does a lot of this work for you, but here you're not allowed to use it. 
        //     Don't worry you'll have plenty of opportunities to use built-in methods later on!
        // Write your code here:
            const reverseArray = reverse => {
                let reverseArr = []
                for (let i = reverse.length - 1; i >= 0; i--) {    
                reverseArr.push(reverse[i]);
                }
                return reverseArr;  
            } 
            
            // When you're ready to test your code, uncomment the below and run:
            const sentence = ['sense.','make', 'all', 'will', 'This'];            
            
            // Should print ['This', 'will', 'all', 'make', 'sense.'];
            console.log(reverseArray(sentence)) 
            
        // greetAliens()
            // Instructions
            //     1.
            //     Write a function, greetAliens(), that takes in an array of strings and uses a for loop 
            //     to print a greeting with each string in the array.

            //     The greeting should take the following format:
                // "Oh powerful [stringElement], we humans offer our unconditional surrender!"
                // Write your code here:
                const greetAliens = input => {
                    for (let i = 0; i < input.length; i++) {
                    console.log(`Oh powerful ${input[i]}, we humans offer our unconditional surrender!`);
                    }
                } 
                
                // When you're ready to test your code, uncomment the below and run:  
                const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];  
                greetAliens(aliens);

        // convertToBaby()
            // Instructions
            //     1.
            //     Write a function, convertToBaby(), that takes in an array as an argument and,
            //     using a loop, returns a new array with each string in the array prepended with 'baby '.
                    // Write your code here:
                const convertToBaby = input => {
                    let babyArr = []
                    for (i = 0; i < input.length; i++) {
                    babyArr.push(`baby ${input[i]}`);
                    }
                    return babyArr;
                }              
                
                // When you're ready to test your code, uncomment the below and run:                
                const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];                
                console.log(convertToBaby(animals)) 
                // [ 'baby panda',
                // 'baby turtle',
                // 'baby giraffe',
                // 'baby hippo',
                // 'baby sloth',
                // 'baby human' ]
  
        // declineEverything() and acceptEverything()
                // Instructions
                //         1.
                //         Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through 
                //         each element in the array and calls politelyDecline() with each of them.

                //         You can test your function when you're ready by passing in the veggies array or by making your own array!

                //         2.
                //         Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and loops 
                //         through each element in the array and grudgingly accepts each of them, by logging to the console in the 
                //         following format: 'Ok, I guess I will eat some [element].'

                //         You can use any technique you want to accomplish this task. You can test your function

                const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

                const politelyDecline = (veg) => {
                    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
                }

                // Write your code here:
                const declineEverything = inputArr => {
                inputArr.forEach(politelyDecline);
                } 

                const acceptEverything = arr => {
                arr.forEach(function(item) {
                    console.log(`Ok, I guess I will eat some ${item}.`);
                })
                }
                console.log(acceptEverything(veggies));

        // squareNums()
                // Instructions
                //         1.
                //         Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array 
                //         with the square of each of the elements of that array.
                        
                //         You can test your function when you're ready by passing in the numbers array or by making your own array!

                const numbers = [2, 7, 9, 171, 52, 33, 14]
                const toSquare = num => num * num
                
                // Write your code here:
                const squareNums = arr => {
                  return arr.map(toSquare);
                };                
                console.log(squareNums(numbers));
                // [ 4, 49, 81, 29241, 2704, 1089, 196 ]

        // shoutGreetings()
                // Instructions
                //     1.
                //     Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should 
                //     contain all the strings from the argument array but with capitalized letters and an exclamation point appended to 
                //     the end: 'heya' will become 'HEYA!'
                    
                //     You can use any technique you want to accomplish this task.
                    
                //     You can test your function when you're ready by passing in the greetings array or by making your own array!

                const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

                    /*
                    // As a function declaration AND using a loop:
                    function shoutGreetings(arr) {
                        let shoutArray = []
                        for(let i = 0; i<arr.length; i++){
                            shoutArray.push(arr[i].toUpperCase() + '!')
                        }
                        return shoutArray
                    }
                    */
                    const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']

                    console.log(shoutGreetings(greetings))
                    // OUTPUT - [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]


               // sortYears()
                /*    Instructions
                    1.
                    Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns 
                    that array with the years sorted in descending order.

                    You can test your function when you’re ready by passing in the years array or by making your own array of years!
                    */
                   const sortYears = arr => arr.sort(function(a, b){return b-a});                   
                   const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]                   
                   console.log(sortYears(years))

                // justCoolStuff()
                    /*   Instructions
                        1.
                        Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.
                        
                        let arr1 = ['this', 'not this', 'nor this'];
                        let arr2 = ['thing 1', 'thing 2', 'this'];
                        
                        justCoolStuff(arr1, arr2); // Should return ['this'] 
                        You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of your own!
                    */

                   function justCoolStuff(arr1, arr2) {
                    return arr1.filter(item => arr2.includes(item));
                  }
                  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
                  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
                  console.log(justCoolStuff(myStuff, coolStuff)) // output: [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
                  
                // isTheDinnerVegan()
                   /* Instructions
                    1.
                    Write a function isTheDinnerVegan() that takes in an array of food objects in the format:
                    {name: 'cabbage', source: 'plant' }
                    and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.
                    const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
                    isTheDinnerVegan(meal); // Should return true
                    You can test your function when you’re ready by passing in the dinner array or by making your own!           */          
                    const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');                  
               
                    // const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
                    // console.log(dinner.every(isTheDinnerVegan));
                    // // Should print false                    
                    const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];                    
                    console.log(isTheDinnerVegan(meal));

                  //  sortSpeciesByTeeth()
                      /*  Instructions
                        1.
                        Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:
                        {speciesName: 'shark', numTeeth: 50 }
                        and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .
                        You’ll need to access each object’s .numTeeth property. Feel free to either write a named comparison function, or use an anonymous function for your argument to .sort().
                        You can test your function when you’re ready by passing in the speciesArray array or by making your own! */

                        const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

                        const sortSpeciesByTeeth = arr => {
                        arr.sort((a,b) => {return a.numTeeth - b.numTeeth});
                        return arr;
                        }
                        /* output
                            [ { speciesName: 'human', numTeeth: 32 },
                                { speciesName: 'dog', numTeeth: 42 },
                                { speciesName: 'shark', numTeeth: 50 },
                                { speciesName: 'alligator', numTeeth: 80 } ]
                        */

                   // findMyKeys()
                      /* Instructions
                       1.
                       Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your 
                       function should return the index at which they can be found. If they’re not in the array, your function should return -1.                       
                       const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
                       findMyKeys(drawer);
                       // Should return -1
                       You can use any technique you want to accomplish this task. Though, if you look, there’s a built-in method that will make pretty quick work of it.                       
                       You can test your function when you’re ready by passing in the randomStuff array or by making your own array! */

                       const findMyKeys = arr => arr.findIndex(item => item === 'keys');
                       const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
                        console.log(findMyKeys(randomStuff))
                        // Should print 4

                    // dogFactory()
                        /*Instructions
                        1.
                        Write a function, dogFactory(). It should:                        
                        have 3 parameters: name, breed, and weight (in that order)
                        expect name and breed to be strings
                        expect weight to be a number
                        return an object
                        have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in */

                        // to return an object, do the following..
                        const dogFactory = (name, breed, weight) => {
                            return {
                                name: name,
                                breed: breed,
                                weight: weight        
                            }
                        }

                        // Answer:
                        const dogFactory = (name, breed, weight) => {
                            return {
                                _name: name,
                                _breed: breed,
                                _weight: weight,        
                            get name() {
                            return  this._name;
                            },
                            set name(newName) {
                            return  this._name = newName;
                            },
                            get breed() {
                            return this._breed;
                            
                            },
                            set breed(newBreed) {
                            return  this._breed = newBreed;
                            }, 
                            get weight() {
                            return this._weight;
                            },
                            set weight(newWeight) {
                            return  this._weight = newWeight;
                            }, 
                            bark(){
                                return 'ruff! ruff!';
                            },
                            eatTooManyTreats() {
                                return this._weight++;
                            }
                            } 
                        }
