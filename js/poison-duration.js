/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  /**
   * Algorimth
   * 
   * 1. Create a counter variable
   * 2. Iterate tthrough timeseries
   * 3. Loop again from 0-duration and increment seconds
   *    a. If current timeseries value + duration = next value in timeseries then skip the inner loop
   */
  let seconds = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    for (let j = 0; j < duration; j++) {
      if (timeSeries[i] + j == timeSeries[i + 1]) break;
      seconds++;
    }
  }
  return seconds;
};

console.log(findPoisonedDuration([1, 2], 2));
