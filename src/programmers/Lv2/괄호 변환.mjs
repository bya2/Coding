export const solution = (p = "") => {
  const pairs = {
    "(": ")",
    ")": "(",
  };

  const cb = (w = "") => {
    // 1.
    if (w.length === 0) {
      return w;
    }

    // 2.
    let u = "";
    let v = "";
    const stack = [];
    const dict = {
      "(": 0,
      ")": 0,
    };

    for (let i = 0, c, len = w.length; i < len; ++i) {
      c = w[i];

      if (c === "(") stack.push(c);
      else {
        if (stack[stack.length - 1] === "(") stack.pop();
        else stack.push(c);
      }


      dict[c]++;
      if (dict["("] === dict[")"]) {
        u = w.slice(0, i + 1);
        v = w.slice(i + 1);
        break;
      }
    }

    // 3.
    if (stack.length === 0) {
      u = u + cb(v);
      return u;
    }

    // 4.
    else {
      let s = "";
      s = "(" + cb(v) + ")" + [...u.slice(1, u.length - 1)].map((v) => pairs[v]).join("");
      return s;
    }
  };

  return cb(p);
};

export const examples__arr = [
  {
    p: "(()())()",
    answer: "(()())()",
  },
  {
    p: ")(",
    answer: "()",
  },
  {
    p: "()))((()",
    answer: "()(())()",
  },
];
