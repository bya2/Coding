/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // INPUTS:
  // 1: 숫자카드의 개수
  // 2: 숫자카드에 적혀있는 정수 리스트
  // 3: 가지고 있는 수자 카드인지 아닌지 구해야할 정수의 개수
  // 4: 가지고 있는 숫자 카드인지 아닌지 구해야할 정수 리스트

  const [, numbers, _, numbers2] = inputs;
  const map = numbers
    .split(" ")
    .reduce((map, t) => map.set(t, true), new Map());
  return numbers2
    .split(" ")
    .map((n) => (map.has(n) ? 1 : 0))
    .join(" ");
};

export const examples = [
  {
    inputs: `5
    6 3 2 10 -10
    8
    10 9 -5 2 3 4 5 -10`,
    answer: `1 0 0 1 1 0 0 1`,
  },
];
