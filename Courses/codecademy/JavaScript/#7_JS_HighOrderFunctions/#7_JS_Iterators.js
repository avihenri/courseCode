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

            // The .reduce() Method
                  
                  

