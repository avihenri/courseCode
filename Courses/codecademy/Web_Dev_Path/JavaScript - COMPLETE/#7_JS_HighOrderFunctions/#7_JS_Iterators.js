// ITERATORS
        // Introduction to Iterators
            // iteration methods = built-in JS array methods
                // .foreach() , .map() , .filter()

            // The .forEach() Method (The return value for .forEach() will always be undefined.)
                // can callback 3 different ways:
                const groceries = ['banana', 'jam', 'apples', 'chocolate'];
                // 1st - FUNC EXPRESSION
                groceries.forEach(function(groceryItem) { 
                    console.log(' - ' + groceryItem);
                });
                // 2nd - ARROW FUNC
                groceries.forEach(groceryItem => console.log(groceryItem));
                // 3rd - define func beforehand
                function printGrocery(element){
                    console.log(element);
                  }                  
                  groceries.forEach(printGrocery);
               
                  // Another Example
                    const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
                    // Iterate over fruits below
                    fruits.forEach(groceryItem => console.log(`I want to eat a ${groceryItem}`));
                    // I want to eat a mango
                    // I want to eat a papaya
                    // I want to eat a pineapple
                    // I want to eat a apple

            // The .map() Method
                  // Takes an argument of a callback func & returns a new array
                  const numbers = [1, 2, 3, 4, 5]; 

                  const bigNumbers = numbers.map(number => {
                    return number * 10;
                  })
                  console.log(numbers); // Output: [1, 2, 3, 4, 5]
                  console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

                  //Another example
                  const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
                  // Create the secretMessage array below
                  const secretMessage = animals.map(animals => animals[0]); // HellowWorld
                  console.log(animals[0]); // Hen

                  // Another example
                  const bigNumbers = [100, 200, 300, 400, 500];
                  const smallNumbers = bigNumbers.map(bigNumbers => bigNumbers / 100);
                  console.log(smallNumbers); // [ 1, 2, 3, 4, 5 ]
            
            
            // The .filter() Method
                  // like .map but it returns a new array according to a condition that = true or false
                  const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

                  const shortWords = words.filter(word => {
                    return word.length < 6;
                  });

                  console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
                  console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']

                  const randomNumbers = [375, 200, 3.14, 7, 13, 852];
                  // Call .filter() on randomNumbers below
                  const smallNumbers = randomNumbers.filter(number => {
                        return number < 250;
                   })
                                   
                  
                  const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
                  // Call .filter() on favoriteWords below
                  const longFavoriteWords = favoriteWords.filter(word => {
                    return word.length > 7;
                  })
                  
            
            // The .findIndex() Method
                  // finds the location of an element in an array
                  // returns the index of the first item that evaluated to true
                  const jumbledNums = [123, 25, 78, 5, 9]; 
                  const lessThanTen = jumbledNums.findIndex(num => {
                    return num < 10;
                  });
                  console.log(lessThanTen); // Output: 3 
                  console.log(jumbledNums[3]); // Output: 5

                  const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
                  const foundAnimal = animals.findIndex(index => {
                    return index === 'elephant';
                  })       
                  const startsWithS = animals.findIndex(index => {
                    return index[0] === 's';
                  })

            // The .reduce() Method - returns a single value after iterating through an array
            const numbers = [1, 2, 4, 10];
            const summedNums = numbers.reduce((accumulator, currentValue) => {
              return accumulator + currentValue            })            
            console.log(summedNums) // Output: 17              
              // accumlator takes value of 1st element 1 | 3 | 7 
              // currentValue starts as 2nd element 2 | 4 | 10
              // return value as it iterates 1 + 2 = 3 | 3 + 4 = 7 | 7 + 10 = 17

              // .reduce() can take a 2nd parameter to set the first arguement -
              const numbers = [1, 2, 4, 10];

              const summedNums = numbers.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
              }, 100)  // <- Second argument for .reduce()
              
              console.log(summedNums); // Output: 117
              // 100 | 101 | 103 | 107
              // 1   | 2   | 4   | 10
              // 101 | 103 | 107 | 117

              const newNumbers = [1, 3, 5, 7];
              const newSum = newNumbers.reduce((accumulator, currentValue) => {  
                console.log('The value of accumulator: ', accumulator);
                console.log('The value of currentValue: ', currentValue);
                return accumulator + currentValue;
              }, 10)              
              console.log(newSum);
                // The value of accumulator:  10
                // The value of currentValue:  1
                // The value of accumulator:  11
                // The value of currentValue:  3
                // The value of accumulator:  14
                // The value of currentValue:  5
                // The value of accumulator:  19
                // The value of currentValue:  7
                // 26

            
            const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
            // .some()            
            console.log(words.some((word) => {
              return word.length < 6;
            }));
            // .filter() to create a new array
            const interestingWords = words.filter(word => {
              return word.length > 5;
            })
            // .every() - check if true
            console.log(interestingWords.every((word) => {
              return word.length > 5;
             }));
                        

// Review
// Awesome job on clearing the iterators lesson! You have learned a number of useful methods in this lesson as well as how to use the JavaScript documentation from the Mozilla Developer Network to discover and understand additional methods. Let's review!

// .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
// .map() executes the same code on every element in an array and returns a new array with the updated elements.
// .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
// .findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
// .reduce() iterates through an array and takes the values of the elements and returns a single value.
// All iterator methods takes a callback function that can be pre-defined, or a function expression, or an arrow function.
// You can visit the Mozilla Developer Network to learn more about iterator methods (and all other parts of JavaScript!).

// CHALLENGE 
      // Instructions
      // If you want to challenge yourself:

      // Define a callback function before you use it in a iterator.
      // Chain two iteration methods on the same array.
      // Use the optional arguments in an iterator to include the index or the entire array. 
      // (Check out MDN's Array iteration methods page for more information)
      // Use .reduce() to take a multi-layered array and return a single layer array from scratch.

      
      let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

// To get individual words in a single string
const indWords = story.split(' ');
//console.log(indWords);

// Log how many words in a string
//console.log(indWords.length);

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
// filter out unnecessary words
let betterWords = indWords.filter(function(words) {
  return !unnecessaryWords.includes(words)
})
//console.log(betterWords);

let overusedWords = ['really', 'very', 'basically'];
// alert how many times overusedWords have been used
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (word of indWords) {
  if (word === overusedWords[0]) {
    reallyCount += 1;
  } else if (word === overusedWords[1]) {
    veryCount += 1;
  } else if (word === overusedWords[2]) {
    basicallyCount += 1;
  }
}
console.log('Really Count: ' + reallyCount);
console.log('Very Count: ' + veryCount);
console.log('Bascially Count: ' + basicallyCount);
