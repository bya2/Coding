export const solution1s = (s = "") => {
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

Object.defineProperty(Array.prototype, "getCombinationsBy", {
  value: function (length) {
    let combinations = [];

    const cb = (acc, index) => {
      if (acc.length === length) {
        combinations.push(acc.sort().join(""));
        return;
      }

      for (let i = index, len = this.length; i < len; ++i) {
        cb([...acc, this[i]], i + 1);
      }
    };

    cb([], 0);
    return combinations;
  },
});

Object.defineProperty(Map.prototype, "increase", {
  value: function (key, value = 1) {
    return this.set(key, this.has(key) ? this.get(key) + value : value);
  },
});

Object.defineProperty(Map.prototype, "keysWithMaximum", {
  value: function (least = 1) {
    const arrStack = []; // keys
    let maximum = 0;

    for (let key of this.keys()) {
      if ((this.get(key) || -Infinity) < least) continue;

      if (arrStack.length === 0) {
        arrStack.push(key);
        maximum = this.get(key) || -Infinity;
        continue;
      }

      const b = this.get(key) || -Infinity;
      if (maximum > b) continue;
      if (maximum < b) arrStack.length = 0;
      arrStack.push(key);
      maximum = this.get(key) || -Infinity;
    }

    return arrStack;

    const stack = [];
    for (let key of map.keys()) {
      if (map.get(key) < 2) continue;
      if (stack.length === 0) {
        stack.push(key);
        continue;
      }
      const a = map.get(stack[stack.length - 1]);
      const b = map.get(key);
      if (a > b) continue;
      if (a < b) stack.length = 0;
      stack.push(key);
    }

    return stack;
  },
});

export const solution2 = (orders, course) => {
  let arr = [];

  for (let combLen of course) {
    const map = new Map();

    for (let order of orders) {
      if (order.length < combLen) continue;
      for (let comb of [...order].getCombinationsBy(combLen)) {
        map.increase(comb);
      }
    }

    arr = [...arr, ...map.keysWithMaximum(2)];
  }

  return arr.sort();
};

export const examples__arr = [
  {
    orders: ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],
    course: [2, 3, 4],
    answer: ["AC", "ACDE", "BCFG", "CDE"],
  },
  {
    orders: ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"],
    course: [2, 3, 5],
    answer: ["ACD", "AD", "ADE", "CD", "XYZ"],
  },
  {
    orders: ["XYZ", "XWY", "WXA"],
    course: [2, 3, 4],
    answer: ["WX", "XY"],
  },
];

