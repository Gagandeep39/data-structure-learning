/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  /**
   * Algoritm
   * 
   * 1. Create a new string with all hyphen removed
   * 2. CHeck if newstring % k is 0
   * 3. If not then insert newString %k values in a newstring and append -
   * 4. Loop through the remaining string and keep appending charactes with - after every k value
   */
  let temp = s.split('').filter((k) => k != '-');
  let res = [];
  // console.log(temp.slice(0, temp.length % k) + '-');
  if (temp.length == 1) return s[0].toUpperCase();
  if (temp.length % k != 0) {
    res.push(...temp.slice(0, temp.length % k));
    res.push('-');
  }
  let idx = temp.length % k;
  let count = 0;
  while (idx < temp.length) {
    if (count != 0 && count % k == 0) {
      count = 0;
      res.push('-');
    }
    res.push(temp[idx]);
    idx++;
    count++;
  }

  return res.join('').toUpperCase();
};

console.log(licenseKeyFormatting('2', 3));
