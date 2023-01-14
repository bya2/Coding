/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  const dict = {};
  const rank = {};
  const numbers = inputs[1].split(" ");
  const origin = [...numbers];
  numbers
    .filter((n) => {
      if (dict[n]) return false;
      else {
        dict[n] = 1;
        return true;
      }
    })
    .map(Number)
    .sort((a, b) => a - b)
    .forEach((n, i) => {
      rank[n] = i;
    });

  return origin.map((n) => rank[n]).join(" ");
};

export const examples = [
  {
    inputs: `5
    2 4 -10 4 -9`,
    answer: `2 3 0 3 1`,
  },
];
