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
          
    // Constructor Method
        // Automatically called when an object is instantiated
        // Is defined with the special method name __construct
        // to initialize any property for all instances of a class we add the constructor
        class Pet {
            public $deserves_love;
            function __construct() {
              $this->deserves_love = TRUE;
            }
          }
          $my_dog = new Pet();
          if ($my_dog->deserves_love){
            echo "I love you!";
          }
          // Prints: I love you!

          // Construct can also take parameters
          class Pet {
            public $name;
            function __construct($name) {
              $this->name = $name;
            }
          } 
          $dog = new Pet("Lassie");
          echo $dog->name; // Prints: Lassie

          class Beverage {
            public $temperature, $color, $opacity;
            function __construct($temperature, $color) {
              $this->temperature = $temperature;
              $this->color = $color;
            }
          
            function getInfo() {
              return "This beverage is $this->temperature and $this->color.";
            }
          }
          
          $cola = new Beverage("cold", "black");
          echo $cola->getInfo();

    // Inheritance
        // Dog class
          // needs all pet properties but some of its own
          // we extend the Pet class = parent
          // Dog = child
          class Dog extends Pet {
            function bark() {
                return "woof";
              }
          }

          class Beverage {
            public $temperature;
            
            function getInfo() {
              return "This beverage is $this->temperature.";
            }
          }          
          class Milk extends Beverage {
            function __construct() {
              $this->temperature = "cold";
            }
            
          }
    
    // Overloading Methods
        // Overloading a method = change method behaviour of parent 
        // create a new method in the child class with the same name as the parent
        class Pet {
            function type() {
              return "pet";
            }
          }
          class Dog extends Pet{
            function whatIsThis() {
              return "dog";
            }
          }
          // we can call the parents definition of the method in the subclass with parent::
          class Dog extends Pet{
            function type() {
              return "dog";
            }
            function classify(){
              echo "This " . parent::type() . " is of type " . $this->type();
              // Prints: This pet is of type dog 
            }
          }

          class Beverage {
            public $temperature;
            
            function getInfo() {
              return "This beverage is $this->temperature.";
            }
          }          
          class Milk extends Beverage {
            function __construct() {
              $this->temperature = "cold";
            }
            function getInfo() {
              return parent::getInfo() . " I like my milk this way.";
            }
          }          
          $semiSkimmed = new Milk();
          echo $semiSkimmed->getInfo();

    // Visibility - Private Members
        // public - visibility means members can be accessed from within an object or from outside it.
        // private - visibility means a member can only be accessed from within an object
        class Pet {
            private $healthScore = 0; 
            function exercise(){
              $this->healthScore++;
            }
            function feed(){
              $this->healthScore++;
            }
            function healthCheck(){
              if ($this->healthScore >= 2){
                echo "This is a healthy pet!";
              } else {
                echo "This is an unhealthy pet";
              }
            }
          }

          class Beverage {
            private $temperature, $color; // changed from public to private
            public $opacity;
            function __construct($temperature, $color) {
              $this->temperature = $temperature;
              $this->color = $color;
            }
            function getInfo() {
              return "This beverage is $this->temperature and $this->color.";
            }
          }
          class Milk extends Beverage {
            function setOpacity($opacity) {
              $this->opacity = $opacity;
            }
          }
    
    // Visibility - Protected Members
        // Problem with the above is that the $healthScore property won't be available to any of the subclasses (Dog)
        // To allow members to be accessed in child classes we use protected
        class Pet {
            private $healthScore = 0; 
          }          
          class Horse extends Pet {
            function brushTeeth() {
              this->heathScore++; // error
            }
          }          
          $my_pet = new Horse();
          $my_pet->brushTeeth(); // Error
        // protected enables child classes to access these properties & methods internally while still preventing them from being accessed externally
        class Pet {
            protected $heathScore = 0; 
          }          
          class Horse extends Pet {
            function brushTeeth() {
              this->heathScore++; 
            }
          }          
          $my_pet = new Horse();
          $my_pet->brushTeeth(); // Successfully increments healthScore
          $my_pet->healthScore; // Error

    // Getters and Setters
        // access & setting properties through methods
        class Pet {
            private $name;
            function setName($name) {
              $this->name = $name;
            }
            function getName() {
              return $this->name;
            }
          }
        // Only string format
        // We can add logic to the setter to ensure that the value being passed in is formatted properly:
        function setName($name) {
            if (gettype($name) === "string") {
            $this->name = $name;
            return true;
            } else {
            return false;
            }
        }
        // Getter
        function getName() {
            return ucfirst($this->name);
          }

          class Beverage {
            private $color;
            function setColor($color) {
              $this->color = strtolower($color);
            }
            function getColor() {
              return $this->color;
            }
          }          
          $soda = new Beverage();
          
    // Static Members
        // Static - not instantiated with every object but called statically
        class StringUtils {
            public static $max_number_of_characters = 80;
            public static function uclast($string) {
              $string[strlen($string)-1] = strtoupper($string[strlen($string)-1]);
              return $string;
            }
          }
        // to access we need the :: operator (scope resolution operator)
        echo StringUtils::$max_number_of_characters; # Prints "80"
        echo StringUtils::uclast("hello world"); # Prints "hello worlD"

        class AdamsUtils {
            public static $the_answer = 42;
            public static function addTowel($string) {
              return $string . " and a towel.";
            }
          }          
          $items = "I brought apples";
          echo AdamsUtils::$the_answer;
          echo AdamsUtils::addTowel($items);

/*

Review
Now you have the knowledge to create your own classes and objects in PHP using OOP! Take some time to review the concepts before moving on:

    Classes are defined using the class keyword.
    Functions defined within a class become methods and variables within the class are considered properties.
    There are three levels of visibility for class members:
    public (default) - accessible from outside of the class
    protected - only accessible within the class or its descendants
    private - only accessible within the defining class
    Members can be defined to be static.
    Static members are accessed using the Scope Resolution Operator (::).
    Classes are instantiated into objects using the new keyword.
    Members of an object are accessed using the Object Operator (->).

    */