/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const [n, A, opers] = lines.map((line) => line.split(" ").map(Number));

  const calc = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => (a / b) >> 0,
  ];

  let maximum = Number.MIN_SAFE_INTEGER;
  let minimum = Number.MAX_SAFE_INTEGER;

  (function recur(count = 0, result = A[0]) {
    if (count === n - 1) {
      maximum = Math.max(maximum, result);
      minimum = Math.min(minimum, result);
      return;
    }

    for (let i = 0; i < 4; ++i) {
      if (!opers[i]) continue;
      opers[i]--;
      recur(count + 1, calc[i](result, A[count + 1]));
      opers[i]++;
    }
  })();

  return `${maximum}\n${minimum}`;
};

export const examples = [
  {
    inputs: `2
    5 6
    0 0 1 0`,
    answer: `30
    30`,
  },
];
