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
✅212.555.8731 */
   