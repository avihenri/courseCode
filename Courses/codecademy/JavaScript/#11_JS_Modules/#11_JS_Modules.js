/*
INTERMEDIATE JAVASCRIPT MODULES
Hello Modules
JavaScript modules are reusable pieces of code that can be exported from one program and imported for use in another program.

Modules are particularly useful for a number of reasons. By separating code with similar logic into files called modules, we can:

find, fix, and debug code more easily;
reuse and recycle defined logic in different parts of our application;
keep information private and protected from other modules;
and, importantly, prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.
*/

    // module.exports
        /*
            The pattern we use to export modules is thus:
                Define an object to represent the module.
                Add data or behavior to the module.
                Export the module.
        */
       let Airplane = {};
       Airplane.myAirplane = 'StarJet';
       module.exports = Airplane

    // require()
        // require() is a JavaScript function that enables a module to load by passing in the module’s filepath as a parameter.
        const Airplane = require('./1-airplane.js');
        function displayAirplane() {
          console.log(Airplane.myAirplane);
        }
        displayAirplane();

    // module.exports II
        // IN ONE FILE
        let Airplane = {}
        module.exports = {
          myAirplane: "CloudJet",
          displayAirplane: function() {
           return this.myAirplane;
          }
        };
        // IN ANOTHER FILE
        const Airplane = require('./2-airplane.js');
        console.log(Airplane.displayAirplane()); // CloudJet

    // export default
        // ES6 - default export and named exports
        // When using ES6 syntax, we use export default in place of module.exports
        let Airplane = {};
        Airplane.availableAirplanes = [
          {
          name: 'AeroJet',
          fuelCapacity: 800,
        },
          {
          name: 'SkyJet',
          fuelCapacity: 500,
        }
          ];
        export default Airplane;
        console.log(Airplane);
        // { availableAirplanes: 
        //     [ { name: 'AeroJet', fuelCapacity: 800 },
        //       { name: 'SkyJet', fuelCapacity: 500 } ] }

    // import
        import Airplane from './airplane';
        function displayFuelCapacity() {
        Airplane.availableAirplanes.forEach(function(element){    
        console.log('Fuel Capacity of ' + element.name + ' : ' + element.fuelCapacity);
        });  
        }
        displayFuelCapacity();
        // Fuel Capacity of AeroJet : 800
        // Fuel Capacity of SkyJet : 500

        // Named Exports
        // named exports allow us to export data through the use of variables.
        let availableAirplanes = [
          {
          name: 'AeroJet',
          fuelCapacity: 800,
            availableStaff: [
              'pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sendorOperators'
            ]
        },
          {
          name: 'SkyJet',
          fuelCapacity: 500,
            availableStaff: [
              'pilots', 'flightAttendants'
            ]
        }
          ];
        
        let flightRequirements = {
          requiredStaff: 4,
        };
        
        function meetsStaffRequirements(availableStaff, requiredStaff) {
          if (availableStaff.length >= requiredStaff) {
            return true;
          } else {
            return false;
          }
        }
        
        export {availableAirplanes, flightRequirements, meetsStaffRequirements};

        // Names Imports
          // To import objects stored in a variable, we use the import keyword and include the variables in a set of {}.
          import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

          function displayFuelCapacity() {
            availableAirplanes.forEach(function(element){    
            console.log('Fuel Capacity of ' + element.name + ' : ' + element.fuelCapacity);
            });  
          }
          
          displayFuelCapacity();
          
          function displayStaffStatus() {
            availableAirplanes.forEach(function(element) {  
              console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
            });
          }
          
          displayStaffStatus();

          // Export Named Exports
            // The export keyword allows us to export objects upon declaration
            export let availableAirplanes = [{
              name: 'AeroJet',
              fuelCapacity: 800,
              availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
               maxSpeed: 1200,
               minSpeed: 300,
             }, 
             {name: 'SkyJet',
              fuelCapacity: 500,
              availableStaff: ['pilots', 'flightAttendants'],
              maxSpeed: 800,
              minSpeed: 200,
             }];
             
             export let flightRequirements = {
               requiredStaff: 4,
               requiredSpeedRange: 700,
             };
             
             export function meetsStaffRequirements(availableStaff, requiredStaff) {
               if (availableStaff.length >= requiredStaff) {
                 return true;
               } else {
                 return false;
               }
             };
             
             export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
               let range = maxSpeed - minSpeed;
               if (range > requiredSpeedRange) {
                 return true;
               } else {
                 return false;
               }
             }

            // Import Named Imports
             // To import variables that are declared, we simply use the original syntax that describes the variable name. 
             import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';

             function displayFuelCapacity() {
               availableAirplanes.forEach(function(element) {
                 console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
               });
             }             
             displayFuelCapacity();             
             function displayStaffStatus() {
               availableAirplanes.forEach(function(element) {
                console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
               });
             }             
             displayStaffStatus();             
             function displaySpeedRangeStatus() {
               availableAirplanes.forEach(function(element){
                 console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
               });  
             }             
             displaySpeedRangeStatus()

            // Export as
            // The as keyword allows us to give a variable name an alias
            import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';

            function displayFuelCapacity() {
              availableAirplanes.forEach(function(element) {
                console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
              });
            }            
            displayFuelCapacity();            
            function displayStaffStatus() {
              availableAirplanes.forEach(function(element) {
               console.log(element['name'] + ' meets staff requirements: ' + meetsStaffRequirements(element['availableStaff'], flightRequirements['requiredStaff']) );
              });
            }            
            displayStaffStatus();            
            function displaySpeedRangeStatus() {
              availableAirplanes.forEach(function(element){
                console.log(element['name'] + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element['maxSpeed'], element['minSpeed'], flightRequirements['requiredSpeedRange']));
              });  
            }            
            export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReq, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };

            //Import as
            import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

            function displayFuelCapacity() {
                aircrafts.forEach(function(element) {
                   console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
            });
            }                        
            displayFuelCapacity();                        
            function displayStaffStatus() {
               aircraft.forEach(function(element) {
                 console.log(element['name'] + ' meets staff requirements: ' + meetsStaffReqs(element['availableStaff'], flightReqs['requiredStaff']) );
            });
            }                        
            displayStaffStatus();                        
            function displaySpeedRangeStatus() {
                 aircraft.forEach(function(element){
                    console.log(element['name'] + ' meets speed range requirements: ' + meetsSpeedRangeReqs(element['maxSpeed'], element['minSpeed'], flightReqs['requiredSpeedRange']));
             });  
            }                        
            export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReq, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };

            // Combining Export Statements - use named exports and default exports together
            // Combining Import Statements

            /*
            Review
              We just learned how to use JavaScript modules. Let’s review what we learned:

              Modules in JavaScript are reusable pieces of code that can be exported from one program and imported for use in another program.

              module.exports exports the module for use in another program.
              require() imports the module for use in the current program.
              ES6 introduced a more flexible, easier syntax to export modules:

              default exports use export default to export JavaScript objects, functions, and primitive data types.
              named exports use the export keyword to export data in variables.
              named exports can be aliased with the as keyword.
              import is a keyword that imports any object, function, or data type.
              */