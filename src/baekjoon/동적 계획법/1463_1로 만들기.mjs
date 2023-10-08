import DLL from "../덱/DLL.mjs";

const cache = { 1: 0 };

export const memoize = (cb) => {
  return (item) => {
    if (item in cache) {
    } else cache[item] = cb(item);
    return cache[item];
  };
};

export const dp_BottomUp = (n) => {
  const cache = Array(n + 1).fill(0);
  for (let i = 2; i <= n; ++i) {
    cache[i] = cache[i - 1] + 1;
    if (i % 2 === 0) cache[i] = Math.min(cache[i], cache[i / 2] + 1);
    if (i % 3 === 0) cache[i] = Math.min(cache[i], cache[i / 3] + 1);
  }
  return cache[n];
};

export const dp_TopDown = (n) => {
  const memoize = (fn) => {
    const cache = { 1: 0 };
    return (item) => {
      if (!(item in cache)) cache[item] = fn(item);
      return cache[item];
    };
  };

  const recur = memoize((x) => {
    if (x % 6 === 0) return Math.min(recur(x / 3) + 1, recur(x / 2) + 1);
    if (x % 3 === 0) return Math.min(recur(x / 3) + 1, recur(x - 1) + 1);
    if (x % 2 === 0) return Math.min(recur(x / 2) + 1, recur(x - 1) + 1);
    return recur(x - 1) + 1;
  });

  return recur(n);
};

export const BFS = (n) => {
  const deq = new DLL();
  deq.push(n);
  const cache = Array(n + 1).fill(0);

  while (deq.length) {
    const c = deq.shift();
    if (c === 1) break;

    if (c % 3 === 0 && cache[c / 3] === 0) {
      deq.push(c / 3);
      cache[c / 3] = cache[c] + 1;
    }

    if (c % 2 === 0 && cache[c / 2] === 0) {
      deq.push(c / 2);
      cache[c / 2] = cache[c] + 1;
    }

    if (cache[c - 1] === 0) {
      deq.push(c - 1);
      cache[c - 1] = cache[c] + 1;
    }
  }

  return cache[1] + "";
};

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  let n = +lines[0];
  return BFS(n) + "";
};

export const examples = [
  {
    inputs: `2`,
    answer: `1`,
  },
  {
    inputs: `10`,
    answer: `3`,
  },
];
