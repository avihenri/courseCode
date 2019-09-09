<?php

// PHP AND HTML
    // Introduction
        // PHP & HTML work together

    // What is the Front-End?
        // HTML, CSS, Javascript = front-end
        // Static asset = image - something that doesn't change
        // browser makes the requests for information & receives the responses
        
    // What is the Back-End?
        // 1. web server = servers content (static)
        // 2. application server = programming logic that delivers dynamic content
            // also usually handles security & interacting with data
        // 3. database = data store

    // PHP in HTML
        // use opening and closing tags to run php scripts within html <?php> 
        // PHP processor = read entire files, eveluates php, translates it to html & pass it to web server to view online
       ?> <html>
        <body>
        <h1>PHP and HTML</h1>
        <p>This is HTML</p>
        <?php
          echo "<p>This is PHP</p>";
        ?>
        </body>
        </html>
<?php

    // Beyond Strings
        // We can also incorporate more complex PHP within our scripts. ?>
        <?php
        $lucky_number = 5 * 2 - 1;
        echo "<h1>Your lucky number is ${lucky_number}</h1>"; //Your lucky number is 9
        ?>

        <?php
        function makeHeaderGreeting ($name){
        return "<h1>Hello, ${name}!</h1>";
        }
        echo makeHeaderGreeting("World"); // Hello, World!
        ?>
    <!-- WORKING EXAMPLE -->
        <?php 
        $about_me = [
        "name" => "Aisle Nevertell",
        "birth_year" => 1902,
        "favorite_food" => "pizza"
        ];

        function calculateAge ($person_arr){
        $current_year = date("Y");
        $age = $current_year - $person_arr["birth_year"];
        return $age;
        }
        ?>
        <h1>Welcome!</h1>
        <h2>About me:</h2>
        <?php
        #Add your code here
            echo "<h3> Hello " . $about_me["name"] . "</h3>";
            echo "<p> I am " . calculateAge($about_me) . " years old</p>";
            echo "<div>My fav food is " . $about_me["favorite_food"] . "</div>";
        ?>
        <h2>Now tell me a little about you.</h2>
        <!-- OUTPUTS:
            Welcome!
            About me:
            Hello Aisle Nevertell
            I am 117 years old

            My fav food is pizza
            Now tell me a little about you. -->

            <!-- Review
            In this lesson, you’ve begun to learn how to use PHP to generate HTML. This will become even more powerful 
            as we learn how to get information from the client and use that to create dynamic websites.   
            Let’s review what we’ve learned so far:
            The front-end of a website consists of JavaScript, CSS, HTML, images, and other static assets sent to the client.
            When we navigate to a website the browser is the client, and it sends a request to the back-end for all the assets needed to view and interact with the website.
            The back-end consists of a web server and all the logic and data needed to create and maintain a website or web application.
            PHP is a back-end language.
            PHP can be used to generate HTML files.
            We embed PHP scripts within HTML by inserting PHP code between the opening (<//?php) and closing (?>) tags. -->

<?php
// HTML FORM HANDLING IN PHP
// Introduction
    // The below translates to HTML
    <?php echo "<p>PHP interprets this and turns it into HTML</p>";?>
    // or shorthand : 
    <?="<p>PHP interprets this and turns it into HTML</p>";?>

    // Request Superglobals
        // Superglobals = automatic global variables - available in all scopes
        $GLOBALS // contains associative array of var's which define in global scope of the script
        $_SERVER // contains associative array of var's such as, headers, paths & cript locations - created by the web server
        $_GET // contains associative array of var's passed to current script using query parameteres in the URL
        $_POST // contains associative array of var's passed to current script using a form submitted using POST method
        $_FILES // contains associative array of var's of items uploaded to current script via POST
        $_COOKIE // contains associative array of var's passed to the current sctip via http cookies
        $_SESSION // contains associative array of var's session variables - https://www.php.net/manual/en/ref.session.php
        $_REQUEST //  contains the contents of $_GET, $_POST & $_COOKIE
        $_ENV // contains associative array of var's passed to current script via environment method


        // Review
        // You’re ready to start handling forms in PHP!

        // To review:

        // <?= is shorthand for <?php echo.
        // PHP provides superglobals which can be accessed anywhere in the script.
        // $_GET is an associative array containing data from a GET request.
        // $_POST is an associative array containing data from a POST request.
        // $_REQUEST is an associative array containing data from both GET and POST requests. It should only be used if you don’t care which method was used.
        // The array keys in the PHP request superglobals are set by the name attributes in the HTML form, which need to be unique.
        // The action attribute is used to specify which file should handle data from the form request.



