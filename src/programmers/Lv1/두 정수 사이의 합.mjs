export const solution = (a, b) => {
  let sum = 0;
  if (a < b) {
    [a, b] = [b, a];
  }
  for (let i = a; i <= b; ++i) {
    sum += i;
  }
  return sum;
};

export const adder = (a, b) => {
  //(합 * (차+1)) / 2
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
};
