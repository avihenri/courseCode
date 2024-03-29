/*
Objective

Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

Task

Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e., n factorial).

Input Format

Locked stub code in the editor reads a single integer, n, from stdin and passes it to a function named factorial.

Constraints
1 < n < 10

Output Format

The function must return the value of n.

Sample Input 
4

Sample Output 
24

Explanation 

We return the value of 4! = 4x3x2x1 = 24
n! = n * (n - 1) * (n - 2) * ...*1

*/

/*
 * Create the function factorial here
 */
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
