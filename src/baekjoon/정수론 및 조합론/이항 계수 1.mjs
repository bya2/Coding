/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  const [N, K] = inputs[0].split(" ");

  let n = 1;
  let r = 1;
  let n_r = 1;

  for (let i = 1; i <= N; i++) {
    n *= i;
  }

  for (let i = 1; i <= K; i++) {
    r *= i;
  }

  for (let i = 1; i <= N - K; i++) {
    n_r *= i;
  }

  return n / (r * n_r) + "";
};

export const examples = [
  {
    inputs: `5 2`,
    answer: `10`,
  },
];
