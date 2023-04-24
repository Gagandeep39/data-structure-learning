/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  /**
   * Algoritm
   * 
   * 1. Save height and width of grid
   * 2. Iterate through it row, col cmbintion
   * 3. If that vaue is 1, then incremen perimeter by 4
   *    a. Check if 1 exists in left/right/up/down and decrement perimeter by 1
   * 4. Return permieter
   */
  let height = grid.length;
  let width = grid[0].length;
  let count = 0;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (!grid[row][col] == 1) continue;
      count += 4;

      // If above item is also 1
      if (row > 0 && grid[row - 1][col] == 1) count--;

      // Check left
      if (col > 0 && grid[row][col - 1] == 1) count--;

      // Check right
      if (grid[row][col + 1] == 1) count--;

      // Check below
      if (row < height - 1 && grid[row + 1][col] == 1) count--;
    }
  }
  return count;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
