function getGCD(number1, number2) {
  return number1 % number2 === 0 ? number2 : getGCD(number2, number1 % number2);
}

/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  const radiusList = inputs[1].split(" ").map(Number);
  const tmp = radiusList.shift();
  return radiusList
    .map((r) => {
      const gcd = getGCD(tmp, r);
      return tmp / gcd + "/" + r / gcd;
    })
    .join("\n");
};

export const examples = [
  {
    inputs: `3
    8 4 2`,
    answer: `2/1
    4/1`,
  },
];
