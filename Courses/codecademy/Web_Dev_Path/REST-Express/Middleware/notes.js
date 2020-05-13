/*

======================================================================================
LESSON ONE - MIDDLEWARE
======================================================================================
DRYing Code with Functions
*/
const addFive = number => {
    const fiveAdded = number + 5;
    console.log(`Your number plus 5 is ${fiveAdded}`);
  }
  
  const addTen = number => {
    const tenAdded = number + 10;
    console.log(`Your number plus 10 is ${tenAdded}`);
  }
  
  const addTwenty = number => {
    const twentyAdded = number + 20;
    console.log(`Your number plus 20 is ${twentyAdded}`);
  }
  // above turns into...
  const addNumber = (number, addend) => {
    const numAdded = number + addend;
    console.log(`Your number plus ${addend} is ${numAdded}`);
  }
/* 
DRYing Routes With app.use()
- Use middleware to execute code between server receiving a request and sending a response
- In Express.. middleware is a function
- Can perform logic on req & res objects
  - inspecting a req, perform login on req, attaching info to res, attaching status to res, sending the res back to user
  or passing the req & res to another middleware
- EXAMPLE - 
app.use((req, res, next) => {
  console.log('Request received');
}); 
- it takes a callback function which is run for all requests
- we can access the request method wit - req.method
*/
const logRequest = (verb) => {
    console.log(`${verb} Request Received`);
  }
  // we turn the above function into a middleware func
  app.use((req, res, next) => {
    console.log(`${req.method} Request Received`);
  });

/* 
next()
- middleware processes in order of defined 
*/
app.use((req, res, next) => {
    console.log("A sorcerer approaches!");
    next();
  });
  
  app.get('/magic/:spellname', (req, res, next) => {
    console.log("The sorcerer is casting a spell!");
    next();
  });
  
  app.get('/magic/:spellname', (req, res, next) => {
    console.log(`The sorcerer has cast ${req.params.spellname}`);
    res.status(200).send();
  });
  
  app.get('/magic/:spellname', (req, res, next) => { // above func didn't use next so this was not called
    console.log("The sorcerer is leaving!");
  });
  
  // Accessing http://localhost:4001/magic/fireball 
  // Console Output:
  // "A sorcerer approaches!"
  // "The sorcerer is casting a spell!"
  // "The sorcerer has cast fireball"
/*
Request & Response Parameters
- (req, res, next)  same as routes as routes are also middleware
- each handling the req & res objects for a part of the stack
- Express routes have the option of sending res body & status code as this is a byproduct of them being middleware

Route-Level app.use() - single path
-  Express doc about app.use()
  app.use([path,] callback [, callback...])
  - takes an optional path parameter
*/
app.use('/sorcerer', (req, res, next) => {
    console.log('User has hit endpoint /sorcerer');
    next();
  });
/*
- in the above example
  - it will print the log if someone visits the web page /sorcerer endpoint
  - since app.use() was used it won't matter if it is a GET or POST or any other HTTP request
  - path was giveb as the argument = func will not execute if the user hits another path

  */
 app.use('/beans/:beanName', (req, res, next) => {
    const beanName = req.params.beanName;
    if (!jellybeanBag[beanName]) {
      console.log('Response Sent');
      return res.status(404).send('Bean with that name does not exist');
    }
    req.bean = jellybeanBag[beanName];
    req.beanName = beanName;
    next(); // passes control to next middleware
  });
  app.get('/beans/', (req, res, next) => {
    // const beanName = req.params.beanName; // **removed to a middleware func above so it can be reused**
    // if (!jellybeanBag[beanName]) {
    //   console.log('Response Sent');
    //   return res.status(404).send('Bean with that name does not exist');
    // }
    res.send(jellybeanBag);
    console.log('Response Sent');
  });
  /* 
  We use next as it can be helpful when checking user permissions.
    - if user has permission it will move to the next part of the stack

    next is called at the end of the middleware callback function. This placement ensures that if a bean does not exist, 
    the proper error status is sent, but if it does exist, we attach it to the request object and proceed to the next 
    matching route/middleware to complete the request-response cycle.

Route-level app.use() - Multiple Paths
- path parameter docs -
  - can be a string representing a path, a path pattern, a reg exp pattern to match paths, an array of combinations of any of these
*/
app.use(['/beans/', '/beans/:beanName'], (req, res, next) => {
    let bodyData = '';
    req.on('data', (data) => {
      bodyData += data;
    });
    req.on('end', () => {
      if (bodyData) {
        req.body = JSON.parse(bodyData);
      }
      next();
    });  
  });
  /*
Middleware Stacks
  - We have been using anonymous functions for our middleware but we can define functions and then using them as middleware
*/
const logging = (req, res, next) => {
    console.log(req);
    next();
  };  
  app.use(logging);
