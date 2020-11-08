// YOUR FIRST REACT COMPONENT
// Waht's a component?
// Small, reuseable chuck of code, responsible for 1 job. (render HTML)

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);

// IMPORT REACT
import React from 'react';
// - imports the react library and saves it to a React variable
// React methods = javascript object
// Don't deal with the DOM
// React.createElement() / React.Component

// IMPORT REACTDOM
import ReactDOM from 'react-dom';
// JS object
// to interact with the DOM
// ReactDOM.render()

// CREATE A COMPONENT CLASS
// Can us JS class to define a new React component
// Extend component class from the React library
// Define a class component > render as many instances as we want
// React.Component - a JS class
// - to create a component class, must subclass React.Component
// - React.Component is a property on the object which was imported from React
// - class YourComp extends React.Component {}

// NAME A COMPONENT CLASS
// - component class variables = UpperCamelCase

// COMPONENT CLASS INSTRUCTIONS
// - body of compoenent = set of instructions, how it should work
class MyComponentClass extends React.Component
{
  render() {
    return <h1>Hello world</h1>;
  }
}

// THE RENDER FUNCTION
// - Component class = factory that builds components
// - built with set of instructions
class ComponentFactory extends React.Component {
  // instructions go here, between the curly braces
}
// - instructions written in typical JS (ES6)
// one property must be included - render()
// must contain a return statement
class ComponentFactory extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}


// CREATE A COMPONENT INSTANCE
// - JSX element with component name
{/* <MyComponentClass ?> */}
{/* JSX elements = either HTML or Component instances */}
{/* - use capitalisation for components */}

{/* RENDER A COMPONENT */}
{/* - components inherit all methods of its component class */}
{/* - inherits render() */}
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
{/* - ReactDOM.render() will tell <MyComponentClass /> to render */}
{/* <MyComponentClass /> will call its render method, which will return the JSX element <h1>Hello world</h1>. 
ReactDOM.render() will then take that resulting JSX element, and add it to the virtual DOM. This will make “Hello world” appear on the screen. */}









