/**
 * @param {number[]} food [물, ...음식 갯수 리스트]
 * @return {string}
 */
export const solution = (food) => {
  for (let i = 1, len = food.length; i < len; ++i) {
    food[i] = (i + "").repeat(~~(food[i] / 2));
  }
  food.shift();
  return food.join("") + "0" + food.reverse().join("");
};

export const examples__arr = [
  {
    food: [1, 3, 4, 6],
    answer: "1223330333221",
  },
  {
    food: [1, 7, 1, 2],
    answer: "111303111",
  },
];
