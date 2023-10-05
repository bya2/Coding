const memoize = (cb) => {
  const cache = new Map();
  return (arg) => {
    if (!cache.has(arg)) {
      cache.set(arg, cb(arg));
      console.log(cache);
    }
    return cache.get(arg);
  };
};

/**
 * @param {string} s
 */
export const replaceCantorSet = (s) => {
  const recur = memoize((v) => {
    if (v.length === 1) return v;

    let exp = Math.log(v.length) / Math.log(3) - 1;
    const i = 3 ** exp;
    return (
      recur(v.substring(0, i)) +
      " ".repeat(3 ** exp) +
      recur(v.substring(i * 2))
    );
  });

  return recur(s);
};

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  return (
    lines
      .map((n) => {
        return replaceCantorSet("-".repeat(3 ** +n));
      })
      .join("\n") + ""
  );
};

export const examples = [
  {
    inputs: `0
    1
    3
    2`,
    answer: `-
    - -
    - -   - -         - -   - -
    - -   - -`,
  },
];
