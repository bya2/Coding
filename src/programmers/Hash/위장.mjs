import { getNumOfAllCasesFromMap } from "../../Cases/index.mjs";
import { getDicOfNumberFromMapLikeArr } from "../../Hash/index.mjs";

export const solution = (clothes) => {
  const typeDir = getDicOfNumberFromMapLikeArr(clothes, 1);
  const cases = getNumOfAllCasesFromMap(typeDir);
  return cases;
};

export const other_solution = (clothes) => {
  const clothTypeMap = clothes.reduce((obj, [, type]) => ((obj[type] = obj[type] ? obj[type] + 1 : 1), obj), {});
  const cases = Object.values(clothTypeMap).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
  return cases;
};

export const examples__arr = [
  {
    clothes: [
      ["yellowhat", "headgear"],
      ["bluesunglasses", "eyewear"],
      ["green_turban", "headgear"],
    ],
    answer: 5,
  },

  {
    clothes: [
      ["crowmask", "face"],
      ["bluesunglasses", "face"],
      ["smoky_makeup", "face"],
    ],
    answer: 3,
  },
];
