/**
 * @param {string[]} lines
 */
export const other = (lines) => {
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

export const solution = (lines) => {
  const [A, B, C] = lines[0].split(" ").map(BigInt);

  let b = B;
  const multiForms = [];
  while (b > 1) {
    multiForms.push(n % 2n);
    b /= 2n;
  }

  const D = A % C;  
  let n = D;
  for (let i = multiForms.length - 1; i >= 0; --i) {
    n **= 2n;
    if (multiForms[i]) n *= D;
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
