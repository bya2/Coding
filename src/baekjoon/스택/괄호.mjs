function isEnclose(
  _pairs = {
    "]": "[",
    ")": "(",
    "}": "{",
  }
) {
  const stack = [];
  for (let i = 0, len = this.length; i < len; ++i) {
    if (typeof _pairs[this[i]] === "undefined") {
      stack.push(this[i]);
    } else {
      if (stack[stack.length - 1] !== _pairs[this[i]]) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}

/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  inputs.shift();
  return inputs
    .map((input) => (isEnclose.call(input) ? "YES" : "NO"))
    .join("\n");
};

export const examples = [
  {
    inputs: `6
    (())())
    (((()())()
    (()())((()))
    ((()()(()))(((())))()
    ()()()()(()()())()
    (()((())()(`,
    answer: `NO
    NO
    YES
    NO
    YES
    NO`,
  },
];
