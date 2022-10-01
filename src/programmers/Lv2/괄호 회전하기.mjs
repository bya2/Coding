export const solution = (s = "") => {
  const pairs = {
    "]": "[",
    ")": "(",
    "}": "{",
  };

  let cases = 0;
  for (let i = 0, len = s.length; i < len; ++i) {
    if (isValid(s, pairs)) {
      ++cases;
    }
    s = s.substring(1) + s[0];
  }
  return cases;
};

const isValid = (s, pairs) => {
  const stack = [];

  for (let i = 0, len = s.length; i < len; ++i) {
    const c = s[i];
    if (typeof pairs[c] === "undefined") {
      stack.push(c);
    } else {
      if (stack[stack.length - 1] !== pairs[c]) return false;
      stack.pop();
    }
  }

  if (stack.length) return false;
  return true;
};
