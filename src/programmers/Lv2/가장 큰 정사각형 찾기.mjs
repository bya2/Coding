/**
 * @param {number[][]} board
 */
export const solution = (board) => {
  let rows = board.length;
  let columns = board[0].length;

  if (rows < 2 || columns < 2) return 1;

  let length = 0;

  for (let i = 1; i < rows; ++i) {
    for (let j = 1; j < columns; ++j) {
      if (board[i][j] !== 0) {
        let minimum = Math.min(board[i - 1][j - 1], board[i][j - 1], board[i - 1][j]);
        board[i][j] = minimum + 1;
      }
      if (length < board[i][j]) length = board[i][j];
    }
  }

  return length ** 2;
};

export const examples__arr = [
  {
    board: [
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 0, 1, 0],
    ],
    answer: 9,
  },
  {
    board: [
      [0, 0, 1, 1],
      [1, 1, 1, 1],
    ],
    answer: 4,
  },
];
