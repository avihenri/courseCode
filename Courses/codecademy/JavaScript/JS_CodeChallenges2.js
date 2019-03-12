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
  