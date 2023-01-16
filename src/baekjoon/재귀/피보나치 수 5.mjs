class Cache extends Map {
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
}

/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  return Cache.fibonacci(+inputs[0]) + "";
};

export const examples = [
  {
    inputs: `10`,
    answer: `55`,
  },
];
