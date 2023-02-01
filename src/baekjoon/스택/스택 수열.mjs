Object.defineProperty(Array.prototype, "peek", {
  get: function () {
    return this[this.length - 1];
  },
});

export const solution = (inputs = [""]) => {
  const n = +inputs.shift();
  inputs = inputs.map(Number);
  const STACK = [];
  const arr = [];
  for (let i = 1; i <= n; ) {
    if (STACK.peek === inputs[0]) {
      STACK.pop();
      inputs.shift();
      arr.push("-");
    } else {
      STACK.push(i);
      arr.push("+");
      ++i;
    }
  }

  while (STACK.length) {
    if (STACK.peek === inputs[0]) {
      STACK.pop();
      inputs.shift();
      arr.push("-");
    } else {
      return "NO";
    }
  }

  return arr.join("\n");
};

export const examples = [
  {
    inputs: `8
    4
    3
    6
    8
    7
    5
    2
    1`,
    answer: `+
    +
    +
    +
    -
    -
    +
    +
    -
    +
    +
    -
    -
    -
    -
    -`,
  },
  {
    inputs: `5
    1
    2
    5
    3
    4`,
    answer: `NO`,
  },
];
