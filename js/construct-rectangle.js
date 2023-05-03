/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  /**
   * Algorithm
   *
   * 1. Calculate squaroot (Midoint of the area) as a whole number
   * 2. Loop thurg the value until i =1
   * 3. Check if area% mid is 0
   *    a. If yea then return [area/i, i]
   * 4. Return area, 1 (All number are divisible by 1)
   */
  let mid = Math.floor(Math.sqrt(area));
  for (let i = mid; i >= 1; i--) {
    if (area % i == 0) return [area / i, i];
  }
  return [area, 1];
};

console.log(constructRectangle(9));
