<?php
// PHP NUMBERS
// Numbers
    // two types
        // Integers - positive & nagative
        // Floating - decimal numbers
        echo 5; // Prints: 5
        echo -22.8; // Prints: -22.8

        $my_int = 78;
        $my_float = -897.21;        
        echo $my_int; // Prints: 78
        echo $my_float; // Prints: -897.21

// Addition and Subtraction
    // operators: Subtract ( - ) and addition ( + )
    echo 5 + 1; // Prints: 6
    echo 6.6 + 1.2; // Prints: 7.8
    echo 198263 - 263;  // Prints: 198000
    echo -22.8 - 19.1; // Prints: -41.9

// Using Number Variables
    $tadpole_age = 7;
    $lily_age = 6; 
    $age_difference = $tadpole_age - $lily_age;
    echo $age_difference; // Prints 1

    $favorite_num = 22;
    echo $favorite_num + 1; // Prints 23
    echo $favorite_num; //Prints 22

// Multiplication and Division
    // operators: multiply ( * ) and divide ( / )
    echo 2 * 3; // Prints: 6
    echo -21 / 7; // Prints: -3

    $num_cookies = 24;
    $num_friends = 7;
    $cookies_per_friend = $num_cookies / $num_friends;
    echo $cookies_per_friend; // Prints: 3.4285714285714

    $num_languages = 4;
	$months = 11;
	$days = $months * 16;
	$days_per_language = $days / $num_languages;	
	echo $days_per_language; // 44

// Exponentiation   
    // opertor: **
    // square a number by raising it to the power of 2:
    echo 4 ** 2; // Prints: 16

    echo 2.89 ** 3.2;  // Prints: 29.845104015297
    echo 10 ** -1; // Prints: 0.1

// Modulo
    // Operator: % - returns remainder after the left operand is divided by the right
    echo 7 % 3; // Prints: 1

// Order of Operations
    // Special Ranking:
        // Operations will be evaluated in the following order:
            // Any operation wrapped in parenthesis (())
            // Exponents (**)
            // Multiplication (*) and division (/)
            // Addition (+) and subtraction (-)
            echo 1 + 3 * 9; // Prints: 28 (3*9 is first = 27 and + 1 = 28)

        // WORKING EXMPLE:
        /* At the start of the day I had $94.
            I spent $4.25 on coffee
            A friend gave me $7 that he owed me
            I went out for a meal. The bill was $23.50, but I also gave a 20% tip.
            Some friends and I found $20 on the ground and split it four ways
            */
            echo 94 - 4.25 + 7 - (23.50 * 1.2) + (20 / 4);

// Mathematical Assignment Operators
    //  Reassign a variable its old value & an opertion performed
    $savings = 800;
    $bike_cost = 75;
    $savings = $savings - $bike_cost;
    echo $savings; // Prints: 725

    /*
    Operation:	Long Syntax:	Short Syntax:
    Add	$x =    $x + $y	        $x += $y
    Subtract	$x = $x - $y	$x -= $y
    Multiply	$x = $x * $y	$x *= $y
    Divide	    $x = $x / $y	$x /= $y
    Mod	$x =    $x % $y	        $x %= $y
    */
    // refacter
    $savings = 800;
    $bike_cost = 75;
    $savings -= $bike_cost;
    echo $savings; // Prints: 725

    $my_num = 80;
	$answer = $my_num;
	$answer += 2;
	$answer *= 2;
	$answer -= 2;
	$answer /= 2;
	$answer -= $my_num;
    echo $answer;
    // output: will always be 1 no matter the inital number
  
  // Review
    /*
        Operations have an order of precedence meaning that certain types of operations in a 
        chain will be evaluated before others: first evaluated will be any operation wrapped 
        in parenthesis (()), next exponents (**), then multiplication (*) and division (/), and 
        finally addition (+) and subtraction (-). The acronym PEMDAS can be a helpful way of 
        remembering the order.
        We can assign number values to variables and then perform numerical operations with them.
        We can use mathematical assignment operators as a shorthand when reassigning number variables

    */

    //testing commit