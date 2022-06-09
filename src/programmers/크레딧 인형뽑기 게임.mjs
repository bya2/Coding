export const solution = (_board, _move) => {
  let boom = 0;
  const stack = [];

  const queueList = _board.reduce((arr, row) => {
    for (const [idx, col] of row.entries()) {
      if (col !== 0) {
        if (!arr[idx]) {
          arr[idx] = [];
        }
        arr[idx].push(col);
      }
    }

    return arr;
  }, []);

  let stackLen = 0;
  for (const pos of _move) {
    if (queueList[pos - 1]) {
      stack.push(queueList[pos - 1].shift());
      ++stackLen;

      i f (stack[stackLen - 1] === stack[stackLen - 2]) {
        stack.pop();
        stack.pop();
        ++boom;
        stackLen -= 2;
      }
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
