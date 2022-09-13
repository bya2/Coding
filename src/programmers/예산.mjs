export const solution = (d, budget) => {
  d.sort((a, b) => a - b);
  let i = 0;
  for (len = d.length; i < len; ++i) {
    if (budget < d[i]) return i;
    budget -= d[i];
  }
  return i;
};

export const other_solution = (d, budget) => {
  return ~(
    ~d
      .sort((a, b) => a - b)
      .map((v) => (budget -= v))
      .findIndex((v) => v < 0) || ~d.length
  );
};
