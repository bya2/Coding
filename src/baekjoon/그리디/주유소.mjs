/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const N = +lines[0];
  const distances = lines[1].split(" ").map(BigInt);
  const prices = lines[2].split(" ").map(BigInt);

  let total = BigInt(0);
  let minimum = prices[0];

  for (let i = 0; i < distances.length; ++i) {
    minimum = Math.min(minimum, prices[i]);
    total += minimum * distances[i];
  }

  return total + "";
};

export const ok = (inputs = [""]) => {
  const len = +inputs[0] - 1;
  const distances = inputs[1].split(" ").map(BigInt);
  const costs = inputs[2].split(" ").map(BigInt);
  let expense = BigInt(0);
  let minCost = costs[0];
  for (let i = 0; i < len; ++i) {
    const c = costs[i];
    const d = distances[i];
    if (c < minCost) minCost = c;
    expense += minCost * d;
  }
  return expense + "";
};

export const examples = [
  {
    inputs: `4
    2 3 1
    5 2 4 1`,
    answer: `18`,
  },
  {
    inputs: `4
    3 3 4
    1 1 1 1`,
    answer: `10`,
  },
];
