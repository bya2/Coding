/**
 * 빈병a = 콜라b
 * @param {number} a
 * @param {number} b
 * @param {number} n
 * @return {number} 받을 수 있는 콜라의 갯수
 */
export const solution = (a, b, n) => {
  let sum = 0;

  while (n >= a) {
    let gain = ~~(n / a) * b; // 받는 콜라의 갯수
    sum += gain;
    n = gain + (n % a);
  }

  return sum;
};

export const get콜라게임 = (a, b, n) => {
  return Math.floor(Math.max(n - b, 0) / (a - b)) * b;
};

export const examples__arr = [
  {
    a: 2,
    b: 1,
    n: 20,
    answer: 19,
  },
  {
    a: 3,
    b: 1,
    n: 20,
    answer: 9,
  },
];
