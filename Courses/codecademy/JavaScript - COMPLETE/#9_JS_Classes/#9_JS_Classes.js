// CLASSES
// Introduction to Classes

    // Constructor
        // Only in classes
        // It's called every time it creates a new instance of a class
        class Dog { // Dog - name of class - capitalised & CamelCase
            constructor(name) { 
              this.name = name;
              this.behavior = 0;
            }
          }

          // Example 2
          class Surgeon {
            constructor(name, department) {
              this.name = name;
              this.department = department;
            }
          }

    // Instance
        // an instance = an obkject containing porpety names & methods of a class
        const halley = new Dog('Halley'); // Create new Dog instance
        console.log(halley.name); // Log the name value saved to halley
        // Output: 'Halley'

        // Example 2
        const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
        const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
    
    // Methods
          // Class method and getter syntax is the same as it is for objects except **you can not include commas between methods**.
          
          // Dog class with methods
          class Dog {
            constructor(name) {
              this._name = name;
              this._behavior = 0;
            }          
            get name() {
              return this._name;
            }          
            get behavior() {
              return this._behavior;
            }          
            incrementBehavior() {
              this._behavior++;
            }
          }

          // Surgeon Class with methods
          class Surgeon {
            constructor(name, department) {
              this._name = name;
              this._department = department;
              this._remainingVacationDays = 20;
            }
            get name() {
              return this._name;
            }
            get department() {
              return this._department;
            }
            get remainingVacationDays() {
              return this._remainingVacationDays;
            }
            takeVacationDays(daysOff) {
              let daysLeft = this._remainingVacationDays - daysOff;
                  this._remainingVacationDays = daysLeft;
            }
          }          
          const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
          const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

          // Method Calls
          console.log(surgeonCurry.name); // Curry
          surgeonCurry.takeVacationDays(3);
          console.log(surgeonCurry.remainingVacationDays); // 17

    // Inheritance I
          // tool to not rite so much code
          // if classes use the same methods they should come from a Parent Class (SuperClass)
          // Anything missing can be added to the child class directly
          // Parent Class = Animal has getters for name, behaviour & increment behaviour
            // Child classes = Dog = just uses the parent methods & Cat = uses parent classes but also an added one usesLitter

    // Inheritance II - Parent
            class HospitalEmployee {
                constructor(name) {
                this._name = name;
                this._remainingVacationDays = 20;
                }
                
                get name() {
                return this._name;
                }
                
                get remainingVacationDays() {
                return this._remainingVacationDays;
                }
                
                takeVacationDays(daysOff) {
                this._remainingVacationDays -= daysOff;
                }
            }

    // Inheritance III - child 1 (Keywords - extends & super)
            // Always call super method before using this keyword
            class Nurse extends HospitalEmployee {
                constructor(name, certifications) {
                  super(name);
                  this._certifications = certifications;
                }
              }
              
              const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

    // Inheritance IV
              // the below uses the parents methods 
            nurseOlynyk.takeVacationDays(5);
            console.log(nurseOlynyk.remainingVacationDays)

    // Inheritance V
              // Child's own properties
              class Nurse extends HospitalEmployee {
                constructor(name, certifications) {
                  super(name);
                  this._certifications = certifications; // own property 
                } 
                get certifications() {
                  return this._certifications;
                }
                addCertification(newCertification) { // own method
                  this._certifications.push(newCertification);
                }
              }
              
              const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
              nurseOlynyk.takeVacationDays(5);
              console.log(nurseOlynyk.remainingVacationDays);
              
              nurseOlynyk.addCertification('Genetics');
              console.log(nurseOlynyk.certifications);

    // Static Methods
              // not available to instances of classes but can be called inside a class
              class Animal {
                constructor(name) {
                  this._name = name;
                  this._behavior = 0;
                }              
                static generateName() {
                  const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
                  const randomNumber = Math.floor(Math.random()*5);
                  return names[randomNumber];
                }
              } 
              //We call the .generateName() method with the following syntax:
                console.log(Animal.generateName()); // returns a name
                // You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses (See below).
                const tyson = new Animal('Tyson'); 
                tyson.generateName(); // TypeError

                // Hospital Example
                class HospitalEmployee {
                    constructor(name) {
                      this._name = name;
                      this._remainingVacationDays = 20;
                    }
                    
                    get name() {
                      return this._name;
                    }
                    
                    get remainingVacationDays() {
                      return this._remainingVacationDays;
                    }
                    
                    takeVacationDays(daysOff) {
                      this._remainingVacationDays -= daysOff;
                    }
                    static generatePassword() {
                      const random = Math.floor(Math.random() * 10000);
                      return random;
                    }
                  }
                  console.log(HospitalEmployee.generatePassword());

        /*
        Review: Classes
            Way to go! Let's review what you learned.

            Classes are templates for objects.
            Javascript calls a constructor method when we create a new instance of a class.
            Inheritance is when we create a parent class with properties and methods that we can extend to child classes.
            We use the extends keyword to create a subclass.
            The super keyword calls the constructor() of a parent class.
            Static methods are called on the class, but not on instances of the class.
            In completing this lesson, you've taken one step closer to writing efficient,
            production-level JavaScript. Good luck as you continue to develop your skills and move into intermediate-level concepts.
        */