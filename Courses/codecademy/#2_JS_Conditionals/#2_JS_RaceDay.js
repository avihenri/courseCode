/*
Here's how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn't plan for runners that are exactly 18! We'll handle that by the end of the project.
*/

// Second time doing this -
let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
const runnersAge = 18;

if (runnersAge > 18 && registeredEarly === true) {
  raceNumber += 1000;
}

if (runnersAge > 18 && registeredEarly === true) {
  console.log(`You will race at 9:30 am and your race number is: ${raceNumber}`)
} else if (runnersAge > 18 && registeredEarly === false) {
  console.log(`You will race at 11:00 am and your race number is: ${raceNumber}`)
} else if (runnersAge < 18) {
  console.log(`You will race at 12:30pm and your race number is: ${raceNumber}`)
} else {
  console.log('Please see registration desk')
}


// First time doing this -
let raceNumber = Math.floor(Math.random() * 1000);
let registeredRunner = true;
let runnersAge = 18;

if (runnersAge > 18 && registeredRunner == true) {    // no need to check boolean so just use var, better to have it first in condition (RegRun && ..
  raceNumber += 1000;
}

if (runnersAge > 18 && registeredRunner == true) {
  console.log(`${raceNumber}: You will race at 09:30`)
} else if (runnersAge > 18 && !registeredRunner == false){
  console.log(`${raceNumber}: You will race at 11:00`)
} else if (runnersAge < 18) {
  console.log(`${raceNumber}: You will race at 12:30`)
} else {
  console.log(`Please see registration desk`)
}