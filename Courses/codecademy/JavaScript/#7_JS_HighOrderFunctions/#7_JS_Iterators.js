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
