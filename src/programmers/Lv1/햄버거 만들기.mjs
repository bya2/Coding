/**
 * TIME EXCEED
 * @param {(1|2|3)[]} ingredient
 */
export const fail_solution = (ingredient) => {
  let s = ingredient.join("");
  let i = s.indexOf("1231");
  let count = 0;
  while (i !== -1) {
    s = s.slice(0, i) + s.slice(i + 4);
    i = s.indexOf("1231");
    count++;
  }
  return count;
};

export const examples__arr = [
  {
    ingredient: [2, 1, 1, 2, 3, 1, 2, 3, 1],
    answer: 2,
  },
  {
    ingredient: [1, 3, 2, 1, 2, 1, 3, 1, 2],
    answer: 0,
  },
];
