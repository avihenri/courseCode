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
        // to interact with the objects properties we use..   -?
        $very_good_dog->name = "Lassie";
        echo $very_good_dog->name; # Prints "Lassie"
        
    // Methods
        // define class methods - functions each object will contain
        class Pet {
            public $first, $last;
            function getFullName() {
              return $this->first . " " . $this->last; // $this refers to current object
            }
        }
        // to access methods we use ->
        $my_object->classMethod();

        $very_good_groundhog = new Pet();
        $very_good_groundhog->first = "Punxsutawney";
        $very_good_groundhog->last = "Phil";
        echo $very_good_groundhog->getFullName(); # Prints "Punxsutawney Phil"
        //WORKING EXAMPLE
        class Beverage {
            public $temperature, $color, $opacity;
            function getInfo() {
              return "This beverage is $this->temperature and $this->color.";
            }
          }       
          $soda = new Beverage();
          $soda->color = "black";
          $soda->temperature = "cold";
          echo $soda->getInfo(); // This beverage is cold and black.
          