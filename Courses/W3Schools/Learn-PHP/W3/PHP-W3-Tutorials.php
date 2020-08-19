<?php

    // PHP opening and closing Tags syntax
        // The default syntax starts with "<? php" and ends with ? >.
        // short tags <? ? > (together)
        // HTML Script tags
        // <script language="php">
        // echo "this is a HTML scrpt tag";
        // </script>

    // Variables
        // Start with $
        // Valid name starts with a letter A-Z or a-z or underscore _ followed by any numbers, letters or underscores
        // is case-sensitive
        $abc = 'Welcome';  //valid
        $Abc = 'W3resource.com'; //valid
        //$9xyz = 'Hello world';  //invalid; starts with a number
        $_xyz = 'Hello world';  //valid; starts with an underscore
        $_9xyz = 'Hello world';  //valid
        $aäa = 'Hello world';  //valid; 'ä' is (Extended) ASCII 228.

        // PHP is a loosely type language
            // type of variable does not need to be declared before using it
            $height = 3.5;
            $width = 4;
            $area=$height*$width;
            echo "Area of the rectangle is : $area";
        
        // PHP variables: Assigning by Reference
            // New variable can point to an original variable
            // Changes to new variable affect original & vice verse
            $foo='bob';
            $bar=&$foo;
            $bar="my $bar";
            echo $bar;
            echo '<br />';
            echo $foo; 
            /* OUTPUT
            my bob
                my bob */

        // PHP variable variables
            //Assign a variable to another variable
            $v='var1';
            echo $v; // prints var1
            $$v = 'var2'; 
            echo $$v; // prints var2
            echo $var1; // prints var2

        // PHP Variables Scope
            // local scope - created in a function
            // global scope - created outwith functions and not accessible within functions
                //global scope
                $x = 10;
                function var_scope()
                {
                //local scope
                $y=20;
                echo "The value of x is :  $x "."<br />";
                echo "The value of y is :  $y"."<br />";
                }
                var_scope();
                echo "The value of x is :  $x"."<br />";
                echo "The value of y is :  $y ";

        // The global keyword
            // To use these variables inside a function the variables
            $x=2;
            $y=4;
            $z=5;
            $xyz=0;
            function multiple()
            {
            global $x, $y, $z, $xyz; // now these variables are accessible in the function
            $xyz=$x*$y*$z;
            }
            multiple();
            echo $xyz;

        // PHP static variables
            // variables loose their values once a function completes
            // the below wont work as the variable will always be set to one at first
            // function test_variable()
            // {
            // $x=1;
            // echo $x;
            // $x++;
            // }
            // test_variable();
            // echo "<br>";
            // test_variable();
            // echo "<br>";
            // test_variable();
            // The below will work by added static keyword  
            function test_variable()
            {
            $x=1;
            echo $x;
            $x++;
            }
            test_variable();
            echo "<br>";
            test_variable();
            echo "<br>";
            test_variable();

            /*
            PHP : Reserve Words

            The words in the following table are reserve words and cannot be used as constants, 
            class names, function or method names. You can use them as variable names, but do not use as variable names to avoid confusion.

            PHP Keywords

            abstract |	and	   |     array() |  	as |	break
            case     | catch   | cfunction   |	class  |    clone 
            const	 | continue| declare	 | default |    do
            else	 | elseif  | enddeclare	 | endfor  | endforeach
            endif    |endswitch| endwhile	 | extends | final 
            for	foreach	function	global	goto (as of PHP 5.3)
            if	implements (as of PHP 5)	interface (as of PHP 5)	instanceof (as of PHP 5)	private (as of PHP 5)
            namespace (as of PHP 5.3)	new	old_function (PHP 4 only)	or	throw (as of PHP 5)
            protected (as of PHP 5)	public (as of PHP 5)	static	switch	xor
            try (as of PHP 5)	use	var	while	 
            Compile-time constants

            __CLASS__	_DIR__ (as of PHP 5.3)	_FILE_	__LINE__	__FUNCTION__
            __METHOD__	__NAMESPACE__ (as of PHP 5.3)	 	 	 
            Language constructs

            die()	echo()	empty()	exit()	eval()
            include()	include_once()	isset()	list()	require()
            require_once()	return()	print()	unset()	 
*/
    
    // PHP echo statement
        // Simple string display
        echo 'One line simple string.<br />'; 
        echo 'Two line simple string example<br />'; 
        echo 'Tomorrow I \'ll learn PHP global variables.<br />'; 
        echo 'This is a bad command : del c:\\*.* <br />'; 
        // Variable inside echo statement
        $abc='We are learning PHP';
        $xyz='w3resource.com';
        echo "$abc at $xyz <br />";
        // Simple variable display
        echo $abc;
        echo "<br />"; // creating a new line
        echo $xyz;
        echo "<br />"; // creating a new line
        // Displaying arrays
        $fruits=array('fruit1'=>'Apple','fruit2'=>'Banana');
        echo "Fruits are : {$fruits['fruit1']} and 
        {$fruits['fruit2']}" ;
            
            /*Output:
            We are learning PHP at w3resource.com
            We are learning PHP
            w3resource.com
            Fruits are : Apple and Banana */

        // PHP echo and HTML paragraph element
            // simple html statement.
            echo 'One line simple string.<br />';
            // display strings within paragraph with different color.
            echo "<p> <font color=blue>One line simple string in 
            blue color</font> </p>";
            echo "<p> <font color=red>One line simple string in red 
            color</font> </p>";
            echo "<p> <font color=green> One line simple string in 
            green color</font> </p>";

