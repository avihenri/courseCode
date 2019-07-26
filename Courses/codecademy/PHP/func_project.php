<!-- Mad Lib Functions  -->
<?php
    // Mad Libs require:
        // A short story with blank spaces (asking for different types of words).
        // Words to fill in those blanks.
        // Roses are <adjective> <noun> are blue <noun> is <adjective> And so are you!

        function generateStory($singular_noun, $verb, $color, $distance_unit)
        {
            $story = "\nThe $singular_noun are lovely, $color, and deep. \nBut I have promises to keep, 
            \nAnd $distance_unit to go before I $verb, \nAnd $distance_unit to go before I $verb. \n";
            return $story;    
        }
      echo generateStory("dogs", "eat", "purple", "miles");
      echo generateStory("cars", "cook", "vermilion", "kilometers");
      echo generateStory("empty voids", "speak", "beige", "miles");
      
      /* output
        The dogs are lovely, purple, and deep. 
        But I have promises to keep, 
        And miles to go before I eat, 
        And miles to go before I eat. 

        The cars are lovely, vermilion, and deep. 
        But I have promises to keep, 
        And kilometers to go before I cook, 
        And kilometers to go before I cook. 

        The empty voids are lovely, beige, and deep. 
        But I have promises to keep, 
        And miles to go before I speak, 
        And miles to go before I speak.  */
      