// ARRAYS

    // Creating an array = array literal - wrapped around []
        // can hold all the same data types or can hold different types
        // can save an array to a variable
            const hobbies = ['Women', 'who', 'code'];
            console.log(hobbies); // Output: [ 'Women', 'who', 'code' ]

    // Accessing Elements
        // Each element in an array has a numbered position = index
        // Starts at 0
            const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

            const listItem = famousSayings[0];
            console.log(listItem);
            // or
            console.log(famousSayings[2]);
            // beyond last element
            console.log(famousSayings[3]); // Output: undefined

    // Update Elements
            let groceryList = ['bread', 'tomatoes', 'milk'];
            groceryList[1] = 'avocados'; // changes second element

    // Arrays with let & const
        // Const array - can change array elements but not to a new array
            let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

            const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
            
            condiments[0] = 'Mayo';
            console.log(condiments);
            
            condiments = ['Mayo'];
            console.log(condiments);
            
            utensils[3] = 'Spoon';
            console.log(utensils);

            utensils = ['Spoon']; //  Uncaught TypeError: Assignment to constant variable. at <anonymous>:1:10
       
    // .length Property
        // Built in property of an array
        // Access with dot notation
            const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
            console.log(objectives.length); // 3

    // .push() Method
        // Adds items to the end of an Array
            const chores = ['wash dishes', 'do laundry', 'take out trash'];
            chores.push('Empty cat litter', 'Hoover');            
            console.log(chores);
            //  [ 'wash dishes',
            //   'do laundry',
            //   'take out trash',
            //   'Empty cat litter',
            //   'Hoover' ]

    // .pop() Method
        // Removes last item from an Array
        const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

        chores.pop();
        console.log(chores); // [ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ]

        // More Array Methods - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

    // More Method Examples

            const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

            console.log(groceryList);
                // [ 'orange juice',
                // 'bananas',
                // 'coffee beans',
                // 'brown rice',
                // 'pasta',
                // 'coconut oil',
                // 'plantains' ]


            groceryList.shift()
            console.log(groceryList);
                // [ 'bananas',
                // 'coffee beans',
                // 'brown rice',
                // 'pasta',
                // 'coconut oil',
                // 'plantains' ]
            
            groceryList.unshift('popcorn');
            console.log(groceryList);
                // [ 'popcorn',
                // 'bananas',
                // 'coffee beans',
                // 'brown rice',
                // 'pasta',
                // 'coconut oil',
                // 'plantains' ]
            
            console.log(groceryList.slice(1, 4));
                // [ 'bananas', 'coffee beans', 'brown rice' ]

            console.log(groceryList);
                // [ 'popcorn',
                // 'bananas',
                // 'coffee beans',
                // 'brown rice',
                // 'pasta',
                // 'coconut oil',
                // 'plantains' ]            
            
            const pastaIndex = groceryList.indexOf('pasta')
            console.log(pastaIndex); // 4

        // Another Example

            const concept = ['arrays', 'can', 'be', 'mutated'];

            function changeArr(arr){
            arr[3] = 'MUTATED';
            }

            changeArr(concept);
            console.log(concept);
            // [ 'arrays', 'can', 'be', 'MUTATED' ]

            function removeElement(newArr) {
            newArr.pop();
            }

            removeElement(concept);

            console.log(concept);
            // [ 'arrays', 'can', 'be' ]

        // Nested Arrays
            // Example 1    
            const nestedArr = [[1], [2, 3]];
            console.log(nestedArr[1]); // Output: [2, 3]
            console.log(nestedArr[1][0]); // Output: 2
            
            // Example 2           
            const numberClusters = [[1, 2], [3, 4], [5, 6]];
            const target = numberClusters[2][1];
            console.log(target); // Output: 6


// Review Arrays
    /*
    Nice work! In this lesson, we learned these concepts regarding arrays:

    Arrays are lists that store data in JavaScript.
    Arrays are created with brackets [].
    Each item inside of an array is at a numbered position, or index, starting at 0.
    We can access one item in an array using its index, with syntax like: myArray[0].
    We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
    Arrays have a length property, which allows you to see how many items are in an array.
    Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
    Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the 
    Mozilla Developer Network website.
    Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always 
    check the documentation.
    Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. 
    However, a variable declared with const cannot be reassigned.
    Arrays mutated inside of a function will keep that change even outside the function.
    Arrays can be nested inside other arrays.
    To access elements in nested arrays chain indices using bracket notation.
    Learning how to work with and manipulate arrays will help you work with chunks of data
    */
                    
