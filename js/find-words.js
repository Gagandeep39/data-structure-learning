/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  /**
   *Algorithm
   * 1. Store the keyboard rows in a hash map 
   * 2. Iterate through input words list
   * 3. If word length is one then insert it in the result array
   * 4. Else Store in the variable what what row the first character to ord belongs to
   * 5. Iterate through remaining characters if the word and check if they are also in same row
   * 6. If yes then insert the word in resultant array
   * 7. Else skip the inner loop
   */

  const cache = {
    q: 0,
    w: 0,
    e: 0,
    r: 0,
    t: 0,
    y: 0,
    u: 0,
    i: 0,
    o: 0,
    p: 0,
    a: 1,
    s: 1,
    d: 1,
    f: 1,
    g: 1,
    h: 1,
    j: 1,
    k: 1,
    l: 1,
    z: 2,
    x: 2,
    c: 2,
    v: 2,
    b: 2,
    n: 2,
    m: 2,
  };
  let res = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length == 1) {
      res.push(word);
      continue;
    }
    const currRow = cache[word[0].toLowerCase()];
    for (let j = 1; j < word.length; j++) {
      if (cache[word[j].toLowerCase()] !== currRow) break;

      if (j == word.length - 1) res.push(word);
    }
  }
  return res;
};

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']));
