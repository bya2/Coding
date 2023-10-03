export const memoize = (cb) => {
  const cache = new Map();
  return (arg) => {
    if (!cache.has(arg)) {
      const val = cb(arg);
      cache.set(arg, val);
    }
    return cache.get(arg);
  };
};

export const factorial = (value) => {
  const recur = memoize((value) => {
    if (value <= 1) return 1;
    return value * recur(value - 1);
  });

  return recur(value);
};

export const solution = (lines) => {
  return factorial(+lines[0]) + "";
};

export const examples = [
  {
    inputs: `10`,
    answer: `3628800`,
  },
];
