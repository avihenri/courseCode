// SCOPE

    // Blocks & Scope
        // Block = code inside curly bracces
        if (dusk) {
            let color = 'pink';
            console.log(color); // pink
          };
    // Example
          const city = 'New York City'; // exists outside the block = Global Scope (global variable)
          function logCitySkyline() {
            let skyscraper = 'Empire State Building'; // exists inside the block
            return 'The stars over the ' + skyscraper + ' in ' + city;
          }
          console.log(logCitySkyline()); // The stars over the Empire State Building in New York City
    // Example - Global Variables
            const satellite = 'The Moon';
            const galaxy = 'The Milky Way';
            const stars = 'North Star';

            function callMyNightSky() {
            return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy; 
            }
            console.log(callMyNightSky()); // Night Sky: The Moon, North Star, and The Milky Way

    // Block Scope - var defined in block only avail in block = Local Variables
        const logSkyColor = () => {
            let color = 'blue'; 
            console.log(color); // blue 
        };
        
        logSkyColor(); // blue 
        console.log(color); // ReferenceError

        //Another example 
        function logVisibleLightWaves() {
            const lightWaves = 'Moonlight';
            console.log(lightWaves);
          }
          logVisibleLightWaves(); // Moonlight
          console.log(lightWaves); // ReferenceError: lightWaves is not defined

    // Scope Pollution
          // too many global variables = mistakes and errors
          // Example 1
          let num = 50;

            const logNum = () => {
            num = 100; // Take note: The reassignment inside logNum() affects the global variable num.
            console.log(num);
            };

            logNum(); // Prints 100
            console.log(num); // Prints 100
        
           // Example 2
           const satellite = 'The Moon';
            const galaxy = 'The Milky Way';
            let stars = 'North Star';

            const callMyNightSky = () => {
            stars = 'Sirius';
                return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
            };

            console.log(callMyNightSky());
            console.log(stars);

    // Practice Good Scoping
            // Example 1
            const logSkyColor = () => {
                const dusk = true;
                let color = 'blue'; 
                if (dusk) {
                let color = 'pink';
                console.log(color); // pink
                }
                console.log(color); // blue 
            };            
            console.log(color); // ReferenceError
            // Example 2
            const logVisibleLightWaves = () => {
                let lightWaves = 'Moonlight';
                  let region = 'The Arctic';
                // Add if statement here:
                if (region === 'The Arctic') {
                  let lightWaves = 'Northern Lights';
                  console.log(lightWaves);
                }
                console.log(lightWaves);
              };
              
              logVisibleLightWaves();

// REVIEW

/*
Review: Scope
In this lesson, you learned about scope and how it impacts the accessibility of different variables.

Let's review the following terms:

Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.
Blocks are statements that exist within curly braces {}.
Global scope refers to the context within which variables are accessible to every part of the program.
Global variables are variables that exist within global scope.
Block scope refers to the context within which variables that are accessible only within the block they are defined.
Local variables are variables that exist within block scope.
Global namespace is the space in our code that contains globally scoped information.
Scope pollution is when too many variables exist in a namespace or variable names are reused.
As you continue your coding journey, remember to use best practices when declaring your variables! Scoping your variables tightly will ensure that your code has clean, organized, and modular logic.
*/