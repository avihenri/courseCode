/*

BUILDING FRONT-END APPLICATIONS WITH REACT
Animal Fun Facts
In this project, we’ll build a program that allows users to click an animal on the screen in order to have a fun fact pop up.
Our program will display a selection of animals on the screen. We’ll be allowed to decide if we want to include a background or not. 
Clicking an animal will cause a fact to be randomly selected from a list of potential options. The selected fact will pop up on the screen. 
As we keep clicking, we’ll be able to see different facts.

Let’s get started!

*/

import { animals } from './animals';
import React from 'react'
import ReactDOM from 'react-dom'

const title = '';
const background = (
  <img 
    className="background"
    alt="ocean"
    src="/images/ocean.jpg"
  />
);
let showBackground = false;

const displayFact = e => {
  const facts = animals[e.target.alt].facts;
  const factIndex = Math.floor(Math.random() * facts.length);
  const selectedFact = facts[factIndex];
  document.getElementById('fact').innerHTML = selectedFact;
}

const animalList = [];
for (const animal in animals) {
  animalList.push(<img 
    key={animal} 
    className='animal' 
    alt={animal} 
    src={animals[animal].image} 
    aria-label={animal} 
    role='button' 
    onClick={displayFact}
  />);
}

const animalFacts = (  
  <div>
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    {(showBackground) && background }
    <div className='animals'>
      {animalList}
    </div>
    <p id="fact"></p>
  </div>
);

ReactDOM.render(
  animalFacts,
  document.getElementById('root')
);