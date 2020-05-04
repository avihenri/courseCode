//DOM Selectors
//--------------
//getElementsByTagName
//getElementsByClassName
//getElementById

//querySelector
//querySelectorAll

//getAttribute
//setAttribute

//##Changing Styles
//style.{property} //ok

//className //best
//classList //best

//classList.add
//classList.remove
//classList.toggle

//##Bonus
//innerHTML //DANGEROUS

//parentElement
//children

//##It is important to CACHE selectors in variables
/* Save what we are doing in a variable so not to use to much memory & the
browser doesn't need to check the DOM everytime you do the same task */
var h1 = document.querySelector("h1");
        // saves the h1 tag in the h1 variable

document.querySelector('h1').style.background = "yellow"; 
        //yellow needs to be a string & querySelector only selects the first h1 element
var h1 = document.querySelector('h1');
h1.className = "whatever";
        //Adds a class to an element
document.querySelector('li').classList;
        //Gets any classes in the first li element
document.querySelector('li').classList.add("class");
        //Adds a class to the first li element
document.querySelector('li').classList.remove("class");
        //Removes it
document.querySelector('li').classList.add("done"); //done = css strike through text
        //Adds strike through text
document.querySelector('li').classList.toggle("done"); 
        // toggles on and off strike through text

document.querySelectorAll('li')[1];
        // Selects the 2nd list item as they are an array in the DOM
document.querySelectorAll('li')[1].parentElement; 
        // Selects the ul
document.querySelectorAll('li')[1].parentElement.parentElement; 
        // Selects the parent of the ul
document.querySelectorAll('li')[1].parentElement.parentElement.children;
        // selects all the children of the ul parent element