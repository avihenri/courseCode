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
      
    
    // Challenge 9 - numImaginaryFriends()
        /* 
            Instructions
                1. A person's number of imaginary friends are always 33% of their total friends.
                Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.
                Since friends can only come in whole numbers, be sure to round your result before returning it.
        */

        const numImaginaryFriends = friends => {
            return Math.round(friends / 100 * 33);
        }        
        console.log(numImaginaryFriends(18)) // Output: 6 as answer is 5.94


    // Challenge 10 - sillySentence()
        /* 
            Instructions
                1. Write a function, sillySentence(), that has 3 string parameters and returns the following silly sentence with the blanks filled 
                in by the arguments passed into the function:
        */
        const sillySentence = (adjective, verb, noun) => {
            return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;
        }
        console.log(sillySentence('excited', 'love', 'functions')); // I am so excited because I love coding! Time to write some more awesome functions!

    
    // Challenge 11 - howOld()
        /*
            Instructions
                1. Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is 
                currently that age was (or will be) during that year. Handle three different cases:

                If the year is in the future, you should return a string in the following format:
                'You will be [calculated age] in the year [year passed in]'
                If the year is before they were born, you should return a string in the following format:
                'The year [year passed in] was [calculated number of years] years before you were born'
                If the year is in the past but not before the the person was born, you should return a string in the following format:
                'You were [calculated age] in the year [year passed in]'
        */
            const howOld = (age, year) => {
                const theCurrentYear = 2019;
                const yearDiff = year - theCurrentYear;
                const newAge = age + yearDiff;
                if (newAge < 0) {
                return `The year ${year} was ${newAge} years before you were born`;
                } else if (age < newAge) {
                `You will be ${newAge} in the year ${year}`;
                } else {
                `You were ${newAge} in the year ${year}`;
                }
            }            
            console.log(howOld(30, 1987));

            // TO GET CURRENT YEAR
                // let dateToday = new Date();
                // let thisYear = dateToday.getFullYear();


    // Challenge 14 - tipCalculator()
        /*
            Instructions
                1.
                Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

                Return the tip, as a number, based on the following:
                'bad' should return a 5% tip
                'ok' should return a 15% tip
                'good' should return a 20% tip 
                'excellent' should return a 30% tip
                all other inputs should default to 18%
        */
        function tipCalculator(quality, total) {
            if (quality === 'bad') {
            return total * .05;
            } else if (quality === 'ok') {
            return total * .15;
            } else if (quality === 'good') {
            return total * .2;
            } else if (quality === 'excellent') {
            return total * .3;
            } else {
            return total * .18;
            }    
        }
        console.log(tipCalculator('good', 100)) //should return 20


    // Challenge 15 - toEmoticon()
        /*
            Instructions
                1.
                Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:

                'shrug' should return '|_{"}_|'
                'smiley face' should return ':)'
                'frowny face' should return':('
                'winky face' should return ';)'
                'heart' should return '<3'
                any other input should return '|_(* ~ *)_|'
        */
       const toEmoticon = (emoString) => {
        switch (emoString) {
          case 'shrug':
            return '|_{"}_|';
          case 'smiley face':
            return ':)';
          case 'frowny face':
            return ':(';
          case 'winky face':
            return ';)';
          case 'heart': 
            return '<3';
          default:
            return '|_(* ~ *)_|';
        }
      }
      console.log(toEmoticon("whatever"))

