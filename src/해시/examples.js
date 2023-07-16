import { dict } from "./logic";

/**
 * @param {string[]} P
 * @param {string[]} C
 */
export const 완주하지못한선수 = (P, C) => {};

/**
 * @param {number[]} numbers
 */
export const 폰켓몬 = (numbers) => {
  let types = 0;

  Object.defineProperties(Object.prototype, {
    check: {
      value(key) {
        if (!this[key]) {
          this[key] = true;
          types++;
        }
      },
    },
  });

  const BoolMap = {
    from(keys) {
      return keys.reduce((obj, t) => {
        obj.check(t);
        return obj;
      }, {});
    },
  };

  BoolMap.from(numbers);

  const HALF = numbers.length / 2;
  return types > HALF ? HALF : types;
};

export const examples = {
  완주하지못한선수: [
    {
      participants: ["leo", "kiki", "eden"],
      completion: ["eden", "kiki"],
      result: "leo",
    },
    {
      participants: ["marina", "josipa", "nikola", "vinko", "filipa"],
      completion: ["josipa", "filipa", "marina", "nikola"],
      result: "vinko",
    },
    {
      participants: ["mislav", "stanko", "mislav", "ana"],
      completion: ["stanko", "ana", "mislav"],
      result: "mislav",
    },
  ],

  폰켓몬: [
    {
      nums: [3, 1, 2, 3],
      result: 2,
    },
    {
      nums: [3, 3, 3, 2, 2, 4],
      result: 3,
    },
    {
      nums: [3, 3, 3, 2, 2, 2],
      result: 2,
    },
  ],
};
