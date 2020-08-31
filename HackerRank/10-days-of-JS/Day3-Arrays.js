/*
Objective

In this challenge, we learn about Arrays. Check out the attached tutorial for more details.

Task

Complete the getSecondLargest function in the editor below. It has one parameter: an array, nums,
of n numbers. The function must find and return the second largest number in nums.

Input Format

Locked stub code in the editor reads the following input from stdin and passes it to the function:
The first line contains an integer, n, denoting the size of the nums array.
The second line contains n space-separated numbers describing the elements in nums.

Constraints

1 < n < 10, 
0 < nums < 100, where nums is the number at index i.
The numbers in nums are not distinct.
Output Format

Return the value of the second largest number in the nums array.

Sample Input 0

5
2 3 6 6 5
Sample Output 0

5
Explanation 0

Given the array , we see that the largest value in the array is  and the second largest value is . Thus, we return  as our answer.

*/

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
  let temp = nums.filter(function (item, pos) {
    // filter out duplicates
    return nums.indexOf(item) == pos;
  });

  temp.sort(function (a, b) {
    // sort in order
    return a > b;
  });

  return temp[temp.length - 2]; // return second last item
}