//PHP $GLOBALS (super global) variable
        // super global variable which can be used instead of 'global' keyword to access variables from global scope
     
        $s = 25;
        $t = 50;
        function subtraction()
        {
        $GLOBALS['v'] = $GLOBALS['t'] - $GLOBALS['s'];
        } 
        subtraction();
        echo $v;
    

// PHP: $_SERVER
        // an array which holds information of headers, paths, script locations
        /* $_SERVER has following basic properties:
        1. Set by web server.
        2. Directly related to the runtime environment of the current php script.
        3. It does the same job as $HTTP_SERVER_VARS used to do in previous versions of PHP */

// PHP: $_REQUEST, $_POST, $_GET
        // super global variable which is widely used to collect data after submitting html forms.
        // Suppose we want to see what data have been entered by the user in the name field, then code to do that will be:
        // <?php
        $name=$_REQUEST['name']; // $_POST is in the form so method
        echo $name;
        ?>
// $_POST
// This super global variable is widely used to handle form data
<form name="contact" method="post" action="next.php"> </form>
// Code of msg.php file:.
<?php
            echo "YOU have submitted the form"; 
            ?>
<?php
            if ($_POST['send'])
            include ('msg.php');
            ?>
// $_GET
// Here is an example:
<html>

<head>
    <title>Php contact form</title>
</head>

<body>
    <a href="get-pass.php?r=w3resourse.com&s=online-tutorial">This is to send data</a>
</body>

</html>
// Code of get-pass.php file:
<?php 
            echo $_GET['r']."is an ".$_GET['s'];
            ?>

// PHP : $_FILES, $_ENV, $_COOKIE, $_SESSION
// $_FILES
// super global variable which can be used to upload files.
// Here is the html code (upload.php):
<html>

<body>
    <form action="upload_file.php" method="post" enctype="multipart/form-data">
        <label for="file">Filename:</label>
        <input type="file" name="file" id="file" />
        <br />
        <input type="submit" name="submit" value="Submit" />
    </form>
</body>

</html>
// Code of files.php file:
<?php
            if ($_FILES["file"] > 0)
            {
            echo "You have selected a file to upload";
            }
            ?>

// $_ENV
// used to return the environment variables from the web server.
<?php
            echo "my username is ".$_ENV['username'];
            ?>

// $_COOKIE
// Cookies are small text files loaded from a server to a client computer storing some information regarding
// the client computer, so that when the same page from the server is visited by the user, necessary information can
// be collected from the cookie itself, decreasing the latency to open the page.
<?php
            setrawcookie();
            print_r($_COOKIE);
            ?>

// $_SESSION
// start a session by session_start();Then all the variables you store within a $_SESSION, you can access it from
anywhere on the server.
<?php
            session_start();
            $_SESSION['w3resource']='The largest online tutorial';
            echo $_SESSION['w3resource'];
            ?>