/*
- this means you can use it throughout the app without it being universal when you just call the function without the app.use
*/
  const authenticate = (req, res, next) => { // reusable middleware
    // code
  };  
  const validateData = (req, res, next) => { // reusable middleware
    // code
  };  
  const getSpell = (req, res, next) => {
    res.status(200).send(getSpellById(req.params.id));
  };  
  const createSpell = (req, res, next) => {
    createSpellFromRequest(req);
    res.status(201).send();
  };  
  const updateSpell = (req, res, next) => {
    updateSpellFromRequest(req);
    res.status(204).send();
  }  
  app.get('/spells/:id', authenticate, getSpell);  // use middleware as callback functions
  app.post('/spells', authenticate, validateData, createSpell);   // use middleware as callback functions
  app.put('/spells/:id', authenticate, validateData, updateSpell); // use middleware as callback functions

// create function -
const bodyParser = (req, res, next) => {
    let bodyData = '';
   req.on('data', (data) => {
     bodyData += data;
   });
   req.on('end', () => {
     if (bodyData) {
       req.body = JSON.parse(bodyData);
     }
     next();
   });
 }
 //  add it to the post functions
 app.post('/beans/', bodyParser, (req, res, next) => {});

/*
Open-Source Middleware: Logging
- Morgan() - DOC: https://github.com/expressjs/morgan#api
 - library for logging info
*/
const morgan = require('morgan');
// Logging Middleware - we change this..
app.use((req, res, next) => {
    console.log(`${req.method} Request Received`);
    next();
  });
// to..
app.use(morgan('tiny'));
// no longer need to console.log requests sent
/* Open-Source: Middleware: Body Parsing
 - body-parser - DOC: https://github.com/expressjs/body-parser#body-parser
 */
const bodyParser = require('body-parser');
// change this..
const bodyParser = (req, res, next) => {
    let queryData = '';
    req.on('data', (data) => {
      data = data.toString();
      queryData += data;
    });
    req.on('end', () => {
      if (queryData) {
        req.body = JSON.parse(queryData);
      }
      next();
    });
  };
  // to..
  app.use(bodyParser.json());

/* 
Error Handling Middleware
- error handling middleware needs to be the last app.use() in your file
- we want to pass any errors from the routes to the error handler
*/
app.use((err, req, res, next) => { // new err param
  console.error(err.stack);
  res.status(500).send('Something broke!');
}); 
/*
- we can call the next() with a argument which will call the error middleware
but many other error-handling techniques could be employed (like logging, re-attempting the failed operation, and/or emailing the developer).
*/
app.use((req, res, next) => {
    const newValue = possiblyProblematicOperation();
    if (newValue === undefined) {
      let undefinedError = new Error('newValue was not defined!'); // error 
      return next(undefinedError); // called here
    }
    next();
  });
  
  app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).send(err.message);
  });
  
  // or

  app.post('/beans/:beanName/remove', (req, res, next) => {
    const numberOfBeans = Number(req.body.number) || 0;
    if (req.bean.number < numberOfBeans) {
      const error = new Error('Not enough beans in the jar to remove!')
      error.status = 400;
      return next(error);
    }
    req.bean.number -= numberOfBeans;
    res.send(req.bean);
  });

  app.use((err, req, res, next) => {
    if (!err.status) {
      err.status = 500;
    }
    res.status(err.status).send(err.message);
  });

  // REVIEW CHALLENGE CODE -
  const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

const cards = [
  {
    id: 1,
    suit: 'Clubs',
    rank: '2'
  },
  {
    id: 2,
    suit: 'Diamonds',
    rank: 'Jack'
  },
  {
    id: 3,
    suit: 'Hearts',
    rank: '10'
  }
];
let nextId = 4;

// Logging
if (!process.env.IS_TEST_ENV) {
  app.use(morgan('short'));
}

// Parsing
app.use(bodyParser.json());

