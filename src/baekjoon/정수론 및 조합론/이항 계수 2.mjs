/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  const [n, k] = inputs[0].split(" ").map(Number);

  let tri = [];

  for (let i = 0; i <= n; i++) {
    tri.push([]);

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        tri[i].push(1);
      } else {
        tri[i].push((tri[i - 1][j - 1] + tri[i - 1][j]) % 10_007);
      }
    }
  }
  
  return tri[n][k] + "";
};

export const examples = [
  {
    inputs: `5 2`,
    answer: `10`,
  },
];
