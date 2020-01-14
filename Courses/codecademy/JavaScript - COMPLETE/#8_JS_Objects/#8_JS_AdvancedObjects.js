// ADVANCED OBJECTS
//Advanced Objects Introduction
    /*
    In this lesson we will cover these topics:
        how to use the this keyword.
        conveying privacy in JavaScript methods.
        defining getters and setters in objects.
        creating factory functions.
        using destructuring techniques.
    */

    // The this Keyword - references the calling object 
    const robot = {
        model: '1E78V2',
        energyLevel: 100,
        provideInfo: function () {
          return `I am ${this.model} and my current energy level is ${this.energyLevel}. `
        }
      };
      
      console.log(robot.provideInfo());

    // Arrow Functions and this
        // Arrow functions inherently bind, or tie a this value to the function 
            // this is a global object
        // avoid arrow functions when using this
        const robot = {
            energyLevel: 100,
            checkEnergy: function () { // not =>
              console.log(`Energy is currently at ${this.energyLevel}%.`)
            }
          }          
          robot.checkEnergy();

    // Privacy
          // not built in with JS
          // adding a underscore before the name of property = should not be altered _name
          const bankAccount = {
            _amount: 1000
          }

          const robot = {
            _energyLevel: 100,
            recharge(){
              this._energyLevel += 30;
              console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
            }
          };
          
          robot._energyLevel = 'high';          
          console.log(robot.recharge()); // undefiend as _energyLevel is no longer a number

    // Getters
          // methods that get and return onternal porperties of an object
            // In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we're accessing a property.
            // Advantages of using a getter method:
            //     Getters can perform an action on the data when getting a property.
            //     Getters can return different values using conditionals.
            //     In a getter, we can access the properties of the calling object using this.
            //     The functionality of our code is easier for other developers to understand.
            // Getter & Setters cannot have the same name - if they do it will result in a infinate call stack error

          const person = {
            _firstName: 'John',
            _lastName: 'Doe',
            get fullName() {
              if (this._firstName && this._lastName){
                return `${this._firstName} ${this._lastName}`;
              } else {
                return 'Missing a first name or a last name.';
              }
            }
          }          
          // To call the getter method: 
          person.fullName; // 'John Doe'

          // Example 2
          const robot = {
            _model: '1E78V2',
            _energyLevel: 100,
            get energyLevel() {
              if (typeof this._energyLevel === 'number') { // checks if it is a number
                return `My current energy level is ${this._energyLevel}`;
              } else {
                return 'System malfunction: cannot retrieve energy level';
              }
            }
          };          
          console.log(robot.energyLevel);

    // Setters
          // with getter methods we can create setter methods
          // reassign values of properties
          // do not need () when being called 
          // Advantages
                // Checking input, performing actions on properties, displaying intention of how an object should be used
          const person = {
            _age: 37,
            set age(newAge){
              if (typeof newAge === 'number'){
                this._age = newAge;
              } else {
                console.log('You must assign a number to age');
              }
            }
          };
          person.age = 40;
          console.log(person._age); // Logs: 40
          person.age = '40'; // Logs: You must assign a number to age

          // Example 2
          const robot = {
            _model: '1E78V2',
            _energyLevel: 100,
            _numOfSensors: 15,
            get numOfSensors(){
              if(typeof this._numOfSensors === 'number'){
                return this._numOfSensors;
              } else {
                return 'Sensors are currently down.'
              }
            },
            set numOfSensors(num) {
              if (typeof num === 'number' && num >= 0) {
                this._numOfSensors = num;
              } else {
               return 'Pass in a number that is greater than or equal to 0';
              }
            }
          };          
          robot.numOfSensors = 100;          
          console.log(robot.numOfSensors); // output: 100

          // Factory Functions
                // A function that returns an object & can be reused to make multiple objects instances
                    // can have parameters to customise
                    const monsterFactory = (name, age, energySource, catchPhrase) => {
                        return { 
                          name: name,
                          age: age, 
                          energySource: energySource,
                          scare() {
                            console.log(catchPhrase);
                          } 
                        }
                      };
                      const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
                      ghost.scare(); // 'BOO!'

                      // Example 2
                      const robotFactory = (model, mobile) => {
                        return {
                          model: model,
                          mobile: mobile,
                          beep: function () {
                            console.log('Beep Boop');
                          }
                        }
                      };
                      
                      const tinCan = robotFactory('P-500', true);
                      tinCan.beep();

    // Property Value Shorthand
            // ES6 introduced some new shortcuts for assigning properties to variables known as destructuring
            // Destructuring technique, called property value shorthand: 
                // Before
                const monsterFactory = (name, age) => {
                    return { 
                      name: name,
                      age: age
                    }
                  };
                // after
                const monsterFactory = (name, age) => {
                    return { 
                      name,
                      age 
                    }
                  };

        // Destructured Assignment (destructuring technique)
        const vampire = {
            name: 'Dracula',
            residence: 'Transylvania',
            preferences: {
              day: 'stay inside',
              night: 'satisfy appetite'
            }
          };
          // Before
          const residence = vampire.residence; 
          console.log(residence); // Prints 'Transylvania' 
          // After
          const { residence } = vampire; 
          console.log(residence); // Prints 'Transylvania'
                  
          // Exmaple 2
          const robot = {
            model: '1E78V2',
            energyLevel: 100,
            functionality: {
              beep() {
                console.log('Beep Boop');
              },
              fireLaser() {
                console.log('Pew Pew');
              },
            }
          };          
          const {functionality} = robot;
          console.log(functionality.beep());

    // Built-in Object Methods - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods
            const robot = {
                model: 'SAL-1000',
            mobile: true,
            sentient: false,
            armor: 'Steel-plated',
            energyLevel: 75
            };
            
            // What is missing in the following method call?
            const robotKeys = Object.keys(robot);
            
            console.log(robotKeys);
            
            // Declare robotEntries below this line:
            const robotEntries = Object.entries(robot)
            console.log(robotEntries);
            
            // Declare newRobot below this line:
            const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
            
            console.log(newRobot);

          /*
            Review
                Congratulations on finishing Advanced Objects!

                Let's review the concepts covered in this lesson:

                The object that a method belongs to is called the calling object.
                The this keyword refers the calling object and can be used to access properties of the calling object.
                Methods do not automatically have access to other internal properties of the calling object.
                The value of this depends on where the this is being accessed from.
                We cannot use arrow functions as methods if we want to access other internal properties.
                JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
                The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
                Setters and getter methods allow for more detailed ways of accessing and assigning properties.
                Factory functions allow us to create object instances quickly and repeatedly.
                There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
                As with any concept, it is a good skill to learn how to use the documentation with objects!
                You're ready to start leveraging more elegant code for creating and accessing objects in your code!
            */
