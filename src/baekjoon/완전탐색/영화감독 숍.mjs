/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // OUTPUT:
  // - N번째 영화의 제목에 들어간 수

  const n = +inputs[0];
  let num = 666;
  let count = 1;

  while (count !== n) {
    num++;
    if (num.toString().includes("666")) count++;
  }
  return num + "";
};

export const examples = [
  {
    inputs: `2`,
    answer: `1666`,
  },
  {
    inputs: `3`,
    answer: `2666`,
  },
  // {
  //   inputs: `187`,
  //   answer: `66666`,
  // },
  // {
  //   inputs: `500`,
  //   answer: `166699`,
  // },
];
