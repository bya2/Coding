export const solution = (n, s) => {
  const d = (s / n) >> 0;
  if (!d) return [-1];

  const rest = s % n;
  if (s !== 1 && rest === 0) return Array.from({ length: n }, () => d);

  const needs = Array(n).fill(d);
  for (let i = 0, len = needs.length; i < rest; ++i) {
    ++needs[len - 1 - i];
  }
  return needs;
};

// 합이 s고 곱이 최대가 되는 원소의 집합 getter
export const setOfMaxMultiForSum = (numberOf, sum) => {
  const d = (sum / numberOf) >> 0;
  if (!d) return [-1];

  const rest = sum % numberOf;
  if (sum !== 1 && rest === 0) return Array.from({ length: numberOf }, () => d);

  const needs = Array(numberOf).fill(d);
  for (let i = 0, len = needs.length; i < rest; ++i) {
    ++needs[len - 1 - i];
  }
  return needs;
};

export const fail_solution = (n, s) => {
  let d = (s / n) >> 0;
  let f = d - Math.floor((n - 1) / 2);
  if (f <= 0) return [-1];
  if (s % 2 === 0) return Array.from({ length: n }, () => f);
  let e = f + n;
  let arr = [];
  for (let i = f; i < e; ++i) {
    arr.push(i);
  }
  return arr;
};
