import Cache from "../../logic/Cache.mjs";

export const solution = (n) => {
  return Cache.fibonacci(n);
};

// 피보나치수(캐시)
export const fail_solution2 = (n) => {
  const cache = new Cache();

  const fib = cache.memoize((n) => {
    if (n === 0) return 1;
    else if (n === 1) return 1;
    else return (fib(n - 2) + fib(n - 1)) % 1000000007;
  });

  return fib(n);
};

// 왜 DFS가 아닌가?
export const fail_solution = (n) => {
  let count = 0;

  const DFS = (sum = 0) => {
    for (let s of [1, 2]) {
      const sum2 = sum + s;
      if (sum2 === n) ++count;
      else if (sum2 < 7) DFS(sum2);
    }
  };

  DFS();
  return count;
};

export const examples__arr = [
  {
    n: 4,
    answer: 5,
  },
];
