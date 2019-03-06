// Creating Object Literals
    // use {} to designate an object literal
    let spaceshipper = {}; // empty object

    // objects
        // fill with unordered data that is ordered into key-value pairs
        // key = variable name & value = any data type (inc. other objects and functions)
        // are mutable
        // cannot reassign object declared with const but it can be mutated
        // Property = what an object has
        // Method = what an object does

        spaceshipper = {
            'Fuel Type': 'diesel',
            color: 'silver'
        };

        let fasterShip = {
            'Fuel Type': 'Turbo Fuel',
          color: 'silver'
      };

    
    // Accessing Properties
        // 2 ways = 1. with dot notation ( . ) & bracket notation []
            // dot notation
                let spaceship = {
                    homePlanet: 'Earth',
                    color: 'silver',
                    'Fuel Type': 'Turbo Fuel',
                    numCrew: 5,
                    flightPath: ['Venus', 'Mars', 'Saturn']
                };
                
                let crewCount = spaceship.numCrew;
                let planetArray = spaceship.flightPath;
            
            // bracket notation **Must use if keys have numbers, spaces, special characters**
                let propName =  'Active Mission';
                // We can use a variable to select the keys object
                let isActive = spaceship['Active Mission'];                
                console.log(spaceship[propName]); // true

    // Property Assignment
        // Mutable
        // To add new key-value pairs we can use . or [] and = to assign
                // if property exists - the value will be changed with new assignment
                // if no property it will be added to object
                // delete operator is used to delete a property = delete object.property;
                spaceship.color = 'glorious gold'; // changes color 
                spaceship.numEngines = 4; // adds num Engines
                delete spaceship['Secret Mission']; // deletes Secret Mission property

    // Methods
        // when fucntions are stored in an object its called a method
        const alienShipper = {
            invade: function () { 
              console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
            }
          };
          // ES6
          const alienShipper = {
            invade () { 
              console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
            }
          };

          let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
          const alienShip = {
            retreat () {
              console.log(retreatMessage);
            },
            takeOff () {
              console.log('Spim... Borp... Glix... Blastoff!');
            }
          };          
          alienShip.retreat();
          alienShip.takeOff();  

    // Nested Objects
        let spaceship = {
            passengers: null,
            telescope: {
            yearBuilt: 2018,
            model: "91031-XLT",
            focalLength: 2032 
            },
            crew: {
            captain: { 
                name: 'Sandra', 
                degree: 'Computer Engineering', 
                encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
            },
            engine: {
            model: "Nimbus2000"
            },
            nanoelectronics: {
            computer: {
                terabytes: 100,
                monitors: "HD"
            },
            backup: {
                battery: "Lithium",
                terabytes: 50
            }
            }
        }; 
        // accesses the first item in the captains fav food 
        let capFave = spaceship.crew.captain['favorite foods'][0];
        // Added an array of objects to passengers        
        spaceship.passengers = [{name: 'Alec'}, {name: 'Mav'}, {name: 'Duncan'}, {name: 'Micahel'}];
        // Accesess the first passenger 
        let firstPassenger = spaceship.passengers[0];
        
      
      // Pass By Reference
        // 

        let spaceship = {
            'Fuel Type' : 'Turbo Fuel',
            homePlanet : 'Earth'
          };
          
          let greenEnergy = obj => {
            obj['Fuel Type'] = 'avocado oil';
          }
          
          let remotelyDisable = obj => {
            obj.disabled = true;
          }
          
          greenEnergy(spaceship);
          remotelyDisable(spaceship);
          console.log(spaceship);

    // Looping Through Objects
          // for .... in  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
          let spaceship = {
            crew: {
            captain: { 
                name: 'Lily', 
                degree: 'Computer Engineering', 
                cheerTeam() { console.log('You got this!') } 
                },
            'chief officer': { 
                name: 'Dan', 
                degree: 'Aerospace Engineering', 
                agree() { console.log('I agree, captain!') } 
                },
            medic: { 
                name: 'Clementine', 
                degree: 'Physics', 
                announce() { console.log(`Jets on!`) } },
            translator: {
                name: 'Shauna', 
                degree: 'Conservation Science', 
                powerFuel() { console.log('The tank is full!') } 
                }
            }
        }; 
        
        for (let crewMember in spaceship.crew) {
          console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
        }
        /* 
        captain: Lily
        chief officer: Dan
        medic: Clementine
        translator: 
        */
        
        for (let crewMember in spaceship.crew) {
          console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
        }
        // Lily: Computer Engineering
        // Dan: Aerospace Engineering
        // Clementine: Physics
        // Shauna: Conservation Science

        /*
        Review
        Way to go! You're well on your way to understanding the mechanics of objects in JavaScript. By building your own objects, you will have a better understanding of how JavaScript built-in objects work as well. You can also start imagining organizing your code into objects and modeling real world things in code.

        Let's review what we learned in this lesson:

        Objects store collections of key-value pairs.
        Each key-value pair is a property—when a property is a function it is known as a method.
        An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
        You can access, add or edit a property within an object by using dot notation or bracket notation.
        We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.
        We can navigate complex, nested objects by chaining operators.
        Objects are mutable—we can change their properties even when they're declared with const.
        Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.
        We can iterate through objects using the For...in syntax.
        */