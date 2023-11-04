/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const [[N, S], seq] = lines.map((line) => line.split(" ").map(Number));
  let i = 0;
  let j = 0;
  let acc = seq[0];
  let minLen = Number.MAX_SAFE_INTEGER;

  while (i < N) {
    if (i > j) {
      j = i;
      acc = seq[i];
    }

    if (acc >= S) {
      minLen = Math.min(minLen, j - i + 1);
      acc -= seq[i++];
    } else {
      if (j === N - 1) break;
      acc += seq[++j];
    }
  }

  if (minLen === Number.MAX_SAFE_INTEGER) minLen = 0;

  return minLen + "";
};

export const examples = [
  {
    inputs: `10 15
    5 1 3 5 10 7 4 9 2 8`,
    answer: `2`,
  },
  {
    inputs: `10 11
    3 1 1 1 1 1 1 1 1 2`,
    answer: `9`,
  },
  {
    inputs: `10 10
    1 1 1 1 1 1 1 1 1 1`,
    answer: `10`,
  },
  {
    inputs: `10 10
    1 1 1 1 1 1 1 1 1 10`,
    answer: `1`,
  },
];
