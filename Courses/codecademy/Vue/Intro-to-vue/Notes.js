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
const app = new Vue({
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
const app = new Vue({
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
const app = new Vue({
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

  const app = new Vue({
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