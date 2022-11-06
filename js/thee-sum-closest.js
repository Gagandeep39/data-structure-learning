/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // Algorithm
  // 1. Sort the array
  // 2. Take a var closest and assign a very high value
  // 3. Run a for loop till nums.length - 2 (To accomodate 2nd and 3rd num)
  // 4. Check if current and previous number were same (Skip itr in that scenario)
  // 5. Cal j as number after i and k as las element
  // 6. Run a while run until j  < k
  // Calculate sum of ith, jth, kth
  // If equal to target then return the result
  // 7. Calculate who os closer ...prev closest or total,  closest => if target - closest < target - total then closest else total
  // 8. If total < target then increment j, skip duplicate
  // 9. else decreemnt k
  let closest = 0;
  nums.sort((a, b) => a - b);
};
