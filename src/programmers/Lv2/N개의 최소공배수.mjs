// LCM
export const solution = (arr) => {
  return arr.reduce((a, b) => lcm(a, b));
};

const gcd = (n1, n2) => {
  return n1 % n2 === 0 ? n2s : gcd(n2, n1 % n2);
};

const lcm = (n1, n2) => {
  return (n1 * n2) / gcd(n1, n2);
};
