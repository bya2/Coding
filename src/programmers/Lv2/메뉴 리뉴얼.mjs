import NMap from "../../logic/NumberMap.mjs";
import SArr from "../../logic/StringArray.mjs";

Object.defineProperties(Array.prototype, {
  getCombinations: {
    value: function (combLength = 1) {
      let combinations = [];
      const cb = (acc, index) => {
        if (acc.length === combLength) {
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
  },
});

Object.defineProperties(Map.prototype, {
  increase: {
    value: function (key, value = 1) {
      return this.set(key, (this.get(key) || 0) + value);
    },
  },
});

export const solution = (orders = [""], course = [0]) => {
  let arr = [];

  for (let combLength of course) {
    const map = new Map();
    for (let order of orders) {
      if (order.length < combLength) continue;
      for (let comb of [...order].getCombinations(combLength)) {
        map.increase(comb);
      }
    }

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

    arr = [...arr, ...stack];
  }

  return arr.sort();
};

export const other_solution = (orders = [""], course = [0]) => {
  let arr = [];
  const sArr = new SArr();
  const nMap = new NMap();

  for (let combLength of course) {
    const map = new NMap();
    for (let order of orders) {
      if (order.length < combLength) continue;
      for (let comb of new SArr(...order).getCombinationsBy(combLength)) {
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
