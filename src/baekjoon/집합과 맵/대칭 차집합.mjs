/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // 두 집합 A와 B가 있을 때, (A-B)와 (B-A)의 합집합을 A와 B의 대칭 차집합
  const A = inputs[1].split(" ").map(Number);
  const B = inputs[2].split(" ").map(Number);

  const aMap = A.reduce((map, t) => map.set(t, true), new Map());
  const bMap = B.reduce((map, t) => map.set(t, true), new Map());

  A.forEach((n) => {
    if (bMap.has(n)) {
      aMap.delete(n);
      bMap.delete(n);
    }
  });

  return aMap.size + bMap.size + "";
};

export const examples = [
  {
    inputs: `3 5
    1 2 4
    2 3 4 5 6`,
    answer: `4`,
  },
];
