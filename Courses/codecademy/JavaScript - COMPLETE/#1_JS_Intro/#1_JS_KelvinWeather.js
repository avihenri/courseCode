/*
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there's a problem: 
All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let's convert Kelvin to Celsius, then to Fahrenheit.
*/

// Sets variable kelvin to 293
const kelvin = 293;
// Converts kelvin into celsius
const celsius = kelvin - 273;
// Converts celsius to fahernheit
let fahrenheit = celsius * (9 / 5) + 32;
// Rounds down decimal
fahrenheit = Math.floor(fahrenheit);
// Converts celsius to newton
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton`);