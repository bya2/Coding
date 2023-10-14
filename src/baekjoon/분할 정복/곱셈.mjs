/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const [A, B, C] = lines[0].split(" ").map(BigInt);

  return (
    (function subdivide(n) {
      if (n === 1n) return A % C;

      const halfN = subdivide(n / 2n) % C;

      if (n % 2n) {
        return (halfN ** 2n * (A % C)) % C;
      }

      return halfN ** 2n % C;
    })(B) + ""
  );
};

export const fail = (lines) => {
  const [A, B, C] = lines[0].split(" ").map(BigInt);

  let b = B;
  const multiForms = [];
  while (b > 1) {
    const isOdd = b % 2n === 0 ? false : true;
    multiForms.push(isOdd);
    if (isOdd) b--;
    b /= 2n;
  }

  const D = A % C;
  let n = A;
  for (const form of multiForms) {
    n **= 2n;
    form && (n *= D);
    n %= C;
  }
  return n + "";
};

export const examples = [
  {
    inputs: `10 11 12`,
    answer: `4`,
  },
];
