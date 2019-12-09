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


   
