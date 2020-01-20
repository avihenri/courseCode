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
    },
    //   node test/pad.js - passed

    // has()
    // takes 2 arguments - an object & a key
    // checks to see of the provided object contains a value at the specified key
    // returns true if the object contains a value to the key & will return false if not

    has(obj, key) {
        var hasValue = obj[key];
        if (hasValue != undefined) {
            return true;
        }
        return false;
    },

    // invert() 
    // takes one argument - an object
    // iterates through each key/value pair in the provided object & swaps the key and value
    invert(object) {
        let invertedObject = {};
        for (let key in object) {
            const originalValue = object[key];
            invertedObject = { originalValue: key }
        }
        return invertedObject;
    },

    // findKey()
    // takes two arguments - an object and a predicate function (a function that returns a boolean value)
    // iterates through each key/value pair in the object & calls the function with the value
    // returns the first key that has a value that returns a truthy value
    // returns undefined if no values are truthy
    findKey(object, predicate) {
        for (let key in object) {
            let value = object[key];
            let predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
                return key;
            }
        }
        undefined;
        return undefined;
    },

    // drop()
    // takes two arguments - an array & a number representing the number of items to drop from the beginning of the array
    // returns a new array which contains the elements from the original array, excluding the specified number of elements from the beginning of the array
    // if the number of elements to drop is unspecified , the method should drop one element
    drop(array, n) {
        if (n === undefined) {
            n = 1;
        }
        let droppedArray = array.slice(n, array.length);
        return droppedArray;
    },

    // dropWhile() 
    // takes two arguments - array & predicate func
    // predicate func takes 3 arguments - current elements, current index, whole array
    // creates a new copy of the supplied array, dropping elements from the beginning until an element causes the predicate func to return falsy
    dropWhile(array, predicate) {
        const cb = (element, index) => {
            return !predicate(element, index, array);
        };
        let dropNumber = array.findIndex(cb);
        let droppedArray = this.drop(array, dropNumber)
        return droppedArray;
    },

    // chunk()
    // takes two arguments - array & size
    // breaks up the supplied array into arrays of specified size
    // returns an array containing all the previously-created array chunks in the order of the original array
    // if array cannot be broken up evenly, the last chunk will be smaller than the specified size
    // if no size is specified the size is set to 1
    chunk(array, size = 1) {
        let arrayChunks = [];
        for (let i = 0; i < array.length; i += size) {
            let arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }

};
// Do not write or modify code below this line.
module.exports = _;