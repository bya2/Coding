// const memoize = (cb) => {
//   const map = new Map();
//   return (arg) => {
//     if (!map.has(arg)) map.set(arg, cb(arg));
//     return map.get(arg);
//   };
// };

// const fibonacci = (value) => {
//   // const cache = new Map();

//   const fib = memoize((value, first = 0, second = 1) => {
//     if (value === 0) return first;
//     if (value === 1) return second;
//     return fib(value - 2) + fib(value - 1);
//   });

//   return fib(value);
// };

export const solution = (inputs = [""]) => {
  const n = +inputs[0];
  let count1 = 0,
    count2 = 0;

  const fib = (n) => {
    if (n === 1 || n === 2) {
      count1++;
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  };

  const fib2 = (n) => {
    const arr = [1, 1];
    for (let i = 2; i < n; ++i, ++count2) arr.push(arr[i - 1] + arr[i - 2]);
    return arr[n - 1];
  };

  fib(n);
  fib2(n);

  return count1 + " " + count2;
};

export const examples = [
  {
    inputs: `5`,
    answer: `5 3`,
  },
];
