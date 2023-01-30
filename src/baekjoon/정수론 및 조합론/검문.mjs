function getGCD(number1, number2) {
  return number1 % number2 === 0 ? number2 : getGCD(number2, number1 % number2);
}

function getDivisors(number) {
  const arr = [];
  for (let i = 2, len = number / 2; i <= len; ++i)
    if (number % i === 0) arr.push(i);
  arr.push(number);
  return arr;
}

/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  inputs.shift();
  inputs = inputs.map(Number).sort((a, b) => a - b);

  let tmp = inputs[1] - inputs[0];
  for (let i = 1; i < inputs.length - 1; ++i) {
    tmp = getGCD(inputs[i + 1] - inputs[i], tmp);
  }

  return getDivisors(tmp).join(" ");
};

export const examples = [
  {
    inputs: `3
    6
    34
    38`,
    answer: `2 4`,
  },
  {
    inputs: `5
    5
    17
    23
    14
    83`,
    answer: `3`,
  },
];
