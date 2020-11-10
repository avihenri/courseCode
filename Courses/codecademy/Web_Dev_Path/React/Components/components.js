// COMPONENTS & ADVANCED JSX
// USE MULTILINE JSX IN A COMPONENT

import React from 'react';
import ReactDOM from 'react-dom';

class Quotes extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
          What is important now is to recover our senses.
        </p>
        <cite>
          <a target="_blank" 
            href="https://en.wikipedia.org/wiki/Susan_Sontag">
            Susan Sontag
          </a>
        </cite>
      </blockquote>
    );
  }
};

ReactDOM.render(
  <Quotes />,
  document.getElementById('app')
);

// USE A VARIABLE ATTRIBUTE IN A COMPONENT
import React from 'react';
import ReactDOM from 'react-dom';

const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

// Component class starts here:
class Owl extends React.Component {
  render() {
    return (
      <div>
        <h1>{owl.title}</h1>
        <img 
          src={owl.src}
          alt={owl.title}
         />
      </div>
    );
  };
}

ReactDOM.render(
  <Owl />,
  document.getElementById('app')
);


// Put Logic in a Render Function
// render() function needs a return statement
// - can include calculations before the component redners
class Random extends React.Component {
    render() {
      // First, some logic that must happen
      // before rendering:
      const n = Math.floor(Math.random() * 10 + 1);
      // Next, a return statement
      // using that logic:
      return <h1>The number is {n}!</h1>;
    }
  }
  // Watch out for this common mistake:
  
//   class Random extends React.Component {
//     // This should be in the render function:
//     const n = Math.floor(Math.random() * 10 + 1);
   
//     render() {
//       return <h1>The number is {n}!</h1>;
//     }

import React from 'react';
import ReactDOM from 'react-dom';

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component {
  render() {
    const friend = friends[1];
    return (
      <div>
        <h1>{friend.title}</h1>
        <img 
          src={friend.src}
        />
      </div>
    );
  };
}

ReactDOM.render(
  <Friend />,
  document.getElementById('app')
);

// Use a Conditional in a Render Function
// Notice that the if statement is located inside of the render function, but before the return statement. 
// This is pretty much the only way that you will ever see an if statement used in a render function.
import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    return (fiftyFifty) ? <h1>Tonight I'm going out WOOO</h1>
      : <h1>Tonight I'm going to bed WOOO</h1>;
  };
}

ReactDOM.render(
  <TonightsPlan />,
  document.getElementById('app')
);


// Use this in a Component
// used a lot - will see in the body of a class 
class IceCreamGuy extends React.Component {
  get food() {
    return 'ice cream';
  }
 
  render() {
    return <h1>I like {this.food}.</h1>;
  }
}
// in above example what does this mean?
// - refers to an instance of IceCreamGuy
// - refers to the object on which this method = render()
// IceCreamGuy has 2 methods - food and render
// - this = instance of IceCreamGuy
// - this.food = food method = ice cream
// - this.food = getter method, does need ()

import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
// name property goes here:
get name() {
  return 'Avril Henry';
}

render() {
  return <h1>My name is {this.name}.</h1>;
}
}

ReactDOM.render(<MyName />, document.getElementById('app'));

// Use an Event Listener in a Component
// - render functions often contain event listeners
// render() {
//   return (
//     <div onHover={myFunc}>
//     </div>
//   );
// }
// event handler = func called in response to an event
class MyClass extends React.Component {
  myFunc() {
    alert('Stop it.  Stop hovering.');
  }
 
  render() {
    return (
      <div onHover={this.myFunc}>
      </div>
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(
  <Button />,
  document.getElementById('app')
);