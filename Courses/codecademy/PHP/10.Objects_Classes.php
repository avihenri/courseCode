<?
// CLASSES AND OBJECTS
    // Introduction
        // Class = blueprint defining the related data & functions that should be bundled together inside each instance
        // Object = instances of the class
        // EXAMPLE - Pet class should have a name, age, breed, colour, chipped - functions = eating, pooping, cuddling, playing...
    
    // What are Classes?
        // Defining a class -
            class Pet {

            }
        // in the class we define the data each object of the class will contain
            class Pet {
                public $name, $colour, $breed, $age;
            }
        // EXAMPLE 
        class Beverage {
            public $color, $opacity, $temperature;
          }
        
    // Instantiating
        // Creating objects = instantiation
        // Objects are instantiated using key work = new
        $very_good_dog = new Pet(); // - new object
        
