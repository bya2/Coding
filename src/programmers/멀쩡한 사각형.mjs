const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};

export const solution = (w, h) => {
  return w * h - (w + h - gcd(w, h));
};

export const examples__arr = [
  {
    w: 8,
    h: 12,
    answer: 80,
  },
];
