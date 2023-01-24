/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // INPUTS:
  // 0: n, m
  // 1~n: 집합S에 포함되어있는 문자열들
  // n+1~: 검사해야하는 문자열들
  const [n, _] = inputs.shift().split(" ").map(Number);
  const S = inputs.slice(0, n);
  const C = inputs.slice(n);
  console.log(S, C);
  const map = S.reduce((map, t) => map.set(t, true), new Map());
  return C.filter((word) => map.has(word)).length + "";
};

export const examples = [
  {
    inputs: `5 11
    baekjoononlinejudge
    startlink
    codeplus
    sundaycoding
    codingsh
    baekjoon
    codeplus
    codeminus
    startlink
    starlink
    sundaycoding
    codingsh
    codinghs
    sondaycoding
    startrink
    icerink`,
    answer: `4`,
  },
];
