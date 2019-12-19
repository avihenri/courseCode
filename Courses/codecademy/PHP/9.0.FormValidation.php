<?php
// FORM VALIDATION
    // REGULAR EXPRESSIONS
        // _regular expressions_—also known as regex or regexp - sequence of characters representing a pattern

    // Backend Validation
        // - async server-side validation - user gets notified before submitting but is slower than client-side
        // - after submit - is required to ensure an application’s security and sanitize all data.
/*Review
In this lesson, we’ve explored form validation from many angles. Let’s review what we covered:

Modern websites require a lot of information from their users and they collect a lot of this information through HTML forms.
It’s essential to validate the data submitted through forms to keep websites secure and to make sure they function correctly.
Regular expressions are sequences of characters that define patterns to look for in text. They are an important tool used in validating input.
Modern HTML comes with useful built-in methods for form validation.
Custom and complicated client-side validation can be accomplished with JavaScript.
Asynchronous requests to the server can perform back-end validations before a form has been submitted.
A final back-end validation of all data is required to ensure an application’s security and sanitize all data.*/

// INTRO TO REGULAR EXPRESSIONS
    // LITERALS
        // this is where reg exp contains exact text that we want to match
        // eg. regex a will match a, regex bananas will match bananas

    // ALTERNATION - |
        // Performed wiht the pipe | allows us to match either the characters preceding the pipe OR the characters after the pipe
        // The regex baboons|gorillas will match baboons in the text I love baboons, but will also match gorillas in the text I love gorillas.

    // CHARACTER SETS - [] & {}
        // Use square rackets [] to match one character from a series of characters to allow for miss spellings
        // The regex con[sc]en[sc]us will match consensus but also match the following three incorrect spellings: concensus, consencus, and concencus
            // the first brackets [sc] = different possibilities that come after con and before en
            // the second brackets [sc] = different possibilities that come after en and before us
        // Thus the regex [cat] will match the characters c, a, or t, but not the text cat.
        // ^ placed at the front of a character set ngates the set, matching any character that is not stated
            // = negated character sets
            // eg. regex [^cat] will match any character that is not c, a, or t, and would completely match each character d, o or g.
        // EXCERISE
            // Don't match - eat, mat, sat
            // Match - cat, hat, rat
            // [c{h}{r}]at 
    
    // WILDCARDS - .!
        // Don't care what characters are in the text, just that there are some
        // Wildcards will match any cingle character (letter, num., symbol, whitespace)
        // eg. match 9 character piece - ......... will match any 9 charcter words
        // eg. match I at . bananas will match anything that has I ate {something} bananas
        // to match a period = add a back slash \.
        // EXCERSICE
            // Don't match mouse, koala, snail
            // Match bear., lion., orca.,
            // ....\.

    // RANGES
        // [abc] will look for any a, b or c and so will [a-c]
        // regex I adopted [2-9] [b-h]ats will match - I adopted 4 bats as well as I adopted 8 cats and even I adopted 5 hats
        // Can match any Capital letter [A-Z], lowercase letter [a-z], any digit [0-9], or multiple ranges - [A-Za-z] any capital or lowercase letter
        // Don't match - ape, cow, ewe
        // Match - cub, dog, elk
        // [a-z][a-z][^ew]

    // Shorthand Character Classes
        // \w = word character class - represents [A-Za-z0-9_] - matches single uppercase, lowercase character, digit or underscore
        // \d = digit character class - represents [0-9] - matches a single digit character
        // \s = whitespace character - represents regex range [ \t\r\n\f\v] - matches a single space, tab, carriage return, line break, form feed or vertical tab
        // For example -  regex \d\s\w\w\w\w\w\w\w = digit, whitespace, 7 word characters = 3 monkeys
        // Negated shorthand classes
            // \W = non-word character - represents [^A-Za-z0-9_] - anything that is NOT - single uppercase, lowercase character, digit or underscore
            // \D = non-digit character class - represents [^0-9] - anything that is NOT - a single digit character
            // \S = whitespace character - represents regex range [^ \t\r\n\f\v] - anything that is NOT - a single space, tab, carriage return, line break, form feed or vertical tab

    // Grouping - also called captured groups
        // Uses parenthesis ( ) - lets us group regex together & allows us to limit alteration to part of the regex
        // Eg. I love (baboons|gorillas) - will match I love then match either baboons or gorillas

    // Quantifiers - Fixed
        // Uses curly parenthesis { } - lets us indicate the exact quantity of a character we want to match or provide a quantity range to match on
        // Eg. \w{3} - match exactly 3 word characters or \w{4,7} match min 4 word character and max 7
        // Eg. roa{3}r will match ro followed by 3 a's = roaaar or roa{3,7}r will match ro followed by at least 3 a's or max 7 = roaaar - roaaaaar - roaaaaaar
        // Important: quantifier are greedy - match the greatest quantity of characters they can
            // Eg. mo{2,4} will match moooo in string moooo and not moo or mooo

    // Optional Quantifiers
        // uses ? - allows us to indicate a character in regex is optional, or can appear 0 or 1 times
        // Eg. humor or humour - humou?r matches humo, then if letter u is there and then r
        // ? only applies to the character directly before it
        // EXAMPLE - \d\sducks?\sfor\sadoption\?
            // 1 duck for adoption?
            // 5 ducks for adoption?
            // 7 ducks for adoption?

    // Quantifiers - 0 or More, 1 or More
        // Kleane star = * - also a qualifier that matches the preceding character 0 or more times
            // meaning the character does not need to appear, can appear once, can appearmany many times
            // Eg. meo*w - will match me, followed by 0 or more o's followed by w
                // = meow, meoow, meoooooooooooooooow but not mew
            // to match * or + you need to add \ - my cat is a \*

    // Anchors
        // Anchors hat ^ - and dollar sign $ are used to match text at the start & end of a string respectively
        // Eg. ^Monkeys: my mortal enemy$ will match Monkeys: my mortal enemy but not Spider Monkeys: my mortal enemy in the wild
        // to match ^ and $ you need to add = My spider monkey has \$10\^6 in the bank = My spider monkey has $10^6 in the bank

