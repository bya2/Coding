export const solution = (_board, _moves) => {
  let boom = 0;
  let stack = [];

  for (let pos of _moves) {
    for (let row = 0; row < _board.length; ++row) {
      const col = pos - 1;

      if (_board[row][col] !== 0) {
        stack = [...stack, _board[row][col]];
        _board[row][col] = 0;
        break;
      }
    }
  }

  for (let sIdx = stack.length; sIdx > 0; --sIdx) {
    if (stack[sIdx] === stack[sIdx - 1]) {
      ++boom;
      stack.splice(sIdx-1, 2);
      sIdx = stack.length;
    }
  }

  return boom * 2;
};

export const examples__arr = [
  {
    board: [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    move: [1, 5, 3, 5, 1, 2, 1, 4],
    answer: 4,
  },
];
