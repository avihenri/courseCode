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

