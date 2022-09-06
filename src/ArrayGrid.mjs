export class ArrayGrid {
  createSortedNumber(rows, columns) {
    let matrix = [];

    for (let i = 0, count = 1; i < rows; ++i) {
      matrix[i] = [];
      for (let j = 0; j < columns; ++j, ++count) {
        matrix[i].push(count);
      }
    }

    return matrix;
  }

  rotatePart(grid, [x1, y1, x2, y2], isIndex = false) {
    if (!isIndex) {
      x1--;
      y1--;
      x2--;
      y2--;
    }

    const tmp = grid[x1][y1];
    let minNum = tmp;

    for (let i = x1; i < x2; ++i) {
      grid[i][y1] = grid[i + 1][y1];
      minNum = Math.min(grid[i + 1][y1], minNum);
    }

    for (let i = y1; i < y2; ++i) {
      grid[x2][i] = grid[x2][i + 1];
      minNum = Math.min(grid[x2][i + 1], minNum);
    }

    for (let i = x2; i > x1; --i) {
      grid[i][y2] = grid[i - 1][y2];
      minNum = Math.min(grid[i - 1][y2], minNum);
    }

    for (let i = y2; i > y1; --i) {
      grid[x1][i] = grid[x1][i - 1];
      minNum = Math.min(grid[x1][i - 1], minNum);
    }

    grid[x1][y1 + 1] = tmp;

    return minNum;
  }
}
