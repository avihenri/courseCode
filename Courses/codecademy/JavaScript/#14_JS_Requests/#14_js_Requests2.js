// REQUESTS II
    // fetch() GET Requests I
        // creates a request object with info the api needs
        // sends the request object to the API endpoint
        // returns a promise = response object which contains the status of the promise with the info the api send back
    
    // fetch() GET Requests II
        // WORKING EXAMPLE:
        fetch('https://api-to-call.com/endpoint').then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Request failed!');
          }, networkError => {
            console.log(networkError.message);
          }).then(jsonResponse => {
            return jsonResponse;
          });

    // fetch() GET Requests III
        // Using - Datamuse API.
        // If the request is successful, you’ll get back an array of words that sound like the word you typed into the input field.

        // WORKING EXAMPLE
          // HELPERFUNCTIONS.JS
            // Formats response to look presentable on webpage
            const renderResponse = (res) => {
                // Handles if res is falsey
                if(!res){
                console.log(res.status);
                }
                // In case res comes back as a blank array
                if(!res.length){
                responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
                return;
                }
            
                // Creates an empty array to contain the HTML strings
                let wordList = [];
                // Loops through the response and caps off at 10
                for(let i = 0; i < Math.min(res.length, 10); i++){
                // creating a list of words
                wordList.push(`<li>${res[i].word}</li>`);
                }
                // Joins the array of HTML strings into one string
                wordList = wordList.join("");
            
                // Manipulates responseField to render the modified response
                responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
                return
            }
            
            // Renders response before it is modified
            const renderRawResponse = (res) => {
                // Takes the first 10 words from res
                let trimmedResponse = res.slice(0, 10);
                // Manipulates responseField to render the unformatted response
                responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
            }
            
            // Renders the JSON that was returned when the Promise from fetch resolves.
            const renderJsonResponse = (res) => {
                // Creates an empty object to store the JSON in key-value pairs
                let rawJson = {};
                for(let key in res){
                rawJson[key] = res[key];
                }
                // Converts JSON into a string and adding line breaks to make it easier to read
                rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
                // Manipulates responseField to show the returned JSON.
                responseField.innerHTML = `<pre>${rawJson}</pre>`;
            }
        // MAIN.JS
            // Information to reach API
            const url = 'https://api.datamuse.com/words';
            const queryParams = '?sl=';

            // Selects page elements
            const inputField = document.querySelector('#input');
            const submit = document.querySelector('#submit');
            const responseField = document.querySelector('#responseField');

            // AJAX function
            const getSuggestions = () => {
            const wordQuery = inputField.value;
            const endpoint = `${url}${queryParams}${wordQuery}`;
            
            fetch(endpoint).then(response => {
                if (response.ok) {
                return response.json();
                }
                throw new Error('Request failed!');
            }, networkError => {
                console.log(networkError.message);
            });
            }

            // Clears previous results and display results to webpage
            const displaySuggestions = (event) => {
            event.preventDefault();
            while(responseField.firstChild){
                responseField.removeChild(responseField.firstChild);
            }
            getSuggestions();
            };

            submit.addEventListener('click', displaySuggestions);

    // fetch() GET Requests IV
        // In this exercise, you’ll now take the information that was returned with the promise and manipulate the webpage!
        // updated from above main.js
        const getSuggestions = () => {
            const wordQuery = inputField.value;
            const endpoint = `${url}${queryParams}${wordQuery}`;
        fetch(endpoint).then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Request failed!');
          }, networkError => {
            console.log(networkError.message)
          }).then(jsonResponse => { // ADDED THIS FOR RESPONSE (FOR RAW RESPONSE = renderRawResponse(jsonResponse))
            renderResponse(jsonResponse);
          })
        };

    // fetch() POST Requests I
        // WORKING EXMAPLE:
        fetch('https://api-to-call.com/endpoint', {
            method: 'POST',
            body: JSON.stringify({id: '200'})
          }).then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Request failed!');
          }, networkError => {
            console.log(networkError.message);
          }).then(jsonResponse => {
            return jsonResponse;
          });

    // fetch() Post Requests III
        // WORKING EXAMPLE:
          // Information to reach API
            const apiKey = 'c163b2f3c5b74752a8d77eb2bdadbca5';
            const url = 'https://api.rebrandly.com/v1/links';

            // Some page elements
            const inputField = document.querySelector('#input');
            const shortenButton = document.querySelector('#shorten');
            const responseField = document.querySelector('#responseField');

            // AJAX functions
            const shortenUrl = () => {
            const urlToShorten = inputField.value;
            const data = JSON.stringify({destination: urlToShorten});
            
            fetch(url, {
                method: 'POST',    
                headers: {
                'Content-type': 'application/json',
                'apikey': apiKey
                    },
                body: data
            })
            }

            // Clear page and call AJAX functions
            const displayShortUrl = (event) => {
            event.preventDefault();
            while(responseField.firstChild){
                responseField.removeChild(responseField.firstChild)
            }
            shortenUrl();
            }

            shortenButton.addEventListener('click', displayShortUrl);

    // fetch() POST Requests IV
        // WORKING EXAMPLE:
          const shortenUrl = () => {
            const urlToShorten = inputField.value;
            const data = JSON.stringify({destination: urlToShorten});
          fetch(url, {
            method: 'POST',    
            headers: {
            'Content-type': 'application/json',
            'apikey': apiKey
            },
            body: data
          }).then(response => { // add from here
            if (response.ok) {
              return response.json();
            }
            throw new Error('Request failed!');
          }, networkError => {
            console.log(networkError.message);
          })
        }

    // fetch() POST Requests V
        const shortenUrl = () => {
          const urlToShorten = inputField.value;
          const data = JSON.stringify({destination: urlToShorten});
          
          fetch(url, {
            method: 'POST',    
            headers: {
            'Content-type': 'application/json',
            'apikey': apiKey
            },
            body: data
          }).then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Request failed!');
          }, networkError => { // add from here
            console.log(networkError.message);
          }).then(jsonResponse => {
            renderResponse(jsonResponse);
          })
        }

    // async GET Requests II
        const getData = async () => {
          try {
          const response = await fetch('https://api-to-call.com/endpoint');
            if (response.ok) {
            const jsonResponse = await response.json();
              return jsonResponse;
            }
            throw new Error('Request failed!');
          } catch (error) {
          console.log(error);
          }
        };

    // async GET Requests III
      // Information to reach API
          const url = 'https://api.datamuse.com/words?';
          const queryParams = 'rel_jja=';

          // Selecting page elements
          const inputField = document.querySelector('#input');
          const submit = document.querySelector('#submit');
          const responseField = document.querySelector('#responseField');

          // AJAX function
          // Code goes here
          const getSuggestions = async () => {
            const wordQuery = inputField.value;
            const endpoint = `${url}${queryParams}${wordQuery}`;
            try {
              const response = await fetch(endpoint);
              if (response.ok){
                const jsonResponse = await response.json();
                renderResponse(jsonResponse);
              }
            } catch(error) {
              console.log(error);
            }
          }

          // Clear previous results and display results to webpage
          const displaySuggestions = (event) => {
            event.preventDefault();
            while(responseField.firstChild){
              responseField.removeChild(responseField.firstChild)
            }
            getSuggestions();
          }

          submit.addEventListener('click', displaySuggestions);

    // async POST Requests II
        const getData = async () => {
          try {
            const response = await fetch('https://api-to-call.com/endpoint', {
              method: 'POST',
              body: JSON.stringify({id: 200}),
            })
            if (response.ok) {
            const jsonResponse = await response.json();
              return jsonResponse;
            }
            throw new Error('Request failed!');
          } catch(error) {
            console.log(error);
          }
        }

        // async POST Requests III
          // information to reach API
          const apiKey = 'c163b2f3c5b74752a8d77eb2bdadbca5';
          const url = 'https://api.rebrandly.com/v1/links';

          // Some page elements
          const inputField = document.querySelector('#input');
          const shortenButton = document.querySelector('#shorten');
          const responseField = document.querySelector('#responseField');

          // AJAX functions
          // Code goes here
          const shortenUrl = async () => {
            const urlToShorten = inputField.value;
            const data = JSON.stringify({destination: urlToShorten});
            try {
              const response = await fetch(url, {
                method: 'POST',
                body: data, 
                headers:
                    {
                  'Content-type': 'application/json',
                  'apikey': apiKey
                  }
              })
              if (response.ok) {
                const jsonResponse = await response.json();
                renderResponse(jsonResponse);
              };
            } catch(error) {
              console.log(error);
            }
          }

          // Clear page and call AJAX functions
          const displayShortUrl = (event) => {
            event.preventDefault();
            while(responseField.firstChild){
              responseField.removeChild(responseField.firstChild);
            }
            shortenUrl();
          }

          shortenButton.addEventListener('click', displayShortUrl);

          /*
          Review Requests II
          Let’s recap on the concepts covered in the previous exercises:

              GET and POST requests can be created a variety of ways.

              Use AJAX to asynchronously request data from APIs. fetch() and async/await are new functionalities developed in ES6 (promises) and ES8 respectively.

              Promises are a new type of JavaScript object that represent data that will eventually be returned from a request.

              fetch() is a web API that can be used to create requests. fetch() will return promises.

              We can chain .then() methods to handle promises returned by fetch().

              The .json() method converts a returned promise to a JSON object.

              async is a keyword that is used to create functions that will return promises.

              await is a keyword that is used to tell a program to continue moving through the message queue while a promise resolves.

              await can only be used within functions declared with async.
          */




        

    

                        
            




