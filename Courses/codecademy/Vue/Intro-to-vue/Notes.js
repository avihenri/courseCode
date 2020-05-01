// Intro to Vue
// - Directives - https://vuejs.org/v2/api/#Directives
//     - v-if = like a an if statement and can be placed within an element
        <button v-if="userIsLoggedIn">Log Out</button>
        <button v-if="!userIsLoggedIn">Log In</button>
//     - v-for = like a for loop and can be placed within an element
        <ul>
            <li v-for="todo in todoList">{{ todo }}</li>
        </ul>
//     - v-model = hooked up to a form field and can modify the vue data if a user changes a field
//     - v-on:click = like JS onclick event, takes code that will be run as the value
        <button v-on:click="tweets.push(newTweet)">Add Tweet</button>
// - Components - reusable HTML code
// Summarise Lesson 1
// - Front-end code is quicker, loading vue on one line, mustache templates, bult-in directives & re-usable components = easy to read & write
// - using mustache templates, bult-in directives, components makes vue less error prone
// - front-end apps fast & responsive

// Vue data
// app.js - add this to page after above with defer
// We don't need vue to access all our HTML but just some. To do this we add a key-value pair to the options object

const app = new Vue({ // options object
    el: '#app', // access elemant - el for element and #app is the css selector
    data: { // data to be used in the app - normally brought from database
        username: 'CoderInTraining',
    }
});
// Using data key-value pairs
const app2 = new Vue({
  el: '#app',
  data: {
    language: 'Spanish',
    hoursStudied: 274
  }
});
<div id="app">
  <p>You have been studying {{ language }} for {{ hoursStudied }} hours</p>
</div>


// Computed object
// - this can be used to calculate different values from the data key-value pairs we already have depending on conditions
const app3 = new Vue({
  el: '#app',
  data: {
    hoursStudied: 274
  },
  computed: {
    languageLevel: function() {
      if (this.hoursStudied < 100) {
        return 'Beginner';
      } else if (this.hoursStudied < 1000) {
        return 'Intermediate';
      } else {
        return 'Expert';
      }
    }
  }
});
<div id="app">
  <p>You have studied for {{ hoursStudied }} hours. You have {{ languageLevel }}-level mastery.</p>
</div>

// Getter and setter in computed
const app4 = new Vue({
    el: '#app',
    data: {
      hoursStudied: 274
    },
    computed: {
      languageLevel: {
        get: function() {
          if (this.hoursStudied < 100) {
            return 'Beginner';
          } else if (this.hoursStudied < 1000) {
            return 'Intermediate';
          } else {
            return 'Expert';
          }
        },
        set: function(newLanguageLevel) {
          if (newLanguageLevel === 'Beginner') {
            this.hoursStudied = 0;
          } else if (newLanguageLevel === 'Intermediate') {
            this.hoursStudied = 100;
          } else if (newLanguageLevel === 'Expert') {
            this.hoursStudied = 1000;
          }
        }
      }
    }
  });
  <div id=“app”>
    <p>You have studied for {{ hoursStudied }} hours. You have {{ languageLevel }}-level mastery.</p>
    <span>Change Level:</span>
    <select v-model="languageLevel">
      <option>Beginner</option>
      <option>Intermediate</option>
      <option>Expert</option>
    </select>
  </div>

// watch - in the app code - 
// this watches to see if user chooses another language and if it is supported it added new language at 0 hours studied
  watch: {
    currentLanguage: function (newCurrentLanguage, oldCurrentLanguage) {
      if (supportedLanguages.includes(newCurrentLanguage)) {
        this.hoursStudied = 0;
      } else {
        this.currentLanguage = oldCurrentLanguage;
      }
    }
  }

  // Methods
