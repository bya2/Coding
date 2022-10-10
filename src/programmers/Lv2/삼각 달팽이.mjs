export function solution(n) {
  const arr = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));

  for (let [m, row, col, val] = [n, -1, 0, 0]; m > 0; m -= 3) {
    for (let i = 0; i < m; ++i) {
      arr[++row][col] = ++val;
    }

    for (let [i, len] = [0, m - 1]; i < len; ++i) {
      arr[row][++col] = ++val;
    }

    for (let [i, len] = [0, m - 2]; i < len; ++i) {
      arr[--row][--col] = ++val;
    }
  }

  return [].concat(...arr);
}

// 이게 더 빠름. 왜지?
export function solution2(n) {
  const arr = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
  let [row, col, val] = [-1, 0, 0];

  while (n > 0) {
    for (let i = 0; i < n; ++i) {
      ++row;
      ++val;
      arr[row][col] = val;
    }

    for (let [i, len] = [0, n - 1]; i < len; ++i) {
      ++col;
      ++val;
      arr[row][col] = val;
    }

    for (let [i, len] = [0, n - 2]; i < len; ++i) {
      --row;
      --col;
      ++val;
      arr[row][col] = val;
    }

    n -= 3;
  }

  return [].concat(...arr);
}

export const examples__arr = [
  {
    n: 4,
    answer: [1, 2, 9, 3, 10, 8, 4, 5, 6, 7],
  },
  {
    n: 5,
    answer: [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9],
  },
  {
    n: 6,
    answer: [1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11],
  },
];
