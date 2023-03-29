export const solution = (inputs = [""]) => {
  Object.defineProperty(Array.prototype, "peek", {
    get() {
      return this[this.length - 1];
    },
  });

  const results = [];
  const numbers = inputs[1].split(" ").map(Number);

  const map = numbers.reduce(
    (map, t) => map.set(t, (map.get(t) || 0) + 1),
    new Map()
  );

  const STACK = [];
  for (let i = 0; i < numbers.length; ++i) {
    while (STACK.length && map.get(numbers[STACK.peek]) < map.get(numbers[i])) {
      results[STACK.pop()] = numbers[i];
    }
    STACK.push(i);
  }

  while (STACK.length) {
    results[STACK.pop()] = -1;
  }

  return results.join(" ");
};

export const examples = [
  {
    inputs: `7
    1 1 2 3 4 2 1`,
    answer: `-1 -1 1 2 2 1 -1`,
  },
];
