export const solution2 = (p = "") => {
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

export const solution = (p = "") => {
  const pairs = {
    "(": ")",
    ")": "(",
  };

  const cb = (w = "") => {
    // 1.
    if (w.length === 0) return w;

    // 2.
    let balance = 0;
    let pivot = 0;
    do {
      balance += w[pivot++] === "(" ? 1 : -1;
    } while (balance !== 0);

    const u = w.slice(0, pivot);
    const v = cb(w.slice(pivot));

    // 3.
    if (u[0] === "(" && u[pivot - 1] === ")") {
      return u + v;
    }
    // 4.
    else {
      return "(" + v + ")" + [...u.slice(1, u.length - 1)].map((v) => pairs[v]).join("");
    }
  };

  return cb(p);
};

//  '균형잡힌 문자열'을 찾을때 위의 코드는 맨 앞에서부터 하나씩 확인하면서 가다가 끊김.
//  그렇게 확인을 해서 끊겼을 경우에는 "시작이 ( 였으면" 무조건 올바른 문자열이 나올 수 밖에 없음.

const isCorrectBracket = () => {};

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
