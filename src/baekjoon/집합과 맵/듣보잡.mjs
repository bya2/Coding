/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // INPUTS:
  // 0:듣도 못한 사람의 수 N, 보도 못한 사람의 수 M
  // 1~N: N개의 줄에 걸쳐 듣도 못한 사람의 이름
  // N+1~: 보도 못한 사람의 이름이 순서대로

  // OUTPUT:
  // - 듣보잡의 수와 그 명단을 사전순으로 출력

  const [n, _] = inputs.shift().split(" ").map(Number);
  const map = inputs
    .slice(0, n)
    .reduce((map, t) => map.set(t, true), new Map());
  const results = inputs
    .slice(n)
    .filter((name) => map.has(name)) // 듣보잡
    .sort(); // 사전순
  return results.length + "\n" + results.join("\n");
};

export const examples = [
  {
    inputs: `3 4
    ohhenrie
    charlie
    baesangwook
    obama
    baesangwook
    ohhenrie
    clinton`,
    answer: `2
    baesangwook
    ohhenrie`,
  },
];
