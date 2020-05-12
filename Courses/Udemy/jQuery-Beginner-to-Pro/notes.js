/*
INTRO
- client side scripting
- started 2006, js wasn't as powerful
- introduced chaining
- use with css
- supported on all browsers
- large library
- open source
- ajax support
- easy to use
- lots of plugins

DEV SETUP - (ALREADY SET UP)
- Course uses brackets & chrome dev tools
- Hosted library - cdn

<script src="https://code.jquery.com/jquery-3.5.1.slim.js" integrity="sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM=" crossorigin="anonymous"></script>

- in console do window.jQuery to tell if you have it in the web page

FIRST jQUERY FILE
- Use the below at the bottom of the file in a script tag -
$(document).ready(function() {
    // code here
});

IMAGES & ATTRIBUTES
- Placeholder images - placeholders.com

SELECTORS & UPDATING MULTIPLE ITEMS
eq - equal to
gt - greater than
lt - less than
$('li:gt(3)').css('color, 'red);
nth-child
filter() - filter elements with the same selector
$(this).filter('.highlight).css('color', 'red');
has() - any descendants with a selector

ADVANCED FILTERING
map - passes elements in a set into a function to create a new object
var elObj = $('.highlight').map(function() {
    return $(this).html(); // brings back an array of the html for el's that have highlight class
});
slice - similar to map - reduces el's to a subset/array
$('li).slice(3).css('background-color', 'yellow'); starts from the 3rd element (0,1,2,3)
$('li).slice(3, 7).css('background-color', 'yellow'); starts from the 3rd el and ends on 7th el 

INTRO TO TRAVERSING
Similar to filtering
children() - gets any children of an element
var elKids = $('p').children();
parent() - gets the parent of an element
var elParent = $(this).parent();

next()
previous()
closest()



*/