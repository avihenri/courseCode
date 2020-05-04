// REQUESTS I

    // Introduction to Requests (JavaScript’s XHR object.)
        // HTTP requests - POST, GET, PUT, DELETE
            // GET request, we’re retrieving, or getting, information from some source
            // POST request, we’re posting information to a source that will process the information and send it back

    // HTTP Requests
        // JavaScript uses an event loop to handle asynchronous function calls.
        // function calls are added to a stack to run
        // func's that request from servers are sent to separate ques
        // once stack is cleared - functions are executed
        // in JS - use event loop to determine what is ran https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop 

        // EXMAPLE:
        console.log('First message!');
        setTimeout(() => { // WILL RUN LAST ()ADDED TO THE QUEUE
           console.log('This message will always run last...');
        }, 2500); // 2500 SECS UNTIL RUN
        console.log('Second message!');
        /* OUTPUT:
        First message!
        Second message!
        This message will always run last... 
        NOTE: changing it to 0 will let it run quicker but will still be the same outcome*/

        // WORKING EXAMPLE:
        const xhr = new XMLHttpRequest();
        const url = 'https://api-to-call.com/endpoint';        
        xhr.responseType ='json';        
        xhr.onreadystatechange = () => {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return xhr.response;
          }          
          xhr.open('GET', url);
          xhr.send();
        }
    
    // XHR GET Requests III
        // 'rel_rhy=' is the start of a parameter for the query string. This parameter will narrow your search to words that rhyme.
        // inputField.value grabs what is in the inputField and assigns it to the variable wordQuery.
        // WORKING EXAMPLE:
            // MAIN,JS
                const url = 'https://api.datamuse.com/words?';
                const queryParams = 'rel_rhy=';
                // Selecting page elements
                const inputField = document.querySelector('#input');
                const submit = document.querySelector('#submit');
                const responseField = document.querySelector('#responseField');
                // AJAX function
                const getSuggestions = () => {
                    const wordQuery = inputField.value;
                const endpoint = `${url}${queryParams}${wordQuery}`;
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'json';
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                renderResponse(xhr.response) // RENDERS READABLE RESPONSE - FOR RAW DATA = renderRawResponse()
                        }
                }
                xhr.open('GET', endpoint);
                xhr.send();
                }
                // Clear previous results and display results to webpage
                const displaySuggestions = (event) => {
                event.preventDefault();
                while(responseField.firstChild){
                    responseField.removeChild(responseField.firstChild);
                };
                getSuggestions();
                }
                submit.addEventListener('click', displaySuggestions);
                /* OUTPUT: FOR TULIP (Datamuse API)
                You might be interested in:
                    julep
                    mint julep
                    tool up
                    fulop
                    cool up
                    fool up
                    liverpool up
                    molecule up
                    mule up
                    pool up
                    */
                // helperfunction.js
                    // Formats response to look presentable on webpage
                    const renderResponse = (res) => {
                        // handles if res is falsey
                        if(!res){
                        console.log(res.status)
                        }
                        // in case res comes back as a blank array
                        if(!res.length){
                        responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>"
                        return
                        }                    
                        // creating an array to contain the HTML strings
                        let wordList = []
                        // looping through the response and maxxing out at 10
                        for(let i = 0; i < Math.min(res.length, 10); i++){
                        // creating a list of words
                        wordList.push(`<li>${res[i].word}</li>`)
                        }
                        // joins the array of HTML strings into one string
                        wordList = wordList.join("")
                    
                        // manipulates responseField to render the modified response
                        responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`
                        return
                    }                    
                    // Renders response before it is modified
                    const renderRawResponse = (res) => {
                        // taking the first 10 words from res
                        let trimmedResponse = res.slice(0, 10)
                        //manipulates responseField to render the unformatted response
                        responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`
                    }                    
                    // Renders the JSON that was returned when the Promise from fetch resolves.
                    const renderJsonResponse = (res) => {
                        // creating an empty object to store the JSON in key-value pairs
                        let rawJson = {}
                        for(let key in response){
                        rawJson[key] = response[key]
                        }
                        // converting JSON into a string and adding line breaks to make it easier to read
                        rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n")
                        // manipulates responseField to show the returned JSON.
                        responseField.innerHTML = `<pre>${rawJson}</pre>`
                    }
  
        // XHR GET Requests IV
            // A query string contains additional information to be sent with a request.
            // A query string is separated from the URL using a ? character. After ?, you can then create a parameter which is a key value pair joined by a =
                // example: 'https://api.datamuse.com/words?key=value'
            // If you want to add an additional parameter you will have to use the & character to separate your parameters
                // example: 'https://api.datamuse.com/words?key=value&anotherKey=anotherValue'
            
            // WORKING EXAMPLE:
            // 'rel_jjb='. This will search for words that describe another word.
                const url = 'https://api.datamuse.com/words?';
                const queryParams = 'rel_jjb='; // changed 
                const additionalParams = '&topics=' // added
                // Selecting page elements
                const inputField = document.querySelector('#input');
                const topicField = document.querySelector('#topic'); // added for another input field
                const submit = document.querySelector('#submit');
                const responseField = document.querySelector('#responseField');
                // AJAX function
                const getSuggestions = () => {
                const wordQuery = inputField.value;
                const topicQuery = topicField.value; // added
                const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`; // added additionalParams & topicQuery                
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'json';
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                    renderResponse(xhr.response);
                    }
                }                
                xhr.open('GET', endpoint);
                xhr.send();
                }
                // Clear previous results and display results to webpage
                const displaySuggestions = (event) => {
                event.preventDefault();
                while(responseField.firstChild){
                    responseField.removeChild(responseField.firstChild);
                }
                getSuggestions();
                }
                submit.addEventListener('click', displaySuggestions);
                /* output: for tulip (word) & flowers (topic)
                        lily
                        flowering
                        flowered
                        variegated
                        purple
                        beautiful
                        lovely
                        pink
                        leaf
                        potted
                */

    // XHR POST Requests I
        // We will be making a POST request using the Rebrandly API.
        // JSON.stringify() will convert a value to a JSON string. By converting the value to a string, we can then send the data to a server.

        // WORKING EXAMPLE:
        const xhr = new XMLHttpRequest();
        const url = 'https://api-to-call.com/endpoint';
        const data = JSON.stringify({id: '200'});
        xhr.responseType = 'json';
        xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            return xhr.response;
        }        
        xhr.open('POST', url);
        xhr.send(data);
        }

    // XHR Post Requests III
        // WORKING EXAMPLE: rebrandly API
        const apiKey = 'c163b2f3c5b74752a8d77eb2bdadbca5';
        const url = 'https://api.rebrandly.com/v1/links';        
        // Some page elements
        const inputField = document.querySelector('#input');
        const shortenButton = document.querySelector('#shorten');
        const responseField = document.querySelector('#responseField');        
        // AJAX functions
        const shortenUrl = () => {
          const urlToShorten = inputField.value;
          const data = JSON.stringify({destination: urlToShorten});;
          const xhr = new XMLHttpRequest();
          xhr.responseType = 'json';
          xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
              renderResponse(xhr.response);
            }
          }
          xhr.open('POST', url);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.setRequestHeader('apikey', apiKey);
          xhr.send(data);
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
        /* OUTPUT: for https://medium.com/@codecademy/breaking-the-coding-language-barrier-bf24652c3c60
        rebrand.ly/ujsm0i
        */

/*
Review Requests I
    You’ve done an amazing job navigating through making XHR GET and POST requests! Take some time to review the core 
    concepts before moving on to the next lesson.

        JavaScript is the language of the web because of its asynchronous capabilities. AJAX, which stands for 
        Asynchronous JavaScript and XML, is a set of tools that are used together to take advantage of JavaScript’s asynchronous capabilities.

        There are many HTTP request methods, two of which are GET and POST.

        GET requests only request information from other sources.

        POST methods can introduce new information to other sources in addition to requesting it.

        GET requests can be written using an XMLHttpRequest object and vanilla JavaScript.

        POST requests can also be written using an XMLHttpRequest object and vanilla JavaScript.

        Writing GET and POST requests with XHR objects and vanilla JavaScript requires constructing the XHR object using new, 
        setting the responseType, creating a function that will handle the response object, and opening and sending the request.

        To add a query string to a URL endpoint you can use ? and include a parameter.

        To provide additional parameters, use & and then include a key-value pair, joined by =.

        Determining how to correctly write the requests and how to properly implement them requires carefully reading the 
        documentation of the API with which you’re working.
*/





        



