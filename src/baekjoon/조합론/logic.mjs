export const getBinomialCoefficient = (a, b) => {
  let n = 1;
  let r = 1;
  let n_r = 1;

  for (let i = 1; i <= a; i++) {
    n *= i;
  }

  for (let i = 1; i <= b; i++) {
    r *= i;
  }

  for (let i = 1; i <= a - b; i++) {
    n_r *= i;
  }

  return n / (r * n_r) + "";
};

export const getBinomialCoefficient2 = (n, r) => {
  let count = 1;
  for (let k = 0; k < (n - r > r ? r : n - r); k++) {
    count *= n - k;
    count /= k + 1;
  }
  return count;
};
