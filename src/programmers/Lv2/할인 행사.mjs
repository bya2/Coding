import NMap from "../../logic/NumberMap.mjs";

Map.prototype.incr = function (key, value = 1) {
  return this.set(key, (this.get(key) ?? 0) + value);
};

Map.prototype.decr = function (key, value = 1) {
  return this.set(key, (this.get(key) ?? 0) - value);
};

Map.from = function (arr = []) {
  return arr.reduce((map, t) => map.incr(t), new this());
};

Map.from2 = function (keys = [], values = []) {
  return keys.reduce((map, k, i) => map.set(k, values[i]), new this());
};

export function other_solution(want = [""], number = [0], discount = [""], scopes = 10) {
  const map = new NMap([...Map.from2(want, number)]);
  return map.requestInScope(discount, scopes);
}

export function solution(want = [""], number = [0], discount = [""]) {
  let count = discount.length - 9;
  const wantMap = Map.from2(want, number);
  const discountMap = Map.from(discount.slice(0, 10));

  for (let product of want) {
    console.log(product);
    if (wantMap.get(product) > (discountMap.get(product) ?? 0)) {
      --count;
      break;
    }
  }

  for (let i = 10, len = discount.length; i < len; ++i) {
    discountMap.incr(discount[i]);
    discountMap.decr(discount[i - 10]);

    for (let product of want) {
      console.log(product);
      if (wantMap.get(product) > (discountMap.get(product) ?? 0)) {
        --count;
        break;
      }
    }
  }

  return count;
}

export const examples__arr = [
  {
    want: ["banana", "apple", "rice", "pork", "pot"],
    number: [3, 2, 2, 2, 1],
    discount: [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ],
    answer: 3,
  },
  {
    want: ["apple"],
    number: [10],
    discount: ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"],
    answer: 0,
  },
];
