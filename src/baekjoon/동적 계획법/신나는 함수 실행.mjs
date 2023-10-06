const cache = Array.from({ length: 101 }, () =>
  Array.from({ length: 101 }, () => Array.from({ length: 101 }, () => 0))
);

const memoize = (cb) => {
  return (a, b, c) => {
    if (cache[a][b][c] === 0) cache[a][b][c] = cb(a, b, c);
    return cache[a][b][c];
  };
};

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const N = 50;
  const M = 70;

  const w = (a, b, c) => {
    const recur = memoize((a, b, c) => {
      if (a <= N || b <= N || c <= N) {
        return 1;
      } else if (a > M || b > M || c > M) {
        return recur(M, M, M);
      } else if (a < b && b < c) {
        return recur(a, b, c - 1) + recur(a, b - 1, c - 1) - recur(a, b - 1, c);
      } else {
        return (
          recur(a - 1, b, c) +
          recur(a - 1, b - 1, c) +
          recur(a - 1, b, c - 1) -
          recur(a - 1, b - 1, c - 1)
        );
      }
    });

    return recur(a, b, c);
  };

  lines.pop();
  return lines
    .map((line) => {
      let [a, b, c] = line.split(" ").map(Number);
      return `w(${a}, ${b}, ${c}) = ${w(a + 50, b + 50, c + 50)}`;
    })
    .join("\n");
};

export const examples = [
  {
    inputs: `1 1 1
    2 2 2
    10 4 6
    50 50 50
    -1 7 18
    -1 -1 -1`,
    answer: `w(1, 1, 1) = 2
    w(2, 2, 2) = 4
    w(10, 4, 6) = 523
    w(50, 50, 50) = 1048576
    w(-1, 7, 18) = 1`,
  },
];
