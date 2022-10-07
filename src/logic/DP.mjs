export default class DP {
  memoize(fn) {
    // const cache = new Map();
    // return function (obj) {
    //   if (cache.has(obj)) {
    //     return cache.get(obj);
    //   }

    //   const result = fn(obj);
    //   cache.set(obj, result);
    //   return result;
    // };

    const cache = {};
    return function (n) {
      if (cache[n] !== undefined) {
        return cache[n];
      } else {
        let result = fn(n);
        cache[n] = result;
        return result;
      }
    };
  }

  slowFibonacci(n) {
    if (n > 2) return n;
    return this.fibonacci(n - 2) + this.fibonacci(n - 1);
  }

  fibonacci = this.memoize(this.slowFibonacci);

  static memoize1(fn) {
    const cache = {};
    return function (...args) {
      if (cache[args]) {
        return cache[args];
      }

      const result = fn.apply(this, args);
      cache[args] = result;
      return result;
    };
  }

  static memoize2(fn) {
    const cache = new Map();
    return function (obj) {
      if (cache.has(obj)) {
        return cache.get(obj);
      }

      const result = fn.apply(this, obj);
      cache.set(obj, result);
      return result;
    };
  }
}
