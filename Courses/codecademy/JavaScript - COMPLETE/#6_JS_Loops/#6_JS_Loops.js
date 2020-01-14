// LOOPS

    // Tool that reapeats a set of instructions until specified condtion = stopping condition
    // Iterate = to repeat


    // FOR LOOP
        // Typical for loop: iterator variable initialised, checked agaisnt condition, assigned new value
        // Contains 3 expressions - 1. initalization (starts loop) ; 2. Stopping condition ; 3. iteration statement (updates iterator var)
        for (let counter = 0; counter < 4; counter++) {
            console.log(counter); // Output: 0  1  2  3
          }
          // Initilization: let counter =0;
          // Stopping conditions: counter < 4;
          // Iteration statement: counter++

          for (let i = 5; i < 11; i++){
            console.log(i); // Output: 5  6  7  8  9  10
            }

        // Loop in reverse
        for (let counter = 3; counter >= 0; counter--){
            console.log(counter); // Output: 3  2  1  0
          }
          
        // Example of Array iteration
        for (let i = 0; i < vacationSpots.length; i++){
            console.log('I would like to visit ' + vacationSpots[i]);
        }

        // Nested Loops
            // Useful for comparing two arrays
            // Each round of the outer loop the inner loop will run completely
            const myArray = [6, 19, 20];
            const yourArray = [19, 81, 2];
            for (let i = 0; i < myArray.length; i++) {
              for (let j = 0; j < yourArray.length; j++) {
                if (myArray[i] === yourArray[j]) {
                  console.log('Both loops have the number: ' + yourArray[j])
                }
              }
            };

            // Another example
                // Write your code below
            let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
            let tinasFollowers = ['Sam', 'Marta', 'Elle'];
            let mutualFollowers = [];

            for (let i = 0; i < bobsFollowers.length; i++) {
            for (let j = 0; j < tinasFollowers.length; j++) {
                if (bobsFollowers[i] === tinasFollowers[j]) {
                mutualFollowers.push(bobsFollowers[i]);
                }
            }
            };
            console.log(mutualFollowers); // [ 'Marta', 'Sam' ]


        // WHILE LOOP
            // Good for when you don't know how long it will take to run
            const cards = ['diamond', 'spade', 'heart', 'club'];

            let currentCard;
            
            while (currentCard !== 'spade') {
              currentCard = cards[Math.floor(Math.random() * 4)];
              console.log(currentCard);
            }
            

        // Do.... while 
            let countString = '';
            let i = 0;
            
            do {
            countString = countString + i; // appends i to countString & runs as long as true
            i++; 
            } while (i < 5); // Do block will stop once false
            
            console.log(countString);


            // Example 2
            let cupsOfSugarNeeded = 3;
            let cupsAdded = 0;

            do {
            cupsAdded++ // increments while cupsAdded is less than CupsOfSugarNeeded
            } while (cupsAdded < cupsOfSugarNeeded);

        // break keyword - “break” out of the loop from within the loop's block.
            for (let i = 0; i < 99; i++) {
              if (i > 2 ) {
                break;
              }
              console.log('Banana.');
            }            
            console.log('Orange you glad I broke out the loop!');   
            // Output: Banana. Banana. Banana.  Orange you glad I broke out the loop! 
            
            
            // Example 2
            
            const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

            for (let i = 0; i < rapperArray.length; i++){
              if (i < rapperArray.length)
                console.log(rapperArray[i]);
              if (i === 2) {
                break;
              }
            }
            console.log("And if you don't know, now you know.");
            // Output: Lil' Kim Jay-Z Notorious B.I.G. And if you don't know, now you know.

/*

Review
Great job! In this lesson, we learned how to write cleaner code with loops. You now know:

Loops perform repetitive actions so we don’t have to code that process manually every time.
How to write for loops with an iterator variable that increments or decrements
How to use a for loop to iterate through an array
A nested for loop is a loop inside another loop
while loops allow for different types of stopping conditions
Stopping conditions are crucial for avoiding infinite loops.
do...while loops run code at least once— only checking the stopping condition after the first execution
The break keyword allows programs to leave a loop during the execution of its block

*/