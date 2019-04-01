/*
Message Mixer
Message Mixer is a messaging service that allows you to perform an action on input text and 
display the output of that behavior to the console. For example, with the current functions 
defined in Message Mixer, you can:

count the characters in a message
capitalize the first character of words
reverse a message’s words in place
reversing characters in place
replace the first occurrence of a string
replace all occurrences of a string
encode text by swapping certain characters for other characters
At present, Message Mixer runs as a program in a single file. This single file includes functions 
that define behavior as well as the output. Message Mixer knows that by extracting the functions 
into a module, logic can be reused in different parts of our application.
*/

/* ============ MessageMixer.js ============= */

let MessageMixer = {};
// count the characters in a message
function countCharacter(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count; 
};
// capitalize the first character of words
function capitalizeFirstCharacterOfWords(string) {
  let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
  return arr.join(" "); 
};
// reverse a messages words in place
function reverseWord(word) {
  return word.split("").reverse().join("");
};
// reversing characters in place
function reverseAllWords(sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i]);
    }
   return words.join(" ");
};
// replace the first occurrence of a string
function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};
// replace all occurrences of a string
function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};
// encode text by swapping certain characters for other characters
function encode(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
};
function palindrome(str) {
  return str + ' ' + reverseWord(str);
};
function pigLatin(sentence, character) {
  return sentence.split(' ').join(character + ' ');
};

export { countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode, palindrome, pigLatin };


/* ============ message.js ============= */

import { countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode, palindrome, pigLatin  } from './messageMixer.js';

function displayMessage() {
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(reverseWord("What is the color of the sky?"));
  console.log(reverseAllWords("What is the color of the sky?"));
  console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(encode("What is the color of the sky?"));
  console.log(palindrome('here is a string yo!'));
  console.log(pigLatin('here is a string boo ya!', '%'));
}

displayMessage();

/* OUTPUT:
3
What Is The Color Of The Sky?
?yks eht fo roloc eht si tahW
tahW si eht roloc fo eht ?yks
What is the color of the water?
Wh@t !$ the c0l0r 0f the $ky?
here is a string yo! !oy gnirts a si ereh
here% is% a% string% boo% ya!
*/
