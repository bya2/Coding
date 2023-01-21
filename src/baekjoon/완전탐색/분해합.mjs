/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // OUTPUT:
  // - N의 가장 작은 생성자 (N이 분해합이 되는 가장 작은 숫자)
  // - 생성자가 없는 경우 0

  const tg = +inputs[0];
  for (let n = 0; n <= tg; ++n) {
    const sum = n + [...n.toString()].reduce((acc, x) => acc + +x, 0);
    if (sum === tg) {
      return n + "";
    }
  }
  return 0;
};

export const examples = [
  {
    inputs: `216`,
    answer: `198`,
  },
];
