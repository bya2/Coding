/**
 * n개의 원판을 3번 원판으로 최소로 옮기는 방법을 리턴
 * @param {number} n 1번 기둥에 있는 원판의 개수
 */
export const solution = (n) => {
  return hanoi(n, 1, 3, 2);
};

/**
 * 하노이의 탑
 * (https://shoark7.github.io/programming/algorithm/tower-of-hanoi)
 * - '세 개의 기둥'과 이 기동에 꽂을 수 있는 크기가 다양한 '원판'이 있다.
 * - 퍼즐을 시작하기 전에는 한 기둥에 원판들이 작은 것이 위에 있도록 순서대로 쌓여 있다.
 * - 목적은 한 기둥에 꽂힌 원판들을 그 순서 그대로 다른 기둥으로 옮겨서 다시 쌓는 것이다.
 * - 한 번에 하나의 원판만 옮길 수 있다.
 * - 큰 원판이 작은 원판 위에 있어서는 안된다.
 * @param {number} n 1번 기둥에 있는 원판의 개수
 */
export const hanoi = (n, from, to, via, paths = []) => {
  if (n === 1) {
    paths.push([from, to]);
  } else {
    hanoi(n - 1, from, via, to, paths);
    paths.push([from, to]);
    hanoi(n - 1, via, to, from, paths);
  }
  return paths;
};

export const examples__arr = [
  {
    n: 2,
    answer: [
      [1, 2],
      [1, 3],
      [2, 3],
    ],
  },
];
