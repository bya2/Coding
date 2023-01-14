/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // 1. 나이순
  // 2. 가입한 순서
  inputs.shift();
  return inputs
    .map((s) => s.split(" "))
    .sort((a, b) => +a[0] - +b[0])
    .map((s) => s.join(" "))
    .join("\n");
};

export const examples = [
  {
    inputs: `3
    21 Junkyu
    21 Dohyun
    20 Sunyoung`,
    answer: `20 Sunyoung
    21 Junkyu
    21 Dohyun`,
  },
];
