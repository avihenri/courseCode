/*
Objective

In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

Task

Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in .
Input Format

Locked stub code in the editor reads string s from stdin and passes it to the function.

Output Format

First, print each vowel in s on a new line (in the same order as they appeared in s). 
Second, print each consonant (i.e., non-vowel) in s on a new line (in the same order as they appeared in s).

Sample Input 
javascriptloops

Sample Output 
a
a
i
o
o
j
v
s
c
r
p
t
l
p
s

Explanation 
Observe the following:

Each letter is printed on a new line.
Then the vowels are printed in the same order as they appeared in s.
Then the consonants are printed in the same order as they appeared in s.

*/

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let vowelsArr = ["a", "e", "i", "o", "u"];
  let letters = s.split("");
  let vowels = [],
    consonants = [];
  for (let i in letters) {
    vowelsArr.includes(letters[i])
      ? vowels.push(letters[i])
      : consonants.push(letters[i]);
  }
  vowels.forEach((el) => console.log(el));
  consonants.forEach((el) => console.log(el));
}
