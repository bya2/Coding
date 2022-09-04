export const createGrid = (rows, columns) => {
  let matrix = [];

  for (let i = 0, count = 1; i < rows; ++i) {
    matrix[i] = [];
    for (let j = 0; j < columns; ++j, ++count) {
      matrix[i].push(count);
    }
  }

  return matrix;
};

export const rotateGrid = (grid, [r1, c1, r2, c2]) => {
  r1--;
  c1--;
  r2--;
  c2--;

  const tmp = grid[r1][c1];
  let minNum = tmp;

  for (let i = r1; i < r2; ++i) {
    grid[i][c1] = grid[i + 1][c1];
    minNum = Math.min(grid[i + 1][c1], minNum);
  }

  for (let i = c1; i < c2; ++i) {
    grid[r2][i] = grid[r2][i + 1];
    minNum = Math.min(grid[r2][i + 1], minNum);
  }

  for (let i = r2; i > r1; --i) {
    grid[i][c2] = grid[i - 1][c2];
    minNum = Math.min(grid[i - 1][c2], minNum);
  }

  for (let i = c2; i > c1; --i) {
    grid[r1][i] = grid[r1][i - 1];
    minNum = Math.min(grid[r1][i - 1], minNum);
  }

  grid[r1][c1 + 1] = tmp;

  return minNum;
};

// 가장 작은 숫자들을 순서대로 배열에 담아 리턴
// 문제1: 원래 자리에 되돌아왔을 가능성
export const solution = (rows, columns, queries) => {
  const mat = createGrid(rows, columns);
  return queries.map(q => rotateGrid(mat, q));
};

export const examples__arr = [
  {
    rows: 6,
    columns: 6,
    q: [
      [2, 2, 5, 4],
      [3, 3, 6, 6],
      [5, 1, 6, 3],
    ],
    answer: [8, 10, 25],
  },
  {
    rows: 3,
    columns: 3,
    q: [
      [1, 1, 2, 2],
      [1, 2, 2, 3],
      [2, 1, 3, 2],
      [2, 2, 3, 3],
    ],
    answer: [1, 1, 5, 3],
  },
  {
    rows: 100,
    columns: 97,
    q: [[1, 1, 100, 97]],
    answer: [1],
  },
];
