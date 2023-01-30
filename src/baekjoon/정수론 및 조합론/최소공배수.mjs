/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  function getGCD(number1, number2) {
    return number1 % number2 === 0
      ? number2
      : getGCD(number2, number1 % number2);
  }

  function getLCM(number1, number2) {
    return (number1 * number2) / getGCD(number1, number2);
  }

  inputs.shift();
  return inputs
    .map((input) => getLCM(...input.split(" ").map(Number)))
    .join("\n");
};

export const examples = [
  {
    inputs: `3
    1 45000
    6 10
    13 17`,
    answer: `45000
    30
    221`,
  },
];
