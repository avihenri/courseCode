/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: 
BMI = mass / height^2 = mass / (height * height). 
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether 
Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. 
(Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

var markHeight = 1.7526;
var markMass = 80;
var johnHeight = 1.8034;
var johnMass = 90;

var johnBMI = johnMass / johnHeight; // 49.90573361428413
var markBMI = markMass / markHeight; // 45.64646810453041

var compare = markBMI > johnBMI;
console.log(`Is Mark's BMI higher than John's? ${compare}`); // Is Mark's BMI higher than John's? false

// CORRECT BELOW

var markHeight = 1.7526;
var markMass = 80;
var johnHeight = 1.8034;
var johnMass = 90;

var johnBMI = johnMass / (johnHeight * johnHeight); // 27.673136084220992
var markBMI = markMass / (markHeight * markHeight); // 26.045000630223903

var compare = markBMI > johnBMI;
console.log(`Is Mark's BMI higher than John's? ${compare}`);
// Is Mark's BMI higher than John's? false
