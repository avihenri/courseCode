// JSX - 
// - syntax extension for JavaScript
// - written to be used with React
// - looks like HTML
// - not valid JS - browsers cannot read it
// - needs complied
// const h1 = <h1>Hello world</h1>;

// JSX ELements
// - treated as JS expressions
// - saved in a variable, passed to a function, stored in an object or array
// const navBar = <nav>I am a nav bar</nav>;
// const myTeam = {
//   center: <li>Benzo Walli</li>,
//   powerForward: <li>Rasha Loa</li>,
//   smallForward: <li>Tayshaun Dasmoto</li>,
//   shootingGuard: <li>Colmar Cumberbatch</li>,
//   pointGuard: <li>Femi Billon</li>
// };
// - can have attributes name="value"
// my-attribute-name="my-attribute-value"
// <a href='http://www.example.com'>Welcome to the Web</a>;
// const title = <h1 id='title'>Introduction to React.js: Part I</h1>; 
// const panda = <img src='images/panda.jpg' alt='panda' width='500px' height='500px' />;

// Nested JSX
// <a href="https://www.example.com"><h1>Click me!</h1></a>
// - if JSX takes up more that one line, wrap in parentheses 
(
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
)
// - save nested in a variable
const theExample = (
   <a href="https://www.example.com">
     <h1>
       Click me!
     </h1>
   </a>
 );

// JSX Outer Elements
// -JSX expression must have exactly one outermost elment

// In other words, this code will work:

const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);
// But this code will not work:

// const paragraphs = (
//   <p>I am a paragraph.</p> 
//   <p>I, too, am a paragraph.</p>
// );

// Rendering JSX
// ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

// ReactDOM.render()
// -takes JSX expression
// - creates a corresponding tree of DOM nodes, adds that tree to the DOM
// - ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
// - 1st argument is appended to selected 2nd argument
<body>
  <main id="app"></main>
	<script src="https://content.codecademy.com/courses/React/react-course-bundle.min.js"></script>
  <script src="/app.compiled.js"></script>
</body>
// - 1st argument can be something that evaluates to a JSX expression such as a variable
const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

ReactDOM.render(
  toDoList, 
  document.getElementById('app')
);

// class vs className
// HTML - <h1 class="big">Hey</h1>
// JSX - <h1 className="big">Hey</h1>

const myDiv = <div className="big">I AM A BIG DIV</div>;

ReactDOM.render(
  myDiv,
  document.getElementById('app')
);

// SELF-CLOSING TAGS
// html self-closing tags have option />
// JSX is not option
// <br> needs to be <br/>

// JAVASCRIPT IN YOUR JSX IN YOUR JAVASCRIPT
// - regular JS written in JSX expression

// CURLY BRACES IN JSX
// - JS can be used inside { }

// Write code here:
const math = <h1>2 + 3 = {2 + 3}</h1>;

ReactDOM.render(
  math,
  document.getElementById('app')
);

// VARIABLES IN JSX
// JS in JSX - the JS is the same environment as the rest of the JS file
// - can access this variable inside the JSX expression
const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));

// VARIABLE ATTRIBUTE IN JSX
// With JSX its common to use variables to set attributes
// Use a variable to set the `height` and `width` attributes:
const sideLength = "200px";
const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);
// Object properties are also used -
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
); 

// Declare new variable here:
const gooseImg = <img src={goose} />;

ReactDOM.render(
  gooseImg,
  document.getElementById('app')
);

// EVENT LISTERNERS IN JSX
//JSX can have event listeners
//React = working with event listeners
//Assign JSX element with an attribute
<img onClick={myFunc} />
//Name = onCLick, onMouseOver 
//- keyword:on + event
//- camelCase
//https://reactjs.org/docs/events.html#supported//-events
//- event listener value should be a func
function myFunc() {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}

<img onClick={myFunc} />

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty" 
    onClick={makeDoggy}
    />
);

ReactDOM.render(kitty, document.getElementById('app'));

//JSX CONDITIONALS: IF STATEMENTS THAT DON'T WORK
//Can not inject an if statement into a JSX expression
//https://reactjs.org/docs/jsx-in-depth.html

//Do if statement in file but not in JSX
//if.js -
let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);

// app.js
function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
  img = <img src={pics.kitty} />
} else {
  img = <img src={pics.doggy} />
}

ReactDOM.render(
  img,
  document.getElementById('app')
);

//JSX CONDITIONALS: TERNARY OPERATOR
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);


const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;


//JSX CONDITIONALS: &&
// && - conditionals that will sometimes do an action but other times not
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);

//if expression on lef tof && = true
//-- the JSX on the right will be rendered
//if not
//-- it will be ignored

//.MAP IN JSX
// create list of JSX elements = .map
const strings = ['Home', 'Shop', 'About Me'];
const listItems = strings.map(string => <li>{string}</li>);
<ul>{listItems}</ul>

// KEYS
// JSX attribute - name is key and value is something unique
// key="li-01"
// should be used for lists or REact will scramble them
// Not all lists need keys
// A list needs keys if the following are true 
// - list-items have memory from one render to the next.To-do list, must remember if it has been checked
// - list order might be shuffled
// const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
  <li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(
  <ul>{peopleLis}</ul>,
  document.getElementById('app')
);

// REACT.CREATEELEMENT
// You don't always need to use JSX with react. You can use React.createElement
const h1 = <h1>Hello world</h1>;
// or
const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);
// JSX is complied into React.CreateElement







