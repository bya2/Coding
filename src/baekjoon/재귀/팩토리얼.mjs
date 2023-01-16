/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // n!
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

    static factorial(value) {
      const cache = new this();

      const fac = cache.memoize((value) => {
        if (value <= 1) return 1;
        return value * fac(value - 1);
      });

      return fac(value);
    }
  }

  return Cache.factorial(+inputs[0]) + "";
};

export const examples = [
  {
    inputs: `10`,
    answer: `3628800`,
  },
];
