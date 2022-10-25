/**
 * @param {number} n 요소의 수
 * @param {number} k 순번(n! 이하의 자연수)
 * @return {number[]} k번째 경우의 수
 */
export const solution = (n, k) => {
  const arr = Array.from({ length: n + 1 }, (_, i) => i);
  arr.shift();

  let seq = [];
  k--;
  while (arr.length) {
    if (k === 0) {
      seq.push(...arr);
      break;
    }

    const factN = factorial(arr.length - 1);
    const index = ~~(k / factN);
    k = k % factN;

    seq.push(arr[index]);
    arr.splice(index, 1);
  }

  return seq;
};

const factorial = (n) => {
  let val = 1;
  for (let i = 2; i <= n; i++) val *= i;
  return val;
};

export const fail_solution = (n, k) => {
  let costs = [0, 1];
  for (let i = 2, to = n; i < to; ++i) costs.push(costs[i - 1] * i);
  costs = costs.reverse();

  let persons = Array.from({ length: n }, (_, i) => i + 1);
  let indexes = [k];
  for (let i = 0, len = costs.length; i < len; ++i) {
    indexes.push(indexes[i] % costs[i]);
  }
  indexes.pop();

  console.log(costs);

  let seq = [];
  let i = 0;
  while (persons.length) {
    const j = ~~(indexes[i] / costs[i]) % n;
    seq.push(persons.splice(j, 1)[0]);
    n--;
  }

  return seq;
};

export const examples__arr = [
  {
    n: 3,
    k: 5,
    answer: [3, 1, 2],
  },
];
