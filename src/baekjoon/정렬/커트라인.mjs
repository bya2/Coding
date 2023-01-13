/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // 응시자 수, 상받는 수
  // 각 학생의 점수
  // console.log(inputs);
  // const N = +inputs[0][0];
  const k = inputs[0].split(" ")[1];
  const arr = inputs[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  return `${arr[k - 1]}`;
};

export const examples = [
  {
    inputs: `5 2
    100 76 85 93 98`,
    answer: `98`,
  },
];
