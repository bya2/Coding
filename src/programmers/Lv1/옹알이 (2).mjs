/**
 * @param {string[]} babbling
 */
export const solution = (babbling) => {
  const words = ["aya", "ye", "woo", "ma"];

  return babbling.filter((s) => {
    for (let w of words) {
      let prev;
      let i;
      while ((i = s.indexOf(w) !== -1)) {
        if (i === -1) break;
        if (prev && prev === i) break;
        prev = i;
        s = s.replace(w, "");
      }
    }
    return s.length === 0;
  }).length;
};

export const examples__arr = [
  {
    babbling: ["aya", "yee", "u", "maa"],
    answer: 1,
  },
  {
    babbling: ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"],
    answer: 2,
  },
];
