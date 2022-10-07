export default class Cache extends Map {
  memoize(cb) {
    return (n) => {
      if (!this.has(n)) {
        const result = cb(n);
        this.set(n, result);
      }
      return this.get(n);
    };
  }

  static fibonacci(n) {
    const fib = (n) => {
      const arrCache = [1, 1];
      for (let i = 2; i <= n; ++i) {
        arrCache.push((arrCache[i - 1] + arrCache[i - 2]) % 1000000007);
      }
      return arrCache[n];
    };

    return fib(n);
  }
}

export const memoize = (fn) => {
  const cache = new Map();

  return function (n) {
    if (!cache.has(n)) {
      const result = fn(n);
      cache.set(n, result);
    }
    return cache.get(n);
  };
};