/* Review
Do you feel those regular expression superpowers coursing through your body? Do you just want to scream ah+ really loud? Awesome! You are now ready to take these skills and use them out in the wild. Before beginning your adventures, let’s review what we’ve learned.

Regular expressions are special sequences of characters that describe a pattern of text that is to be matched
We can use literals to match the exact characters that we desire
Alternation, using the pipe symbol |, allows us to match the text preceding or following the |
Character sets, denoted by a pair of brackets [], let us match one character from a series of characters
Wildcards, represented by the period or dot ., will match any single character (letter, number, symbol or whitespace)
Ranges allow us to specify a range of characters in which we can make a match
Shorthand character classes like \w, \d and \s represent the ranges representing word characters, digit characters, and whitespace characters, respectively
Groupings, denoted with parentheses (), group parts of a regular expression together, and allows us to limit alternation to part of a regex
Fixed quantifiers, represented with curly braces {}, let us indicate the exact quantity or a range of quantity of a character we wish to match
Optional quantifiers, indicated by the question mark ?, allow us to indicate a character in a regex is optional, or can appear either 0 times or 1 time
The Kleene star, denoted with the asterisk *, is a quantifier that matches the preceding character 0 or more times
The Kleene plus, denoted by the plus +, matches the preceding character 1 or more times
The anchor symbols hat ^ and dollar sign $ are used to match text at the start and end of a string, respectively */

