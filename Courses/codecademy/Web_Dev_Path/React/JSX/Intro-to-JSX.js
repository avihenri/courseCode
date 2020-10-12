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