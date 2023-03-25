export const solution = (inputs = [""]) => {
  Object.defineProperty(Array.prototype, "peek", {
    get() {
      return this[this.length - 1];
    },
  });

  const numbers = inputs[1].split(" ").map(Number);
  const STACK = [];
  for (let i = 0; i < numbers.length; ++i) {
    while (STACK.length && numbers[STACK.peek] < numbers[i]) {
      numbers[STACK.pop()] = numbers[i];
    }
    STACK.push(i);
  }

  while (STACK.length) {
    numbers[STACK.pop()] = -1;
  }

  return numbers.join(" ");
};

export const examples = [
  {
    inputs: `4
    3 5 2 7`,
    answer: `5 7 7 -1`,
  },
];
