export const solution = (n, m) => {
  
}

const 유클리드호제법 = (x, y) => {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(x, y), lcm(x, y)];
}