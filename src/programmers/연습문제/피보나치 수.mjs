export const solution = (n) => {
  return 반복문피보나치수(n);
};

export const 반복문피보나치수 = (n) => {
  let arr = [0, 1];
  for (let i = 2; i <= n; ++i) {
    const a = arr[i - 1] % 1234567;
    const b = arr[i - 2] % 1234567;
    arr.push((a + b) % 1234567);
  }
  return arr[n];
};

export const 피보나치수 = (n) => {
  const newArr = [0, 1];

  let fib = (n) => {
    if (newArr[n] !== undefined) return newArr[n];
    newArr[n] = fib(n - 1) + fib(n - 2);
    return newArr[n];
  };

  return fib(n);
};

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 2) + fib(n - 1);
}

//Generic Momoization Function
function memoize(fn) {
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

const fib = memoize(slowFib);