// Find card
app.use('/cards/:cardId', (req, res, next) => {
  const cardId = Number(req.params.cardId);
  const cardIndex = cards.findIndex(card => card.id === cardId);
  if (cardIndex === -1) {
    return res.status(404).send('Card not found');
  }
  req.cardIndex = cardIndex;
  next();
});

const validateCard = (req, res, next) => {
  const newCard = req.body;
  const validSuits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  const validRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  if (validSuits.indexOf(newCard.suit) === -1 || validRanks.indexOf(newCard.rank) === -1) {
    return res.status(400).send('Invalid card!');
  }
  next();
};

// Get all Cards
app.get('/cards/', (req, res, next) => {
  res.send(cards);
});

// Create a new Card
app.post('/cards/', validateCard, (req, res, next) => {
  const newCard = req.body;
  newCard.id = nextId++;
  cards.push(newCard);
  res.status(201).send(newCard);
});

// Get a single Card
app.get('/cards/:cardId', (req, res, next) => {
  res.send(cards[req.cardIndex]);
});

// Update a Card
app.put('/cards/:cardId', validateCard, (req, res, next) => {
  const newCard = req.body;
  const cardId = Number(req.params.cardId);
  if (!newCard.id || newCard.id !== cardId) {
    newCard.id = cardId;
  }
  cards[req.cardIndex] = newCard;
  res.send(newCard);
});

