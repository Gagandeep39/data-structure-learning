/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  /**
   * Algorithm
   * 
   * 1. Create variable to store max ones count and another to store current ones
   * 2. Iterage through the loop
   *    a. If the elemnt is 0 then, reset current one counter, set max one var as maximum of current or previous max
   *    b. Else increment current one counters
   * 3. Return max one variable or current one counter whichever is greator
   */
  let maxOne = 0;
  let currentOnes = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element == 0) {
      maxOne = Math.max(currentOnes, maxOne);
      currentOnes = 0;
    } else {
      currentOnes++;
    }
  }
  
  maxOne = Math.max(currentOnes, maxOne);
  return maxOne;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
