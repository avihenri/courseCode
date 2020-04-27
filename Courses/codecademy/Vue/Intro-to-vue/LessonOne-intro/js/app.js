
// app.js - add this to page after above with defer
// We don't need vue to access all our HTML but just some. To do this we add a key-value pair to the options object
const app = new Vue({ // options object
    el: '#app', // access elemant - el for element and #app is the css selector
    data: { // data to be used in the app - normally brought from database
        username: 'CoderInTraining',
        newTweet: '',
        tweets: [
          'Started learning to code today. Wish me luck!', 
          'Okay, I learned HTML, CSS, and JavaScript. But, how do I combine them together?? Send help.', 
          'Today I start learning Vue. I got this.'
        ],
        bio: 'Excited future software engineer.'
      }
});