<!-- PHP FUNCTIONS -->
<?php
    // <!-- DEFINING FUNCTIONS -->
    function greetLearner()
    {
    echo "Hello, Learner!\n";
    echo "I hope you're enjoying PHP!\n";
    echo "Love, Codecademy";
    }
    // naming conventions
        // snake_case = variables 
        // camelcase = functions
        // Start functions with a verb
    // EXERCISE
    function praisePHP() 
	{
  	echo "I love PHP \n";
  	echo "Here is my first codecademy function in PHP";
    }
    // INVOKING FUNCTIONS
    praisePHP();
    // OUTPUT
        // I love PHP 
        // Here is my first codecademy function in PHP

    // Return Statements
        // return data as well as perform instructions
        function countdown() 
        {
          echo "4, 3, 2, 1, ";
          return "blastoff!";
        }
        // EXERCISE
        function printStringReturnNumber() 
        {
          echo "print string \n";
          return 8;
        }        
        $my_num = printStringReturnNumber();
        echo $my_num;
        // RETURN KEYWORD STOPS THE FUNCTION
        // Returning NULL
            // function with no return will return null
            function returnNothing() 
            {
              echo "I'm running! I'm running!\n";
            }            
            $result = returnNothing(); // Prints: I'm running! I'm running!            
            echo $result; // Nothing is printed
    
    // Parameters
        // parameter is a variable which serves as a placeholder throughout the functions code block
            // when invoked > its invoked with the value passed in the function 
            // value passed is the argument
            function sayCustomHello($name)
            {
            echo "Hello, $name!";
            };            
            sayCustomHello("Aisle Nevertell"); // Prints: Hello, Aisle Nevertell!            
            sayCustomHello("Codecademy learner"); // Prints: Hello, Codecademy Learner!
        // EXERCISE
        function increaseEnthusiasm($str_param)
        {
          return $str_param . "!";
        }        
        function repeatThreeTimes($str_param)
        {
          return $str_param . $str_param . $str_param;
        }          
        echo increaseEnthusiasm(repeatThreeTimes("hai"));

    // Multiple Parameters
        // We can also define functions with multiple parameters.
        function divide($num_one, $num_two)
        {
          return $num_one / $num_two;
        };
        echo divide(12, 3); // Prints: 4
        echo divide(3, 12); // Prints: 0.25

        //Invoking a function with fewer arguments than expected will result in an error:
        function expectTwo($first, $second)
        {
          return "whatever";
        }        
        echo expectTwo("test"); // Will result in an error
        // EXERCISE
        function calculateArea($height, $width)
        {
          return $height * $width;
        }
        echo calculateArea(5, 7); // output 35
        
        function calculateVolume($height, $width, $depth)
        {
          return $height * $width * $depth;
        }
        echo calculateVolume(2, 8, 6); // output 3596
    
    // Default Parameters
        // We get an error when you do not provide an argument
        function sayCustomHello($name)
        {
        echo "Hello, $name!";
        };        
        sayCustomHello(); // Causes an error!
        // we can set a default parameter -
        function greetFriend($name = "old chum")
        {
        echo "Hello, $name!";
        };        
        greetFriend("Marvin"); // Prints: Hello, Marvin!        
        greetFriend(); // Prints: Hello, old chum!
        // EXERCISE
            // func that takes a number representing the cost of a meal, an integer representing the percent for tip
            // if no 2nd argument it should be defaulted to 20%
            // it should then return the new total 
            function calculateTip($mealCost, $tip = 20) 
            {
              return $mealCost * (1 + $tip/100);
            }            
            echo calculateTip(100, 25); // output 150
            echo calculateTip(100); // output 120

    // Pass By Reference
        // use the param as as the arugment 
        // only affects the param within the function
        function addX ($param)
        {
          $param = $param . "X";
          echo $param;
        };
        $word = "Hello";
        addX($word); // Prints: HelloX
        echo $word; // Prints: Hello
        // If we want to change the parameter permanently (globally) we prepend a & so &$param
            // this creates an alias for the argument
            function addXPermanently (&$param)
            {
              $param = $param . "X";
              echo $param;
            };
            $word = "Hello";
            addXPermanently($word); // Prints: HelloX
            echo $word; // Prints: HelloX - variable permanently changed
        // EXERSICE
        $string_one = "you have teeth";
        $string_two = "toads are nice";
        $string_three = "brown is my favorite color";
        function convertToQuestion(&$string)
        {
            $string = "Do you think " . $string . "?\n";
        };        
        convertToQuestion($string_one);
        convertToQuestion($string_two);
        convertToQuestion($string_three);        
        echo $string_one; // Do you think you have teeth?
        echo $string_two; // Do you think toads are nice?
        echo $string_three; // Do you think brown is my favorite color?
        
  /*
  Review
    Great job! Let’s review what we covered in this lesson:

    We can package a set of instructions within a named function to reuse whenever we’d like.
    When we invoke a function, the computer will execute the function body, specified by the code block following the parameters list.
    Functions can return a value by using the return keyword otherwise they return NULL which means no value.
    We can store the return value of a function in a variable or use it any other way we’d use a value.
    We can define functions with parameters which are variables we can refer to throughout our function’s body.
    When invoking functions, the values that we give them are called arguments.
    Functions can have multiple parameters.
    The order in which the arguments are passed in decides which parameters they correspond to.
    You can make an argument optional by providing its corresponding parameter with a default value.
    If you preprend a parameter with the reference sign (&) that argument will be passed by reference.
    Variables within functions have local scope and can not be accessed from outside the function.
    Use the global keyword to use variables from the global scope within a function.
*/
  
  
  
  
  