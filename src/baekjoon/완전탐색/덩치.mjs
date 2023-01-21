const log = console.log;

/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // INPUTS:
  // 1: 전체 사람의 수
  // 2~: 몸무게, 키

  // OUTPUT:
  // - 덩치 등수를 구해서 그 순서대로 첫 줄에 출력

  const n = +inputs.shift();
  inputs = inputs.map((input) => input.split(" ").map(Number));
  const ranks = [];

  for (let i = 0; i < n; ++i) {
    let count = 1;
    for (let j = 0; j < n; ++j) {
      if (i !== j) {
        inputs[i][0] < inputs[j][0] && inputs[i][1] < inputs[j][1] && count++;
      }
    }
    ranks.push(count);
  }

  return ranks.join(" ");
};

export const examples = [
  {
    inputs: `5
    55 185
    58 183
    88 186
    60 175
    46 155`,
    answer: `2 2 1 2 5`,
  },
];