// REVIEW CHALLENGE
/*
ANSWER - \d?\s?\(?\d{3}\)?\s?\-?\.?\d{3}\-?\s?\.?\d{3,4}

✅718-555-3810
✅9175552849
✅1 212 555 3821
✅(917)5551298
✅212.555.8731 */ ?>
<?php   
// FORM HANDLING
    // Method POST = data submitted will be available to superglobal associtive array array - $_POST
        // using the name attribute we can gather the data - the name will be the key and the input will be the value ?>
        <form method="post" action="">
            Your Favorite Programming Language: <input type="text" name="language">
            <input type="submit" value="Submit Language">
        </form> 

    <!-- Simple Validation -->
        <?php
        $validation_error = "";
        $user_language = "";

        if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $user_language = $_POST["language"];
        if ($user_language != "PHP") {
            $validation_error = "* Your favorite language must be PHP!";
        } 
        }
        ?>
        <form method="post" action="">
        Your Favorite Programming Language: <input type="text" name="language" value="<?php echo $user_language;?>">
        <p class="error"><?= $validation_error;?></p>
        <input type="submit" value="Submit Language">
        </form>
            
        <!-- EXERCISE -->
        <?php
        function checkWord($input, $letter){
        if ($_SERVER["REQUEST_METHOD"] === "POST" && strtolower($input[0]) !== $letter) {
            return "* This word must start with the letter ${letter}!";
        } else {
            return "";
        }
        }
        ?>
        
        <h1>Time to Practice our ABCs</h1>
        <form method="post" action="">
            Enter a word that starts with the letter "a":
            <br>
            <input type="text" name="a-word" id="a-word" value=<?= $_POST["a-word"];?>>
            <br>
            <p class="error" id="a-error"><?= checkWord($_POST["a-word"], "a");?></p>
            <br>            
            Enter a word that starts with the letter "b":
            <br>
            <input type="text" id="b-word" name="b-word" value=<?= $_POST["b-word"];?>>
            <br>
            <p class="error" id="b-error"><?= checkWord($_POST["b-word"], "b");?></p>
            <br>
            Enter a word that starts with the letter "c":
            <br>
            <input type="text" id="c-word" name="c-word" value=<?= $_POST["c-word"];?>>
            <br>
            <p class="error" id="c-error"><?= checkWord($_POST["c-word"], "c");?></p>
            <br>
            <input type="submit" value="Submit Words">
        </form>
        <div>
            <h3>"a" is for: <?= $_POST["a-word"];?><h3>
            <h3>"b" is for: <?= $_POST["b-word"];?><h3>
            <h3>"c" is for: <?= $_POST["c-word"];?><h3>    
        <div>  

        <!-- BASIC DATA SANITIZING -->
        <!-- 
            Make data safe to display on the browser
            trim() - can be used to remove any whitespace before & after the input
            htmlspecialchars() - can be used to transform HTML entitites so the php interpreter doesn't recognise them as HTML
                this also prevents man-in-the-middle attacks
            -->
            <form method="post" action="">
            Enter some HTML:
            <br>
            <input type="text" name="html">
            <br>  
            <input type="submit" value="Submit">
            </form>
            <div>
            You entered:
                <?= htmlspecialchars($_POST["html"]) ?> 
            </div>  
        
        <!-- BASIC SANTITIZATION WITH filter_car() -->
            <!-- 
                https://www.php.net/manual/en/function.filter-var.php
                filter_var ( mixed $variable [, int $filter = FILTER_DEFAULT [, mixed $options ]] ) : mixed
                1st argument - variable
                2nd arguement - ID representing the type of filtering that should be performed - https://www.php.net/manual/en/filter.filters.sanitize.php
                - returns either the sanitized input or false
             -->
            <?=
             $bad_email = '<a href="www.evil-spam.biz">@gmail.com';
            echo filter_var($bad_email, FILTER_SANITIZE_EMAIL);
            // Prints: ahref=www.evil-spam.biz@gmail.com  ?>
            <!-- 
                FILTER_SANITIZE_EMAIL - trims whitespace throughout input, removes dangerous characters                
             -->
             <?php
            $validation_error = "";
            $user_url = "";
            $form_message = "";
            // Write your code here:
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $user_url = $_POST["url"];
            if (!filter_var($user_url, FILTER_VALIDATE_URL)) {
                $validation_error = "* This is an invalid URL.";
                $form_message = "Please retry and submit your form again."; 
            } else {    
            $form_message = "Thank you for your submission.";
            }            
            } 
            ?>
            <form method="post" action="">
            Your Favorite Website: 
            <br>
            <input type="text" name="url" value="<?php echo $user_url;?>">
            <span class="error"><?= $validation_error;?></span>
            <br>
            <input type="submit" value="Submit">
            </form>
            <p> <?= $form_message;?> </p> 
                
        
<!-- USING OPTION WITH FILTER_VAR() -->
    <?php
        function validateAdult ($age){
            $options = ["options" => ["min_range" => 18, "max_range" => 124]];  
            if (filter_var($age, FILTER_VALIDATE_INT, $options)) {
              echo("You are ${age} years old.");
            } else {
              echo("That is not a valid age.");
            }
          }
          
          validateAdult(18); // Prints: You are 18 years old.
          validateAdult(124); // Prints: You are 124 years old.
          validateAdult(8); // Prints: That is not a valid age.
          validateAdult(200); // Prints: That is not a valid age. 
    // $options = 3rd arguement - helps validate an integer within a specified range when using integer validation filter FILTER_VALIDATE_INT
    $message = "";
    $month_error = "";
    $day_error = "";
    $year_error = "";
      
    // Create your variables here:
    $month_options = ["options"=>["min_range"=>1, "max_range"=>12]];
    $day_options = ["options"=>["min_range"=>1, "max_range"=>31]];
    $year_options = ["options"=>["min_range"=>1903, "max_range"=>2019]];
    
    // Define your function here:
    function validateInput($type, &$error, $options_arr) {
      if (!filter_var($_POST[$type], FILTER_VALIDATE_INT, $options_arr)) {
        $error = "* Invalid ${type}";
        return false;
      } else {
        return true;
      }
    } 
    
    
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Uncomment the code below:
        $test_month= validateInput("month", $month_error, $month_options);
        $test_day= validateInput("day", $day_error, $day_options);
        $test_year= validateInput("year", $year_error, $year_options);    
        if ($test_month && $test_day && $test_year){
          $message = "Your birthday is: {$_POST["month"]}/{$_POST["day"]}/{$_POST["year"]}";
        }  
      }
    
    ?>
    
    <form method="post" action="">
        Enter your birthday:
        <br>
        Month: <input type="number" name="month" value="<?= $_POST["month"];?>">
        <span class="error"><?= $month_error;?>		</span>
      <br>
        Day: <input type="number" name="day" value="<?= $_POST["day"];?>">
      <span class="error"><?= $day_error;?>		</span>
        <br>  
        Year: <input type="number" name="year" value="<?= $_POST["year"];?>">  
        <span class="error"><?= $year_error;?>		</span>
        <br>
        <input type="submit" value="Submit">
    </form>
        <p><?= $message;?></p>