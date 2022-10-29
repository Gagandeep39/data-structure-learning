var threeSum = function (nums) {
  let target = 0;
  const result = [];

  // we need 3 values for this to work
  // so return an empty array if we have less than 3
  if (nums.length < 3) {
    return result;
  }

  // sorting is ok because the function is already O(n^2)
  // and sort is O(nlogn)
  // this also lets us stop iterating once weve passed the target value
  nums = nums.sort((a, b) => a - b);

  // well use i as our anchor as we move through the array
  // we stop at nums.length - 2 to prevent undefined for k
  for (let i = 0; i < nums.length - 2; i++) {
    // because we sorted the array already
    // we can stop here if the current iterator is greater than the target value
    if (nums[i] > target) {
      break;
    }

    // if our iterator is the same as the previous value
    // skip it to prevent duplicate results
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // start j at i + 1
    let j = i + 1;

    // start k at end of array
    let k = nums.length - 1;

    // walking j and k towards each other to find all possible values
    // with i as our anchor value
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]]);

        // skip duplicate values of j and k
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        // move j and k inward
        j++;
        k--;
        continue;
      }
      if (sum < target) {
        j++;
        continue;
      }
      if (sum > target) {
        k--;
        continue;
      }
    }
  }
  return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSumManual(nums) {
  // 1. Set target as 0
  // 2. Sort the array in desc
  // 3. Run a for loop till n-2 (n-2 coz will do the su for first, mid, last)
  // If target > 0 then quit as were only left with pistive number which cant result to 0
  // If i == i-1 then skip as we are dealing with number already seen
  // 4. Consider i as starting el, k as last and j ad between
  // 5. Run a while loop until j < k
  // Calculate sum of num[i, j, k]
  // if sum == target then (Push it in result array, check if j and j+1 are same and increment, repeat for k,  Mnaull increment for both for one last time)
  // else if sum < target then j++
  // else if sum > target then k--
  const target = 0;
  let results = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    j = i + 1;
    k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === target) {
        results.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k + 1]) k--;

        j++;
        k--;
      } else if (sum < target) j++;
      else if (sum > target) k--;
    }
  }

  return results;
}

console.table(threeSumManual([-1, 0, 1, 2, -1, -4]));
