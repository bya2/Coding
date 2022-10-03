import Dict from "../../logic/Dictionary.mjs";

export const solution = (word = "", maxLenOfStr = 5) => {
  const dict = new Dict(["A", "E", "I", "O", "U"]);
  return dict.indexOf(word);

  const obj = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };

  const plus = [781, 156, 31, 6, 1];
  return word.split("").reduce((a, b, i) => a + obj[b] * plus[i] + 1, 0);
};

const a = () => {
  const list = [1];
  for (let i = 0; i < 5; ++i) list.push(list[i] * 5 + 1);
  return list;
};

export const fail_solution = (word = "") => {
  const collection = ["A", "E", "I", "O", "U"];

  for (let i = 0, c = 0, s = ""; i < 1660; ++i) {
    if (s === word) return i;

    const len = s.length;
    if (len === 5) {
      let j = 4;
      for (; j >= 0; --j) {
        if (s[j] !== collection[4]) break;
      }
      if (c <= 3) ++c;
      else c = collection.findIndex((v) => v === s[j]) + 1;
      s = s.slice(0, j) + collection[c];
      if (s.length < 5) c = 0;
    } else {
      s += collection[c];
    }
  }
};

export const examples__arr = [
  {
    word: "AAAAE",
    answer: 6,
  },
  {
    word: "AAAE",
    answer: 10,
  },
  {
    word: "I",
    answer: 1563,
  },
  {
    word: "EIO",
    answer: 1189,
  },
];

// let m;
// for (let j = 4; j >= 1; --j) {
//   if (list[cIdx] !== s[j]) break;
//   m = j;
// }

// if (m) {
//   s = s.slice(0, m);
//   cIdx = 0;
// } else {
//   s[len - 1] = s[++cIdx];
// }
