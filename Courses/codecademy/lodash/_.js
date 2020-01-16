/*
Lodash
In this project, you will be implementing some of the most exciting functionality from the widely-popular lodash.js library. 
You will be implementing ten methods that add new functionality for numbers, strings, objects, and arrays.

In implementing each method, we will follow these four steps:
Specify the functionality of the method we are implementing
Ideate a game plan for how to implement this functionality in code
Implement our game plan
Test our code to ensure it works as expected

We encourage you to try to complete the “Ideate” and “Implement” steps on your own before consulting our suggestions for each. 
It may be difficult at points, but working through difficult problems on your own will be incredibly helpful in your journey 
to become a stronger developer. Once you’ve come up with a solution on your own, or if you have become so stuck you are no 
longer being productive, check out our steps to see our suggestions for how to solve the problem.

There is no right or wrong answer when it comes to programming. As a result, don’t be frustrated if the solution we present 
is different than the solution you came up with. We are merely trying to challenge you to consider many different solutions. 
Your solution is equally as valid as ours. Consider the one you were going to write and then consider ours. Whichever you 
pick in the end is completely your decision, and we support it completely.

You have the choice of writing this project within the Codecademy environment to the right or locally on your own computer by
downloading the starting code here. Feel free to proceed in whichever environment you are most comfortable with.

With all of that said, let’s get started implementing some awesome new functionality!

to test in command line - node file_name - eg. 
*/

// clamp()
const _ = {
    clamp(num, lower, upper) {
        var lowerResult = Math.max(num, lower);
        var clampedResult = Math.min(lowerResult, upper);
        return clampedResult;
    },

    // node test/clamp.js - passed

    // inRange()
    // takes 3 arguments - a number, start value and an end value
    //checks to see if the provided number falls within the range (start-end)
    // if num is smaller than start - returns false
    // if num is larger than or equal to the end - returns false
    // if num is between start & end - returns true
    // if no end specified, start will be 0 & the end value will be the provided start value
    // if the start value is larger than the end value the two values should be swapped
    // below is added to the _ object, separating clamp with a comma -
    inRange(num, start, end) {
        if (!end) {
            end = start;
            start = 0;
        }
        if (start > end) {
            var temp = end;
            end = start;
            start = temp;
        }
        var isInRange = start <= num && num < end
        return isInRange;
    },
    // node test/is-range.js - passed 

    // words()
    // takes 1 argument - a string
    // splits the string into an array of words
    // a word is defined by a space-separated string of characters
    // below is added to the _ object, separating clamp with a comma -
    words(str) {
        arr = str.split(' ');
        return arr;
    },
    // node test/words.js - passed

    // pad() 
    // takes two arguments - a string and a length
    // adds spaces evenly to both sides of the string to make it reach the desired length
    // extra padding is added to the end of the string if an odd amount of padding is required to reach the specified length
    // below is added to the _ object, separating clamp with a comma -
    pad(str, len) {
        if (str.length >= len) {
            return str;
        }
        var startPaddingLength = Math.floor((len - str.length) / 2);
        var endPaddingLength = len - str.length - startPaddingLength;
        var paddingString = ' '.repeat(startPaddingLength) + str + ' '.repeat(endPaddingLength);
        return paddingString;
    }
    //   node test/pad.js - passed

};
// Do not write or modify code below this line.
module.exports = _;