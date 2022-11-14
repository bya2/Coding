/**
 * @param {(1|2|3)[]} ingredient
 */
export const solution = (ingredient) => {
  let stack = [];
  let count = 0;
  for (let i = 0; i < ingredient.length; ++i) {
    stack.push(ingredient[i]);
    if (
      stack[stack.length - 1] === 1 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 4] === 1
    ) {
      count++;
      stack.splice(-4);
    }
  }
  return count;
};

/**
 * SUCCESS (But, time...)
 * @param {(1|2|3)[]} ingredient
 */
export const solution2 = (ingredient) => {
  const stack = [];
  let count = 0;
  for (let i = 0; i < ingredient.length; ) {
    if (ingredient[i] === 1) {
      if (ingredient[i + 1] === 2 && ingredient[i + 2] === 3 && ingredient[i + 3] === 1) {
        ingredient.splice(i, 4);
        count++;
        if (stack.length) i = stack.pop();
        continue;
      } else {
        stack.push(i);
      }
    }
    ++i;
  }
  return count;
};

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
