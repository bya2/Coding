/**
 * @param {string} s
 */
export const solution = (s) => {
  const arr = [];
  [...s].reduce((map, t, i) => {
    arr.push(map.has(t) ? i - map.get(t) : -1);
    map.set(t, i);
    return map;
  }, new Map());
  return arr;
};

export const examples__arr = [
  {
    s: "banana",
    answer: [-1, -1, -1, 2, 2, 2],
  },
  {
    s: "foobar",
    answer: [-1, -1, 1, -1, -1, -1],
  },
];
