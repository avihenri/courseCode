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

  
  

/*

======================================================================================
LESSON ONE - ROUTER PARAMETERS
======================================================================================

*/


/*

======================================================================================
LESSON ONE - CODE CHALLENGES
======================================================================================

*/

/*

======================================================================================
LESSON ONE - QUIZ
======================================================================================

*/