/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  const [n, m] = inputs[0].split(" ").map(Number);
  return gcd(n, m) + "\n" + lcm(n, m);
};

export const examples = [
  {
    inputs: `24 18`,
    answer: `6
    72`,
  },
];
