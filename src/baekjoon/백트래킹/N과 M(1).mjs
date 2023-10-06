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

const combine = (length) => {
  const combinations = [];

  const recur = (acc, marked) => {
    if (acc.length === length) {
      combinations.push(acc.join(" "));
      return;
    }

    for (const char of this) {
      if (!marked[char]) recur([...acc, char], { ...marked, [char]: true });
    }
  };

  recur(
    [],
    this.reduce((obj, t) => ((obj[t] = false), obj), {})
  );

  return combinations;
};

Object.defineProperty(Array.prototype, "combine", {
  value: combine,
});

export const solution = (inputs = [""]) => {
  const [n, m] = inputs[0].split(" ").map(Number);
  const arr = Array.from({ length: n + 1 }, (_, i) => i);
  arr.shift();
  return arr.combine(m).join("\n");
};

export const examples = [
  {
    inputs: `3 1`,
    answer: `1
    2
    3`,
  },
  {
    inputs: `4 4`,
    answer: `1 2 3 4
    1 2 4 3
    1 3 2 4
    1 3 4 2
    1 4 2 3
    1 4 3 2
    2 1 3 4
    2 1 4 3
    2 3 1 4
    2 3 4 1
    2 4 1 3
    2 4 3 1
    3 1 2 4
    3 1 4 2
    3 2 1 4
    3 2 4 1
    3 4 1 2
    3 4 2 1
    4 1 2 3
    4 1 3 2
    4 2 1 3
    4 2 3 1
    4 3 1 2
    4 3 2 1`,
  },
];
