export const memoize = (cb) => {
  const cache = new Map();
  return (arg) => {
    if (!cache.has(arg)) {
      cache.set(arg, cb(arg));
    }
    return cache.get(arg);
  };
};

export const getFibonacci = (n) => {
  const recur = memoize((v) => {
    if (v === 0) return 0;
    if (v === 1) return 1;
    return recur(v - 2) + recur(v - 1);
  });
  
  return recur(n);
};
