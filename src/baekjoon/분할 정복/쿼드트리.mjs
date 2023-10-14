/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  let [N, ...board] = lines;
  N = +N;
  board = board.map((row) => row.split("").map(Number));
  let s = "";

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
      s += board[r][c];
    } else {
      const half = length / 2;
      const nR = r + half;
      const nC = c + half;
      s += "(";
      subdivide(r, c, half);
      subdivide(r, nC, half);
      subdivide(nR, c, half);
      subdivide(nR, nC, half);
      s += ")";
    }
  })(0, 0, N);

  return s;
};

export const examples = [
  {
    inputs: `8
    11110000
    11110000
    00011100
    00011100
    11110000
    11110000
    11110011
    11110011`,
    answer: `((110(0101))(0010)1(0001))`,
  },
];
