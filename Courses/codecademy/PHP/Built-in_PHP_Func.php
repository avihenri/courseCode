<!-- INTRO TO BUILT-IN PHP FUNCTIONS
Introduction - shortcuts with built in functions -->
<?php
// Working with Variables

    // gettype() - takes var & returns a string value of its data type  - https://www.php.net/manual/en/function.gettype.php
        $name = "Aisle Nevertell";
        $age = 1000000;    
        echo gettype($name); // Prints: string    
        echo gettype($age); // Prints: integer

    // var_dump() - takes var & returns details about the argument - https://www.php.net/manual/en/function.var-dump.php
        var_dump($name); // Prints: string(15) "Aisle Nevertell" - string(15) is the data type and length
        var_dump($age); // Prints: int(1000000) - integery and value is in parentheses

// String Functions
    // strrev() - prints a string in reverse - https://www.php.net/manual/en/function.strrev.php
        echo strrev("Hello, World!"); // Prints: !dlroW ,olleH

    // strtolower() - transforms string into lowercase - https://www.php.net/manual/en/function.strtolower.php
        echo strtolower("HeLLo"); // Prints: hello

    // str_repeat() - repeats a string according to how many times requests - https://www.php.net/manual/en/function.str-repeat.php
        // takes 2 parameters - 1st is a string and 2nd is the amount of times you want it repeated
            echo str_repeat("hi", 10); // Prints: hihihihihihihihihihi 

// Working with Substrings
    // Substring is a portion of a string
    // substr_count() - returns instances of a substring - https://www.php.net/manual/en/function.substr-count.php
        // takes 2 arguments - 1st string to search through (haystack) & 2nd the string to search for (needle)
        $story = "I was like, \"Dude, like just tell me what you like think because like everyone else is like being totally honest, 
        and like I just want to know what you like think.\" So like I don't know...";
        echo substr_count($story, "like"); // Prints: 8 
        // substr_count() is not concerned with which characters come before or after the string it’s searching for—it will count both “obvious” and “obviously”.
        $essay_two = "Obviously this is a really good book. You obviously would not have made us read it if it wasn't. I felt like the ending was too obvious though. 
        It was so obvious who did it right away. I think the thing with the light was obviously a metaphor for life. It would have been better if the characters were less obvious about their secrets.";  
        echo substr_count($essay_two, "obvious"); // 5

// Number functions
    // abs() - returns absolute value of its number argument - https://www.php.net/manual/en/function.abs.php
        echo abs(-10.99); // Prints: 10.99
        echo abs(127); // Prints: 127
    
    // round() - returns the nearest integer to it's number - https://www.php.net/manual/en/function.round.php
        echo round(1.2); // Prints 1
        echo round(1.5); //Prints 2    
        echo round(1298736.821763876); // Prints: 1298737

    // EXERCISE:
        // 1. Function that calculates the distance between two numbers. 
            // The function should return the same result for two arguments no matter what order they’re passed into the function.
        function calculateDistance($dist1, $dist2) {
            $total = $dist1 - $dist2;
            return abs($total);
          }
         echo calculateDistance(-1, 4);
         echo calculateDistance(4, -1);
         echo calculateDistance(3, 7); 
         echo calculateDistance(7, 3);
         
         // 2. A function that takes a number representing the total cost of a meal as its argument.
            // Your function should calculate a new total with an 18% tip added and return that value rounded to the nearest integer.
         function calculateTip($mealCost) {
           $total = $mealCost * (1 + 18/100);
           return round($total);
         }
         echo calculateTip(100);
         echo calculateTip(35);
         echo calculateTip(88.77);

// Generating Random Numbers
    // rand() - returns a random integer
         // can be invoked multiple ways
            // invoked with no arguments will give back a number between 0 and the largest number your environment can handle
            // to get the number your environment can handle we do getrandmax()
            $max = getrandmax(); 
            echo $max;            
            echo rand(); // Prints a number between 0 and $max
            // we can invoke with arguments - 1st being the smallest and 2nd being the largest
            echo rand(1, 2); // Prints either 1 or 2
            echo rand(5, 10); // Prints a number between 5 and 10 (inclusive!)            
            echo rand(1, 100); // Prints a number between 1 and 100 (inclusive!)
        // EXERCISE:
            echo getrandmax(); //2147483647
            echo "\n";
            echo rand(); // 498426011
            echo "\n";
            echo rand(1, 52); // 8
    
