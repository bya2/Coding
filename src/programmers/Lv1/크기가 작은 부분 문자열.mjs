/**
 * @param {string} t
 * @param {string} p
 * @returns {number}
 */
export function solution(t, p) {
  let count = 0;
  for (
    let i = 0, subLen = p.length, n = +p, len = t.length - p.length + 1;
    i < len;
    ++i
  ) {
    if (n >= +t.substring(i, i + subLen)) ++count;
  }
  return count;
}

export const examples__arr = [
  {
    t: "3141592",
    p: "271",
    answer: 2,
  },
  {
    t: "500220839878",
    p: "7",
    answer: 8,
  },
  {
    t: "10203",
    p: "15",
    answer: 3,
  },
];
