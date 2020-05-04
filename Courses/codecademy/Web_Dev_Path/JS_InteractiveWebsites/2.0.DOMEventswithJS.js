// DOM EVENTS WITH JAVASCRIPT
    // What is an Event?
        // Mouse click, webpages files loading in the browser, swiping right on image
    
    // Event Handler Registration
        // JS interprets events as event objects with properties & methods
        // Create an event handler on specific event = creates a property of the event object
        // event handler func registers as a property attached to the DOM element (event target)
        let eventTarget = document.getElementById('targetElement'); // access the DOm element 
        eventTarget.onclick = function() {
          // this block of code will run
        }
        // WORKING EXAMPLE
        let readMore = document.getElementById('read-more')
        let moreInfo = document.getElementById('more-info')        
        // Write your code here:
        readMore.onclick = function() {
          moreInfo.style.display = 'block';
        }

    // Adding Event Handlers
        // Best practice = create named event handler functions
        let eventHandlerFunction = function() {
            // this block of code will run
          }          
          eventTarget.onclick = eventHandlerFunction;
        // .addEventListener() - common syntax for registering event handlers
          // requires 2 arguments - event type = string & event handler = function
          eventTarget.addEventListener('click', eventHandlerFunction);
          // used to allow multiple event handlers to be registered to a single event
            // Add the code you want to test below:
            let view = document.getElementById('view-button');
            let close = document.getElementById('close-button');
            let codey = document.getElementById('codey');
            let open = function() {
            codey.style.display = 'block';
            close.style.display = 'block';
            };
            let hide = function() {
            codey.style.display = 'none';
            close.style.display = 'none';
            };
            view.onclick = open;
            close.onclick = hide;
            // Write your code here
            const textChange = function () {
            view.innerHTML = 'Hello, World!';
            }            
            const textReturn = function() {
            view.innerHTML = 'View';
            }            
            view.addEventListener('click', textChange);
            close.addEventListener('click', textReturn);

    // Removing Event Handlers
        // .removeEventListener() - reverse .addEventListener()
        // stops code from listening 
        // requires two arguments - event type = string & event handler = function
        eventTarget.removeEventListener('click', eventHandlerFunction);
        // event handler function needs to be the same as the event handler func called on addEventListener()
        // LOCK DOOR -
        let door = document.getElementById('door');
        let unlock = document.getElementById('unlock');
        let lock = document.getElementById('lock');
        let sign = document.getElementById('sign');
        let cafeImage = document.getElementById('image');        
        cafeImage.hidden = true;        
        let openDoor = function() {
          door.hidden = true;
          cafeImage.hidden = false;
        }        
        let closeDoor = function(){
          door.hidden = false;
          cafeImage.hidden = true;
        }        
        unlock.onclick = function() {
          sign.innerHTML = 'OPEN';
          unlock.style.backgroundColor = '#6400e4';
          lock.style.backgroundColor = 'lightgray';
        }        
        lock.onclick = function() {
          sign.innerHTML = 'CLOSED';
          lock.style.backgroundColor = '#6400e4';
          unlock.style.backgroundColor = 'lightgray';
        }        
        unlock.addEventListener('click', function(){
          door.addEventListener('click', openDoor);
          cafeImage.addEventListener('click', closeDoor);
        })        
        // Write your code here
        lock.addEventListener('click', function() {
          door.removeEventListener('click', openDoor)
        });

    // Event Object Properties
        // JS stores events as event objects with properties & methods
        // there are pre-determined properties associated with event objects
        // Call these properties to see info
            // .target = access the element that triggered the event
            // .type = property to access the name of the event
            // .timestamp = access the number of milliseconds that passed since the document loaded & event was triggered
            let social = document.getElementById('social-media');
            let share = document.getElementById('share-button');
            let text = document.getElementById('text');
            // Write your code below
            let sharePhoto = function(event) {
            event.target.style.display = 'none';
            text.innerHTML = 'You share the puppy in ' 
            + event.timeStamp + ' ms.';
            }
            share.onclick = sharePhoto;

    // Event Types
        // load event - fires after website files completely load
        // This variable stores the "Pick a Color" button
        let button = document.getElementById('color-button');
        // This variable stores the "Mystery Color" button
        let mysteryButton = document.getElementById('next-button');
        // This random number function that will creates color codes for the randomColor variable
        function rgb(num) {
        return Math.floor(Math.random() * num);
        }
        // Write your code below
        let colorChange = function (event) {
        let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
        event.target.style.backgroundColor = randomColor;
        }
        button.onclick = colorChange;
        mysteryButton.onwheel = colorChange;

        // These variables store the boxes on the side
            let itemOne = document.getElementById('list-item-one');
            let itemTwo = document.getElementById('list-item-two');
            let itemThree = document.getElementById('list-item-three');
            let itemFour = document.getElementById('list-item-four');
            let itemFive = document.getElementById('list-item-five');
            let resetButton = document.getElementById('reset-button');

            // This function programs the "Reset" button to return the boxes to their default styles
            let reset = function() {
            itemOne.style.width = ''
            itemTwo .style.backgroundColor = ''
            itemThree.innerHTML = 'The mouse must leave the box to change the text'
            itemFive.style.display = "none"
            };
            resetButton.onclick = reset;

            // Write code for the first list item
            itemOne.onmouseover = function(){
            itemOne.style.width = '430px';
            };

            // Write code for the second list item
            itemTwo.onmouseup = function() {
            itemTwo.style.backgroundColor = 'orange';
            }

            // Write code for the third list item
            itemThree.onmouseout = function() {
            itemThree.innerHTML = 'The mouse has left the element.';
            }

            // Write code for the fourth list item
            itemFour.onmousedown = function() {
            itemFive.style.display = 'block';
            }

    // Keyboard Events
        let ball = document.getElementById('float-circle');

        // Write your code below
        let up = function() {
        ball.style.bottom = '250px';
        };
        let down = function() {
        ball.style.bottom = '50px';  
        };
        
        document.onkeydown = up;
        document.onkeyup = down;

    /*
    DOM EVENTS WITH JAVASCRIPT
    Review
    Congrats, you completed the lesson! Now you’ve learned about JavaScript events and you can leverage these events on the DOM to create interactivity with event handlers.

    Let’s review what you’ve learned:

    JavaScript engines register events as objects with properties and methods associated with them.
    Event handlers are registered as properties of their event object.
    Event object properties like .target, .type, and .timeStamp are used to provide information about the event.
    The .addEventListener() method can be used to add multiple event handler functions to a single event.
    The .removeEventListener() method stops specific event handlers from “listening” for specific events firing. */

  // QUIZ
      // Events can also be browser manipulations! Not just on the DOM

      // Events are the user interactions and browser manipulations on the document object model, the event handler functions are the responses to this.

      // not all DOM events have event handlers associated with them.

      // JavaScript interprets events as event object that store event information residing in properties and methods.

      // .addEventListener method is good for large code & it can be used to add multiple event handlers to a specific event

      // The event target is the DOM element that the event fires on, which does not need to be the element being modified.

      //  event properties can hold data like the event target or event type.

