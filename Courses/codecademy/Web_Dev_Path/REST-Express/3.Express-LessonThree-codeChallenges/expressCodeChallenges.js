/*
Require the 'express' package and save it to a variable named express. 
Then, create an Express instance and save it to a variable called app.
*/
const express = require('express');
const app = express();

/*
Start your server listening on the port defined by the PORT variable.
const PORT = process.env.PORT || 4001;
*/
app.listen(PORT, () => {

});

/*
Write a GET /sausages route that sends back the whole sausageTypes array.

const sausageTypes = ['bratwurst', 'andouille', 'chorizo', 'boudin', 'kielbasa'];
*/
app.get('/sausages', (req, res, next) => {
    res.send(sausageTypes);
  })

/*
Fix the route so that it sends back the array of metal building materials.
WAS:
app.get('/metals', (req, res, next) => {
  const arrayToSend = buildingMaterials.metal;

});
*/
app.get('/metals', (req, res, next) => {
    const arrayToSend = buildingMaterials.metal;
    res.send(arrayToSend);
});

/*
Complete the GET /battlefields/:name route. 
Send back the battlefield object if a battlefield exists, 
and set the status to 404 and send an empty response if it does not.
const battlefields = {
  fortSumter: {
    state: 'SC',
  },
  manassas: {
    state: 'VA',
  },
  gettysburg: {
    state: 'PA',
  },
  antietam: {
    state: 'MD',
  }
}

*/
// THS WAS WRONG
app.get('/battlefields/:name', (req, res, next) => {
    const battlefieldName = req.params.name;
    if (battlefieldName) {
      res.send(battlefieldName);
    } else {
      res.status(404).send();
    }
  });
// THIS WAS THE SOLUTION 
app.get('/battlefields/:name', (req, res, next) => {
    const battlefieldName = req.params.name;
    const battlefield = battlefields[battlefieldName];
    if (battlefield){
      res.send(battlefield);
    } else {
      res.status(404).send();
    }
  });

/*
Write a route to handle PUT requests to /currencies/:name/countries.

The :name param represents the currency name in the currencies object. 
The updated array of countries that use this currency will be sent in a query.

This route handler should replace the countries array of the correct single-currency object 
with an updated array from the query. It should send the updated array as a response.
const currencies = {
  diram: {
    countries: ['UAE', 'Morocco'],
  },
  real: {
    countries: ['Brazil'],
  },
  dinar: {
    countries: ['Algeria', 'Bahrain', 'Jordan', 'Kuwait'],
  },
  vatu: {
    countries: ['Vanuatu'],
  },
  shilling: {
    countries: ['Tanzania', 'Uganda', 'Somalia', 'Kenya'],
  },
};
*/
app.put('/currencies/:name/countries', (req, res, next) => {
    const currencyName = req.params.name;
    const updatedCountries = req.query;
    currencies[currencyName] = updatedCountries;
    res.send(currencies[currencyName]);
  });
   
/*
Create a POST /soups route. It should add a new soup name to the soups array from the 
name property of the req.query object. It should also set a status code for ‘Created’
const soups = ['gazpacho', 'borscht', 'primordial', 'avgolemono', 'laksa'];
*/
app.post('/soups', (req, res, next) => {
    const soupName = req.query.name;
    soups.push(soupName);
    res.status(201).send(soupName); 
  });
  
/*
Write a route to handle DELETE requests to /puddings/:flavor. 
It should delete the correct pudding and send a 204 response if the pudding name 
exists and send a 404 response if it does not.

You can use the helper functions findPuddingIndex to find the index of the pudding 
by flavor and deletePuddingAtIndex to delete a pudding from the puddingFlavors array by index.

const puddingFlavors = ['chocolate', 'banana', 'butterscotch', 'pistachio'];

const findPuddingIndex = (name) => {
  return puddingFlavors.indexOf(name);
}

const deletePuddingAtIndex = (index) => {
  puddingFlavors.splice(index, 1);
}

*/

