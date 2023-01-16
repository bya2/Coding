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

  static fibonacci(value) {
    const cache = new this();

    const fib = cache.memoize((value, first = 0, second = 1) => {
      if (value === 0) return first;
      if (value === 1) return second;
      return fib(value - 2) + fib(value - 1);
    });

    return fib(value);
  }

  static factorial(value) {
    const cache = new this();

    const fac = cache.memoize((value) => {
      if (value === 1) return 1;
      return value * fac(value - 1);
    });

    return fac(value);
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
