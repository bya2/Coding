/**
 * @param {number} n 사람의 수
 * @param {number} k n! 이하의 자연수
 * @return {number[]} k번째 경우의 수
 */
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