// Delete a Card
app.delete('/cards/:cardId', (req, res, next) => {
  cards.splice(req.cardIndex, 1);
  res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
  

/*

======================================================================================
LESSON TWO - ROUTER PARAMETERS
======================================================================================

INTRO
With Express we will run into wanting certain info in a req URL & using that info to id the data that is being requested
- example -
*/
app.get('/sorcerers/:sorcererName', (req, res, next) => {
  const sorcerer = Sorcerers[req.params.sorcererName]; // line same as below 
  res.send(sorcerer.info);
});

app.get('/sorcerers/:sorcererName/spellhistory', (req, res, next) => {
  const sorcerer = Sorcerers[req.params.sorcererName]; // here too
  const spellHistory = Spells[sorcerer.id].history;
  res.send(spellHistory);
});
/*
router.param()
- Express has a method for this
- We can write a function that will do the lookup and add to req object
*/
app.param('spellId', (req, res, next, id) => { // id has been passed as 4th argument
  let spellId = Number(id);
    try {
      const found = SpellBook.find((spell) => { // look for id in spell array
        return spellId === spell.id; // if found return it
      })
      if (found) { // if found 
        req.spell = found; // attach it to the req object - reference with req.spell
        next();
      } else { // if the requested spell does not exist throw an error 
        next(new Error('Your magic spell was not found in any of our tomes'));
      };
    } catch (err) {
      next(err) // if not found throw error (to error handling middleware)
    }
});

app.param('spiceId', (req, res, next, id) => {
  const spiceId = Number(id);
  const spiceIndex = spiceRack.findIndex(spice => spice.id === spiceId);  
  if (spiceIndex !== -1){
    req.spiceIndex = spiceIndex;
    next();
  } else {
    res.sendStatus(404);
  }
});

/*
Merge Parameters
- when building web end points - we might need access to some property of a complex object
- To do this we do a nested router
  - invoked in another router
  - pass parameters the parent router has access to - pass special config object when defining router
  - example  
*/
  // Two endpoints
  const sorcererRouter = express.Router();
  const familiarRouter = express.Router({mergeParams: true}); // mergeParameters  tells Express familiarRouter has access to parents passed into sorcererRouter
    // familiar is nested in sorcerer endpoint, sorcerer has multiple familiars
    // below tells express that familiarRouter is the same path as sorcererRouter with addition path /:sorcererId/familiars
  sorcererRouter.use('/:sorcererId/familiars', familiarRouter); 

  sorcererRouter.get('/', (req, res, next) => {
    res.status(200).send(Sorcerers);
    next();
  });

  sorcererRouter.param('sorcererId', (req, res, next, id) => {
    const sorcerer = getSorcererById(id);   
    req.sorcerer = sorcerer;
    next();
  });

  familiarRouter.get('/', (req, res, next) => {
    res.status(200).send(`Sorcerer ${req.sorcerer} has familiars ${getFamiliars(sorcerer)}`);
  });

  app.use('/sorcerer', sorcererRouter); 


spicesRouter.use('/spice-racks/:spiceRackId/spices');


/*



======================================================================================
LESSON ONE - CODE CHALLENGES
======================================================================================

This server currently sends the same response for ‘/whatis/apple’, ‘/whatis/orange’, and 
‘/whatis/banana’. Write a function to send the same response, and DRY the code by using 
that function as a callback for all three routes.
*/
// BEFORE
const express = require('express');
const app = express();

const sendFruitResponse = (req, res, next) => {};
app.get('/whatis/apple', (req, res, next) => {
  res.send('fruit');
});
app.get('/whatis/orange', (req, res, next) => {
  res.send('fruit');
});
app.get('/whatis/banana', (req, res, next) => {
  res.send('fruit');
});

// AFTER
const express = require('express');
const app = express();
// Finish this function and use it in the routes below
const sendFruitResponse = (req, res, next) => {
  res.send('fruit');
};
app.get('/whatis/apple', sendFruitResponse);
app.get('/whatis/orange', sendFruitResponse);
app.get('/whatis/banana', sendFruitResponse);

/*
The current moodleware middleware function should attach a mood property to the request object 
on every request and then continue on with the rest of the route matching. Something is missing! 
Fix it so that it moves on after attaching the req.mood.
*/
// BEFORE
const express = require('express');
const app = express();

const moods = ['happy', 'exuberant', 'fanatical about middleware'];
const moodleware = (req, res, next) => {
  const randomMoodIndex = Math.floor(Math.random() * moods.length);
  req.mood = moods[randomMoodIndex];
  next(); // after **added**
}
app.use(moodleware);
app.get('/randomMood', (req, res, next) => {
  res.send(req.mood);
});
/*
Complete the timeMiddleware function to DRY the current application by attaching the currentTime to 
the request body as date. Use this in all routes and eliminate the duplicate code.
*/
// BEFORE 
const express = require('express');
const app = express();

const database = {
  snacks: ['chips', 'apple', 'cookies'],
  sides: ['beans and rice', 'cole slaw', 'broccoli'],
  appetizers: ['oysters', 'dumplings', 'smoked almonds'],
};

// Add your code here:
const timeMiddleware = () => {};

app.get('/snacks', (req, res, next) => {
  const currentTime = Date.now();
  res.send(`Snacks as of ${currentTime}: ${database.snacks}`);
});

app.get('/sides', (req, res, next) => {
  const currentTime = Date.now();
  res.send(`Sides as of ${currentTime}: ${database.sides}`);
});

app.get('/appetizers', (req, res, next) => {
  const currentTime = Date.now();
  res.send(`Appetizers as of ${currentTime}: ${database.appetizers}`);
});
// AFTER
const express = require('express');
const app = express();

const database = {
  snacks: ['chips', 'apple', 'cookies'],
  sides: ['beans and rice', 'cole slaw', 'broccoli'],
  appetizers: ['oysters', 'dumplings', 'smoked almonds'],
};

// Add your code here:
const timeMiddleware = (req, res, next) => {  
  req.date = Date.now();
  next();
};

app.use(timeMiddleware);

app.get('/snacks', (req, res, next) => {
  res.send(`Snacks as of ${req.date}: ${database.snacks}`);
});

app.get('/sides', (req, res, next) => {
  res.send(`Sides as of ${req.date}: ${database.sides}`);
});

app.get('/appetizers', (req, res, next) => {
  res.send(`Appetizers as of ${req.date}: ${database.appetizers}`);
});

/*
The server will handle requests for existing food indices as expected, but it will call next with an error in response to a request for a non-existent food.
Complete the errorHandler function as an Express error handling function. It should set the response status equal to the error object’s status property 
if it exists, and 500 by default if there is no status on the error object. It should send the message property of the error object as its response.
*/
const express = require('express');
const app = express();

const foods = ['pasta carbonara', 'bánh mì', 'cucumber salad'];

app.get('/foods/:index', (req, res, next) => {
  if (foods[req.params.index]) {
    res.send(req.params.index);
  } else {
    const err = Error('Invalid index!');
    err.status = 404;
    next(err);
  }
});

const errorHandler = () => {}; // before
const errorHandler = (err, req, res, next) => { // after
  const status = err.status || 500;
  res.status(status).send(err.message);
};

app.use(errorHandler);
/*
Import the morgan logging middleware to log all requests. Use the predefined format ‘short’ instead of ‘tiny’.
*/
const express = require('express');
const app = express();
// Add your code below:
const morgan = require('morgan');
app.use(morgan('short'));
// Add your code above

app.get('/say-hi', (req, res, next) => {
  res.send('Hi!');
});

app.get('/say-bye', (req, res, next) => {
  res.send('Bye!');
});

// Use app.use and the indexExists middleware function for all /data/:index paths.
const express = require('express');
const app = express();

const data = [1, 2, 3, 4, 5];

const indexExists = (req, res, next) => {
  const index = req.params.index;
  if (data[index]) {
    next();
  } else {
    res.status(404).send();
  }
};

// Add your code below:
app.use('/data/:index', indexExists);
// Add your code above

app.get('/data/:index', (req, res, next) => {
  res.send(data[req.params.index]);
});
app.put('/data/:index', (req, res, next) => {
  data[req.params.index] = req.body.number;
  res.send(data[req.params.index]);
});
app.delete('/data/:index', (req, res, next) => {
  data.splice(req.params.index, 1);
  res.status(204).send();
});
app.get('/', (req, res, next) => {
  res.send(data);
});

/*
Use the Express middleware resources to find an appropriate middleware package to handle CORS requests.
Import the correct middleware package and use it for all requests. You can use the default settings for 
this middleware, no need to use any customization!
*/
const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());

/*
The current API has public data that should be accessible to anybody, and private data that should be only accessed by admin users. 
Currently, users can access any data, but the isAdmin middleware function should be able to help. Use this function in 
any route that accesses the secretData object.
*/
const express = require('express');
const app = express();

const secretData = {
  adminUsers: ['1', '2', '51'],
  coolPhoneNumbers: ['555-555-CODE', '555-EXP-RESS', 'MID-DLE-WARE'],
  favSites: ['codecademy.com', 'expressjs.com']
}

const publicData = {
  colors: ['green', 'orange'],
  numbers: [1, 2, 3, 4, 5]
}

const isAdmin = (req, res, next) => {
  const id = req.params.userId;
  if (!secretData.adminUsers.includes(id)) {
    res.status(401).send(); // Unauthorized
  } else {
    next();
  }
}

app.get('/:userId/colors', (req, res, next) => {
  res.send(publicData.colors);
});

app.get('/:userId/numbers', (req, res, next) => {
  res.send(publicData.numbers);
});

app.get('/:userId/phone-numbers', isAdmin, (req, res, next) => { // added isAdmin
  res.send(secretData.coolPhoneNumbers);
});

app.get('/:userId/fav-sites', isAdmin, (req, res, next) => { // added isAdmin
  res.send(secretData.favSites);
});

/*
Use Router.param to DRY this appleRouter. Attach the apple variety to the request 
body if it exists, send a 404 response if it does not. In each individual route, 
send the appropriate property from that apple object.
*/
const express = require('express');
const appleRouter = express.Router();

const apples = {
  mcintosh: {
    description: 'Classic, juicy, bright',
    priceRange: 'medium',
    color: 'green and red'
  },
  honeycrisp: {
    description: 'Crisp, sweet!',
    priceRange: 'pricey',
    color: 'red and yellow'
  },
  goldenDelicious: {
    description: 'rich, custardy',
    priceRange: 'cheap',
    color: 'yellow'
  }
}

// BEFORE

appleRouter.param('variety'); 

appleRouter.get('/:variety/description', (req, res, next) => {
  const variety = req.params.variety;
  if (apples[variety]) {
    res.send(apples[variety].description);
  } else {
    res.status(404).send();
  }
});

appleRouter.get('/:variety/price-range', (req, res, next) => {
  const variety = req.params.variety;
  if (apples[variety]) {
    res.send(apples[variety].priceRange);
  } else {
    res.status(404).send();
  }
});

appleRouter.get('/:variety/color', (req, res, next) => {
  const variety = req.params.variety;
  if (apples[variety]) {
    res.send(apples[variety].color);
  } else {
    res.status(404).send();
  }
});
// AFTER
const express = require('express');
const appleRouter = express.Router();

const apples = {
  mcintosh: {
    description: 'Classic, juicy, bright',
    priceRange: 'medium',
    color: 'green and red'
  },
  honeycrisp: {
    description: 'Crisp, sweet!',
    priceRange: 'pricey',
    color: 'red and yellow'
  },
  goldenDelicious: {
    description: 'rich, custardy',
    priceRange: 'cheap',
    color: 'yellow'
  }
}

// Finish the appleRouter.param call:

appleRouter.param('variety', (req, res, next, variety) => {
  if (!apples[variety]) {
    res.status(404).send();
  } else {
    req.variety = apples[variety];
    next();
  }
});

// Refactor the routes below to utilize your middleware:

appleRouter.get('/:variety/description', (req, res, next) => {
    res.send(req.variety.description);
});

appleRouter.get('/:variety/price-range', (req, res, next) => {
    res.send(req.variety.priceRange);
});

appleRouter.get('/:variety/color', (req, res, next) => {
    res.send(req.variety.color);
});


/*

======================================================================================
LESSON ONE - QUIZ
======================================================================================

What would the following code log to the console during an HTTP GET request to ‘/user’?
*/
app.use((req, res, next) => {
  console.log("Hello!");
  next();
});

app.get('/user', (req, res, next) => {
  console.log("You are visiting 'user'");
  next();
});

app.post('/user', (req, res, next) => {
  console.log("Hope you enjoy your stay!");
});

app.use('/user/:id', (req, res, next) => {
  console.log("The weather is wonderful,");
  next();
});

app.get('/user/:id', (req, res, next) => {
  console.log("And the sun is shining!");
  next();
});

app.get('/user', (req, res, next) => {
  console.log("Well, goodbye!");
 next();
});
/*
Incorrect:
Hello!
You are visiting ‘user’
Hope you enjoy your stay!

Incorrect:
Hello!
You are visiting ‘user’
The weather is wonderful,
And the sun is shining!
Well, goodbye!

Correct:
Hello!
You are visiting ‘user’
Well, goodbye!

Incorrect:
Hello!
You are visiting ‘user’
Hope you enjoy your stay!
The weather is wonderful,
And the sun is shining!
Well, goodbye!
👏
Correct!

What does the coding principle “DRY” stand for?
Incorrect:
Don’t Rewrite in YAML
Incorrect:
Daringly Refactor, Yes!
Incorrect:
Definitely Read Your console
Correct:
Don’t Repeat Yourself
👏
Correct!

What is the function signature of error-handling middleware?
Incorrect:
(req, res, next, err)
Incorrect:
(err, next)
Incorrect:
(err, res)
Correct:
(err, req, res, next)
👏
Correct!

Which of these methods runs middleware for any HTTP verb at an address?
Incorrect:
app.post()
Correct:
app.use()
Incorrect:
app.get()
Incorrect:
app = express();
👏
Correct!

What is the name of the function, passed as an argument to a middleware function, that passes control to the next middleware in the stack?
Correct:
next()
Incorrect:
this()
Incorrect:
pass()
Incorrect:
continue()
👏
Correct! It’s a convention, but a useful one!

What will be printed to the console when performing a GET request to the route /shirts?
app.use((req, res, next) => {
  console.log('Got a request!');
});
app.get('/shirts', (req, res, next) => {
  console.log('Requesting shirts!');
});
Incorrect:
Requesting shirts!
Incorrect:
Got a request!
Requesting Shirts!
Correct:
Got a request!
The app.use() call is run for any possible route.

Which middleware from the Express middleware list would you use to create virtual domains?
Incorrect:
cookie-parser
Incorrect:
csurf
Correct:
vhost
Incorrect:
serve-index
👏
Correct!

Which would allow us to use the logging library morgan?
Incorrect:
const morgan = require('morgan');
const express = require('express');
const app = express({'logging': morgan});
Incorrect:
app.use(morgan);
Incorrect:
const logging = morgan('tiny');
app.logging = logging;
Correct:
app.use(morgan('tiny'));
👏
Correct!

Which of the following is true of app.use()
Correct:
It defaults to all paths but takes an optional first argument which can be a single path or an array of multiple paths.
Incorrect:
It always operates on all paths.
Incorrect:
It requires a single path as its first argument.
Incorrect:
It requires an array of paths as its first argument.
👏
Correct!

What function allows us to handle URL parameters in a DRY way?
Correct:
router.param()
Incorrect:
router.get()
Incorrect:
app.use()
Incorrect:
res.send()
👏
Correct!



*/


