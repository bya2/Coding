/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const [[n, c], W] = lines.map((line) => line.split(" ").map(Number));
  let i = 0;
  let j = 0;
  let acc = 0;
  let count = 1;

  const DFS = (s, e, acc, v) => {
    if (s >= e) {
      v.push(acc);
      return;
    }
  
    s++;
    DFS(s, e, acc, v);
    DFS(s, e, acc + W[s], v);
  };
};

// 문제: 경우의 수가 아닌 범위의 문제로 풀음
export const fail1 = (lines) => {
  const [[n, c], W] = lines.map((line) => line.split(" ").map(Number));

  let i = 0;
  let j = 0;
  let acc = 0;
  let count = 1;

  while (j < W.length) {
    acc += W[j];
    while (acc > c) {
      acc -= W[i++];
    }
    if (acc <= c) count++;
    j++;
  }

  return count + "";
};

export const fail2 = (lines) => {
  const [[n, c], W] = lines.map((line) => line.split(" ").map(Number));

  let i = 0;
  let j = 0;
  let acc = W[0];
  let count = 1;

  while (i < W.length) {
    if (i > j) {
      j = i;
      acc = W[0];
    }

    if (acc > c) {
      acc -= W[i++];
    } else {
      count++;
      if (j === W.length - 1) break;
      acc += W[++j];
    }
  }

  return count + "";
};

export const examples = [
  {
    inputs: `2 1
    1 1`,
    answer: `3`,
  },
  {
    inputs: `30 30
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1`,
    answer: `1073741824`,
  },
];