app.delete('/puddings/:flavor', (req, res, next) => {
    const puddingIndex = findPuddingIndex(req.params.flavor);
    if (puddingIndex !== -1) {
      deletePuddingAtIndex(puddingIndex);
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  });
  
/*
Mount the sauceRouter with app.use so that a GET /sauces request sends back the sauces array
*/
const pastas = ['agnolotti', 'cavatelli', 'gemelli', 'tortellini'];

app.get('/pastas', (req, res, next) => {
  res.send(pastas);
});

const sauceRouter = express.Router();
// Add your code here:
app.use('/sauces', sauceRouter);

const sauces = ['carbonara', 'primavera', 'bolognese', 'puttanesca', 'fra diavolo']

sauceRouter.get('/', (req, res, next) => {
  res.send(sauces);
});

/*
Create two routers - mountainsRouter and mountainRangesRouter. Mount them at /mountains and /mountain-ranges, respectively.
Create a route handler with mountainsRouter to send back the mountains array in response to a GET /mountains request.
Create a route handler with mountainRangesHandler to send back the mountainRanges array in response to a GET /mountain-ranges request.
const mountains = ['denali', 'olympus', 'kilimanjaro', 'matterhorn'];
const mountainRanges = ['alps', 'andes', 'himalayas', 'rockies'];
*/
const mountainsRouter = express.Router();
const mountainRangesRouter = express.Router();

app.use('/mountains', mountainsRouter);
app.use('/mountain-ranges', mountainRangesRouter);

mountainsRouter.get('/', (req, res, next) => {
  res.send(mountains);
});

mountainRangesRouter.get('/', (req, res, next) => {
  res.send(mountainRanges);
});

/* QUIZ *

Which Express method should be used for routes that will remove a resource?
Correct:
app.delete()
Incorrect:
app.destroy()
Incorrect:
app.put()
Incorrect:
app.get()
👏
You got it!

Which code will create an Express server instance and save it to the variable app?
Incorrect:
const express = require('express-app');
const app = express();
Incorrect:
const app = require('express');
Correct:
const express = require('express');
const app = express();
Incorrect:
const app = require('express').Router();
👏
You got it!

Which Express method should be used for routes that will retrieve a resource?
Incorrect:
app.put()
Incorrect:
app.retrieve()
Incorrect:
app.post()
Correct:
app.get()
👏
You got it!

Which route will GET /dogs/retriever/1 match?
Incorrect:
app.get('/dogs/:id', (req, res, next) => {

});
Correct:
app.get('/dogs/:breed/:id', (req, res, next) => {

});
Incorrect:
app.post('/dogs/:breed/:id', (req, res, next) => {

});
Incorrect:
app.get('/dogs/:breed/id', (req, res, next) => {

});
👏
You got it!

If this code has been run in Node on your computer, why will a GET request to localhost:4001/ fail?
const express = require('express');
const app = express();

const port = 8000;

const expressIs = ['fun', 'rewarding', 'servertastic'];

app.get('/', (req, res, next) => {
  res.send(expressIs);
});

app.listen(port);
Incorrect:
The server is not running.
Incorrect:
There is a syntax error and the code will fail.
Incorrect:
There is no route registered to handle that path.
Incorrect:
The server is listening on port 8000, not 4001.

The path / is correct and is registered in the server, but the port in the request is wrong because the server is listening on 8000.

What will req.params equal in this route with a GET request to /users/user_1/purchases/100?
app.get('/users/:name/purchases/:purchaseId', (req, res, next) => {
  
});
Incorrect:
?name=user_1&purchaseId=100
Correct:
{ name: 'user_1', purchaseId: '100' }
Incorrect:
{ name: 'user_1', purchaseId: 100 }
Incorrect:
{ ':name': 'user_1', ':purchaseId': '100'}
👏
Correct! Both parameters are strings

In the code snippet below, what value should the slothPath string have in order for the route to match a GET /animals/sloths request?
const express = require('express');
const app = express();
const router = express.Router();

const sloths = ['slowpoke', 'fluffles', 'sonic'];

app.use('/animals', router);

let slothPath = // assign slothPath here

router.get(slothPath, (req, res, next) => {
  res.send(sloths);
});
Incorrect:
'sloths'
Incorrect:
'/animals/sloths'
Incorrect:
'/sloth'
Correct:
'/sloths'
👏
You got it!

What will this Express server log in response to GET /fruits?

const express = require('express');
const app = express();

const fruits = ['apple', 'tomato', 'pear'];

app.get('/fruits/:id', (req, res, next) => {
  console.log(`request to /fruits/${req.params.id}`);
  res.send(fruits[req.params.id]);
});

app.get('/fruits', (req, res, next) => {
  console.log('request to /fruits, looking good!');
  res.send(fruits);
});

app.get('/fruits', (req, res, next) => {
  console.log('request to /fruits, feeling good!');
  res.send(fruits);
});

Incorrect:
request to /fruits, looking good!
request to /fruits, feeling good!
Incorrect:
Nothing will log because the request matches no route, and Express will send a 404 Not Found response.
Incorrect: - CORRECT 
request to /fruits, looking good!
Incorrect:
request to /fruits/undefined
Even though there are two routes with /fruits path, the first one matches first and sends a response, so the second route is ignored.

What will req.query look like in a route that matches a GET request to /animals?color=green&age=4&eyes=2
Incorrect:
'color=green&age=4&eyes=2'
Incorrect:
['color', 'age', 'eyes']
Incorrect:
{ color: 'green', age: '4', eyes: '2', route: '/animals' }
Correct:
{ color: 'green', age: '4', eyes: '2' }
👏
You got it!

Which Express method will start a server?
Incorrect:
app.get()
Incorrect:
app.run()
Incorrect:
app.server()
Correct:
app.listen()
👏
You got it!

Which Express method should be used for routes that will create a new resource?

Incorrect:
app.delete()
Incorrect:
app.put()
Correct:
app.post()
Incorrect:
app.get()
👏
You got it!

Which express method sends a response to the client?
Correct:
res.send()
Incorrect:
app.send()
Incorrect:
req.send()
Incorrect:
res.respond()
👏
You got it!

Which Express server method is used to update a resource?
Incorrect:
app.get()
Incorrect:
app.post()
Correct:
app.put()
Incorrect:
app.head()
👏
You got it!

Which code will set a status code of 200 and send an empty response?
Incorrect:
res.status(200);
Incorrect:
req.status(200).send();
Correct:
res.status(200).send();
Incorrect:
app.status(200).send();
👏
You got it!
