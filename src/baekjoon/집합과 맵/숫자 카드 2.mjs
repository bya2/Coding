/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // INPUTS:
  // 1: 가진 숫자 카드의 개수
  // 2: 정수 리스트
  // 3: 몇 개 가지고 있는 지 구해야할 숫자 카드의 개수
  // 4: 정수 리스트

  const [, numbers, _, numbers2] = inputs;

  const map = numbers
    .split(" ")
    .reduce((map, t) => map.set(t, (map.get(t) || 0) + 1), new Map());

  return numbers2
    .split(" ")
    .map((n) => map.get(n) || 0)
    .join(" ");
};

export const examples = [
  {
    inputs: `10
    6 3 2 10 10 10 -10 -10 7 3
    8
    10 9 -5 2 3 4 5 -10`,
    answer: `3 0 0 1 2 0 0 2`,
  },
];
