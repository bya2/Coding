/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // INPUT:
  // 1. 수의 개수(홀수)
  // 2~. 정수

  // OUTPUT:
  // 1. 산술평균
  // 2. 중앙값
  // 3. 최빈값
  // 4. 범위

  inputs.shift();
  inputs = inputs.map(Number).sort((a, b) => a - b);
  const map = inputs.reduce(
    (map, t) => map.set(t, (map.get(t) || 0) + 1, map),
    new Map()
  );
  const max = Math.max(...map.values());
  const fqs = [...map.keys()].filter((n) => map.get(n) === max);

  const avg = Math.round(inputs.reduce((acc, n) => acc + n, 0) / inputs.length);
  const middle = inputs[Math.floor(inputs.length / 2)];
  const fq = fqs.length === 1 ? fqs[0] : fqs[1];
  const range = inputs[inputs.length - 1] - inputs[0];

  return `${avg}\n${middle}\n${fq}\n${range}`;
};

export const examples = [
  {
    inputs: `5
    1
    3
    8
    -2
    2`,
    answer: `2
    2
    1
    10`,
  },
  {
    inputs: `1
    4000`,
    answer: `4000
    4000
    4000
    0`,
  },
  {
    inputs: `5
    -1
    -2
    -3
    -1
    -2`,
    answer: `-2
    -2
    -1
    2`,
  },
  {
    inputs: `3
    0
    0
    -1`,
    answer: `0
    0
    0
    1`,
  },
];