// Documentation
    /* Documentation typically includes:
        The name of the function.
        The versions of the PHP language the function is available in.
        An overview of how the function works.
        Additional details on the parameters and return value.
        Examples of the function in use.
        User comments further explaining features of the function. */

        // Here’s the description for the abs() function:
        // abs ( mixed $number ) : number
        // Explained:
            // ( mixed $number ) - it is mixed as there is more than one number data type - integer and float so it accepts both. The parameter for abs os $number
            // : number - this is the data type the function will return
                // a func that prints somethin gbut not a value will have :void
                // a func that has no parameters will say (void)
        
        // Here’s the description for the substr_count() function:
        // substr_count ( string $haystack , string $needle [, int $offset = 0 [, int $length ]] ) : int
        // Explained:
            // The first two parameters are required and any optional ones are within square brackets [ ]
            // optional parameter may have default value so $offset is 0 and will be used if $offset is not set

    // EXERCISE:
        // str_pad ( string $input , int $pad_length [, string $pad_string = " " [, int $pad_type = STR_PAD_RIGHT ]] ) : string
        // In the code editor, we’ve provided four variables: $a, $b, $c, and $d. 
        // Your task is to invoke str_pad() with these four variables as its arguments so that it returns the string: *~**~**~*You did it!*~**~**~*. 
        // You’ll need to figure out which order to pass them in.

        $a = 29;
        $b = "You did it!";
        $c = STR_PAD_BOTH;
        $d = "*~*";

        echo str_pad($b, $a, $d, $c); // *~**~**~*You did it!*~**~**~*

// Finding Functions
    // EXERCISE:  HAD TO FIND THESE BY GOOGLEING
    function convertToShout($str) {
        $upper = strtoupper($str);
          return $upper . "!";
       }
       echo convertToShout("woah there, buddy");
       echo "\n";
       
       function tipGenerously($mealCost) {
         $total = $mealCost * (1 + 20/100);
         return ceil($total);
       }
       echo tipGenerously(100.00);
       echo "\n";
       
       function calculateCircleArea($diameter) {
         return pi() * ($diameter/2)**2;
       }
       echo calculateCircleArea(25);

/* 
Review
In this lesson, you learned that built-in functions are functions provided by PHP. You learned about several specific built-in functions, 
how to understand a function’s description in the documentation, and how to discover new built-in functions.

We’ve only started to scratch the surface of all of the functions built into the PHP language. As you continue to learn PHP, you’ll come 
across many useful built-in functions. As you write your own code, if a task you’re performing feels tedious but common, check to see if 
there’s a built-in function to do it for you!

One final note: Throughout this lesson, you may have noticed that PHP’s built-in functions often don’t follow the function naming conventions
 we outlined. PHP’s built-in functions aren’t named following a single convention—some are snake-cased while others have unseparated words.
  It’s quirks like this that can make PHP a bit frustrating to learn. Be patient with yourself as you get comfortable with the built-in functions
   most useful to you, and don’t hesitate to look things up. */
   $string_var = "Check it out";
echo strtoupper($string_var) . "!\n";

echo ceil(8.873);
echo "\n";
  
echo pi();
echo "\n";

echo str_pad("PHP", 30, "*^*-", STR_PAD_BOTH);
echo "\n";

echo getrandmax();
echo "\n";

echo rand();
echo "\n";

echo rand(1, 52);
echo "\n";

echo abs(-1287);
echo "\n";

echo round(8723.999);
echo "\n";

echo substr_count($string_var, " ");
echo "\n";

echo strrev("\n.pu ti peeK .taerg gniod er'uoY");

echo strtolower("SOON, tHiS WILL Look NoRmAL.\n");

echo str_repeat("There's no place like home.\n", 3);

echo gettype($string_var);
echo "\n";
echo var_dump($string_var);