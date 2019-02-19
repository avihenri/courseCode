// CODE CHALLENGES 

    // Challenge 1 - canIVote()
        /*         
            Instructions
                1. The most common minimum age to vote is 18. Write a function canIVote() 
                that takes in a number, representing the person's age, and returns the 
                boolean true if they are 18 years old or older, and the boolean false 
                if they are not.
        */
        function canIVote(age) {
            if (age < 18) {
            return false;
            } else {
            return true;
            }
        }    
        console.log(canIVote(18)) // Should print true - yup


    // Challenge 2 - agreeOrDisagree()
        /*        
            Instructions
                1. Write a function, agreeOrDisagree(), that takes in two strings, and 
                returns 'You agree!' if the two strings are the same and 'You disagree!'
                if the two strings are different.
        */
        function agreeOrDisagree(string1, string2) {
            if (string1 === string2) {
            return 'You agree!';
            } else {
            return 'You disagree!';
            }
        }
        console.log(agreeOrDisagree("yep", "yep"))   // Should print 'You agree!' - yup



    // Challenge 3 - lifePhase()
        /*
            Instructions
                1. Write a function, lifePhase(), that takes in a person's age, 
                as a number, and returns which phase of life they are in.
                Here are the classifications:
                0-3 should return 'baby'
                4-12 should return 'child'
                13-19 should return 'teen'
                20-64 should return 'adult' 
                65-140 should return 'senior citizen'
                If the number is less than 0 or greater than 140, the program should return 
                'This is not a valid age' 
        */
        const lifePhase = age => {
            if (age < 0 || age > 140) {
                return 'This is not a valid age'
            } else if (age < 4) {
                return 'baby'
            } else if (age < 13) {
                return 'child'
            } else if (age < 20) {
                return 'teen'
            } else if (age < 65) {
                return 'adult'
            } else {
                return 'senior citizen'
            }
        }
        console.log(lifePhase(5)) // Child
            /*
            // As a function declaration:
            function lifePhase (age) {
                if (age < 0 || age > 140) {
                return 'This is not a valid age'
            } else if (age < 4) {
                    return 'baby'
                } else if (age < 13) {
                    return 'child'
                } else if (age < 20) {
                return 'teen'
                } else if (age < 65) {
                return 'adult'
                } else {
                    return 'senior citizen'
                }  
            }
            */ 



    // Challenge 4 - finalGrade()
        /*
            Instructions
            1. Write a function, finalGrade(). It should:
                take three arguments of type number
                find the average of those three numbers
                return the letter grade (as a string) that the average corresponds to
                return 'You have entered an invalid grade.' if any of the three grades are 
                less than 0 or greater than 100
                0-59 should return: 'F'
                60-69 should return: 'D'
                70-79 should return: 'C'
                80-89 should return: 'B'
                90-100 should return: 'A'
        */
        function finalGrade(num1, num2, num3) {
            const avg = (num1 + num2 + num3) / 3;
            if ((num1 < 0 || num1 > 100) || (num2 < 0 || num2 > 100) || (num3 < 0 || num3 > 100)) {
                return 'You have entered an invalid grade.'; } else if (avg >= 0 && avg <= 59) {
                return 'F';
                } else if (avg >= 60 && avg <= 69) {
                return 'D';
                } else if (avg >= 70 && avg <= 79) {
                return 'C';
                } else if (avg >= 80 && avg <= 89) {
                return 'B';
                } else if (avg >= 90 && avg <= 100) {
                return 'A';
                }  
        }
        console.log(finalGrade(95, 98, 87)) // Should print 'A' - yup


    // Challenge 5 - reportingForDuty()
        /*
            Instructions
                1. Write a function, reportingForDuty(), that has two string parameters,
                 rank and lastName, and returns a string in the following format: 
                 'rank lastName reporting for duty!'
        */

       const reportingForDuty = (rank, lastName) => {
        return `${rank} ${lastName} reporting for duty!`;
      }
      console.log(reportingForDuty('Private', 'Fido')) 
      // Should return 'Private Fido reporting for duty!' - Yup



    // Challenge 6 - Fix code

    const rollTheDice = () => {
        // Math.random() gives us a random number from 0 up to, but not including, 1
        // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
        // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
            let die1 = Math.floor(Math.random() * 6 + 1) // added floor to round up
            let die2 = Math.floor(Math.random() * 6 + 1)
            return die1 + die2;
        }
        console.log(rollTheDice());



    // Challenge 7 - calculateWeight()
        /* 
            Instructions
                1. Though an object's mass remains consistent throughout the universe, 
                weight is determined by the force of gravity on an object. Since 
                different planets have different gravity, the same object would weigh 
                different amounts on each of those planets! Cool, huh?

                Write a function, calculateWeight(). It should:
                have two parameters: earthWeight and planet
                expect earthWeight to be a number
                expect planet to be a string
                return a number representing what that Earth-weight would equate to on the 
                planet passed in.
                Handle the following cases:
                'Mercury' weight = earthWeight * 0.378
                'Venus' weight = earthWeight * 0.907
                'Mars' weight = earthWeight * 0.377
                'Jupiter' weight = earthWeight * 2.36
                'Saturn' weight = earthWeight * 0.916
                For all other inputs, return 'Invalid Planet Entry. 
                Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
        */

        const calculateWeight = (earthWeight, planet) => {
            if (planet === 'Mercury') {
            return earthWeight *= 0.378;
            } else if (planet === 'Venus') {
            return earthWeight *= 0.907;
            } else if (planet === 'Mars') {
            return earthWeight *= 0.377;
            } else if (planet === 'Jupiter') {
            return earthWeight *= 2.36;
            } else if (planet === 'Saturn') {
            return earthWeight *= 0.916;
            } else {
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
            }
        }
        
        console.log(calculateWeight(100, 'Jupiter')) // Should print 236 - Yup

    // Challenge 8 - truthyOrFalsy()
        /*
            Instructions
                1. It can be hard to keep track of what's truthy or falsy in JavaScript. 
                Write a function, truthyOrFalsy(), that takes in any value and returns 
                true if that value is truthy and false if that value is falsy.
        */
        const truthyOrFalsy = (value) => {
            if (value) {
            return true;
            } else {
            return false;
            }
        }
        
        console.log(truthyOrFalsy(0)) // Should print false - yup
      
    
    