//   The methods property is where Vue apps store their instance methods. These methods can be used in many situations, 
// such as helper functions used in other methods or event handlers (functions that are called in response to specific user interactions).

  const app5 = new Vue({
    el: "#app",
    data: {
      hoursStudied: 300
    },
    methods: {
      resetProgress: function () {
        this.hoursStudied = 0;
      }
    }
  });
  <button v-on:click="resetProgress">Reset Progress</button>
  /*
  Review
    In this lesson, we learned four different techniques for displaying and updating dynamic data in our Vue apps. 
    Here’s a brief recap of the Vue app options object properties we covered and the use cases for each.
    data - used for storing known dynamic values
    computed - used for computing dynamic values based on known dynamic values — can additionally specify a setter by 
        specifying get and set functions — the setter will update other dynamic values when the computed value changes
    watch - used for performing functionality when a specified dynamic value changes
    methods - used for storing instance methods to be used throughout the app */

  
  // LESSON THREE - VUEW FORMS
    // v-model - binds form fields with vue data or computed v-model="dataName"
        // you can bind any type of input, select, textarea
    // Radio button bindings
        // Each radio button in a group will need their own v-model with the same value <input type="radio" id="goodReview" value="good" v-model="experienceReview" /> 
    // Array checkbox bindings
        // as multiple can be selected the data item needs to be an array data: { requestedFeatures: [] }  
        // Each have the same v-model value
    // Boolean checkbox bindings
        // single checkbox with true or false - it will be set to false in the data and if selected will be changed to true
    // Form event handlers
        // v-on directive to add events - v-on:click="function", v-on:reset="function" the functions being in methods
        // shorthand for v-on is @ - @click or @reset
        // these need to be added to buttons and the form opening tag
    // Form event Modifiers - https://vuejs.org/v2/api/#v-on
        // such as Event.preventDefault on submit - v-on:submit.prevent="submitForm" (this is on the form element) <form v-on:reset="resetFields" v-on:submit.prevent="submitForm">
        // stop modifier, it would call Event.stopPropagation()
    // Input Modifiers - https://vuejs.org/v2/api/#v-model
        // Modifiers for v-model = .number converts value to a number, .trim removes whitespaces from beginning and end, .lazy only updates values when change events are triggered
    // Form validation
        // disabled property on a button - v-bind:disabled="!formIsValid" - 
            // we bind the disabled property to the submit button and call the computed function formIsValid
            // the formIsValid function will check the values and if valid then the disabled button will disappear and the button will be enabled
            // if not valid the disabled will be there and the button will not be enabled

  /* Review
      Congratulations, you now know how to bind HTML forms to Vue data and listen to events in Vue! Let’s review the major takeaways from this lesson:

      Form fields can be bound to Vue data using the v-model directive — how v-model is used depends on the type of field it is being added to
      Form event handlers can be added using v-on:submit and v-on:reset
      Modifiers can be used to add functionality to directives — most importantly preventing page reload on form submission using v-on:submit.prevent and cleaning up form field values using .number and .trim
      Form validation can be implemented by setting the value of the disabled attribute on a <button> to the value of a computed property using v-bind */


  // Lesson Four - Styling elements with vue
    // Inline Styles
    <h2 v-bind:style="{ color: breakingNewsColor, 'font-size': breakingNewsFontSize }">Breaking News</h2>
    const app6 = new Vue({ 
      data: { 
        breakingNewsColor: 'red',
        breakingNewsFontSize: '32px'
      }
    });
        // if a css property has a hyphen then we need to put it quotes - 'font-size'
        // this used the data but computed properites can be used with v-bind:style
    // Computed Style Objects
        // We can refacter what we just did to have all the styles in a property
        <h2 v-bind:style="breakingNewsStyles">Breaking News</h2>
        const app7 = new Vue({ 
          data: { 
            breakingNewsStyles: { 
              color: 'red',
              'font-size': '32px'
            }
          }
        });
        // using computed properties we can style depending on its condition
        function() {
          if (this.formIsValid) {
            return {
              'background-color': '#4c7ef3',
              cursor: 'pointer'
            }
          } else {
            return {
              'background-color': 'gray',
              cursor: 'default'
            }
          }
        }
  // Multiple Style Objects
      // v-bin:style can take an array of properties - v-bind:style="[newsHeaderStyles, breakingNewsStyles]"
        // the style object added later in the array gets priority 

  // CSS Classes
      <span v-bind:class="{ unread: hasNotifications }">Notifications</span>
      // .unread {
      //   background-color: blue;
      // }
      const app = new Vue({
        data: { notifications: [ ... ] },
        computed: {
          hasNotifications: function() {
            return notifications.length > 0;
          }
        }
      }
      // Here we use v-bind:class to add class unread to notifications span if the computed hasNotifications is true
      // v-bind:class takes an object as its value
        // keys are the class names & values are the vue app properties that return truthy or falsy
       
    // CLass Arrays
      // v-bind:class can take an array as its value
      // YOu can add conditional classes like previous step but you can also have just classes in the array
      <span v-bind:class="[{ unread: hasNotifications }, menuItemClass]">Notifications</span>
      const app = new Vue({
        data: { 
          notifications: [ ... ],
          menuItemClass: 'menu-item'
        },
        computed: {
          hasNotifications: function() {
            return notifications.length > 0;
          }
        }
      }
      // .menu-item {
      //   font-size: 12px;
      // }

      // .unread {
      //   background-color: blue;
      // }
      // if its just properties you don't need curly brackets - v-bind:class="[requiredFieldClass, emailClasses]"
    