import { gcdFor, gcdOf } from "./loop.mjs";

/**
 * @param {number[]}
 */
Array.prototype.diffs = function () {
  const gaps = [];
  const THIS_LENGTH = this.length;
  for (let i = 1; i < THIS_LENGTH; ++i) gaps.push(this[i] - this[i - 1]);
  return gaps;
};

/**
 * @param {string[]} lines
 * 1. 위치 간 간격 리스트 구하기
 * 2. 간격들의 최대공약수 구하기
 */
export const solution = (lines) => {
  lines.shift();
  lines = lines.map(Number);
  const gaps = lines.diffs();
  const gcd = gcdFor(...gaps);
  return gaps.reduce((acc, n) => acc + n / gcd - 1, 0) + "";
};

export const examples = [
  {
    inputs: `4
    1
    3
    7
    13`,
    answer: `3`,
  },
  {
    inputs: `4
    2
    6
    12
    18`,
    answer: `5`,
  },
];
