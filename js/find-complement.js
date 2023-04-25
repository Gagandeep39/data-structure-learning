/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  /**
   * Algorithm
   * 
   * 1. Find Binary number
   * 2. Swap 1 and 0 using a for loop
   * 3. COnvert back to decimal
   */
  const binaryString = num.toString(2);
  let binaryComplementString = '';
  for (let i = 0; i < binaryString.length; i++) {
    binaryComplementString += Number(binaryString[i]) ? 0 : 1;
  }
  return parseInt(binaryComplementString, 2);
};

console.log(findComplement(4));
