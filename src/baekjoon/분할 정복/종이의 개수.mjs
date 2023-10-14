/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  let [N, ...board] = lines;
  N = +N;
  board = board.map((row) => row.split(" ").map(Number));

  let counts = [0, 0, 0];

  const isFilledSameThing = (r, c, length) => {
    const base = board[r][c];
    for (let i = r; i < r + length; ++i) {
      for (let j = c; j < c + length; ++j) {
        if (board[i][j] !== base) return false;
      }
    }
    return true;
  };

  (function subdivide(r, c, length) {
    if (isFilledSameThing(r, c, length)) {
      counts[board[r][c] + 1]++;
    } else {
      const subLength = length / 3;
      const dx = [r, r + subLength, r + 2 * subLength];
      const dy = [c, c + subLength, c + 2 * subLength];
      for (const x of dx) for (const y of dy) subdivide(x, y, subLength);
    }
  })(0, 0, N);

  return counts.join("\n");
};

export const examples = [
  {
    inputs: `9
    0 0 0 1 1 1 -1 -1 -1
    0 0 0 1 1 1 -1 -1 -1
    0 0 0 1 1 1 -1 -1 -1
    1 1 1 0 0 0 0 0 0
    1 1 1 0 0 0 0 0 0
    1 1 1 0 0 0 0 0 0
    0 1 -1 0 1 -1 0 1 -1
    0 -1 1 0 1 -1 0 1 -1
    0 1 -1 1 0 -1 0 1 -1`,
    answer: `10
    12
    11`,
  },
];
