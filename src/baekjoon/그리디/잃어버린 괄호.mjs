Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b);
};

Array.prototype.subtract = function () {
  return this.reduce((a, b) => a - b);
};

export const solution = (inputs = [""]) => {
  return (
    inputs[0]
      .split("-")
      .map((sub) => sub.split("+").map(Number).sum())
      .subtract() + ""
  );
};

export const examples = [
  {
    inputs: `55-50+40`,
    answer: `-35`,
  },
];
