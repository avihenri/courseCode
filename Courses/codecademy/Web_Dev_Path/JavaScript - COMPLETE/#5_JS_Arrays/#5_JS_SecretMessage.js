let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// FIRST MESSAGE
    // Learning is not about what you get easily the first time, it is about what you can figure out. -2015, Chris Pine, Learn JavaScript

secretMessage.pop(); // removes the last item
secretMessage.push('to', 'Program'); // adds two items to the end
secretMessage[7] = 'right'; // changes position 7
secretMessage.shift(); // removes the first item
secretMessage.unshift('Progamming'); // Adds an item to the beginning
secretMessage.splice(6, 5, 'know'); // removes 5 items from position 6 and replaces it with a new item
console.log(secretMessage.join(' ')); // joins the new message together

// NEW MESSAGE
    // Progamming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to Program