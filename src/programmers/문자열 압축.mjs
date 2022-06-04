// DFS
// BFS
//
export const solution = (s) => {
  let zipStrLens = [];
  let halfLen = (s.length / 2) >> 0;

  for (let sUnit = 1; sUnit <= halfLen; ++sUnit) {
    let zipStr = "";
    let dupNum = 1;
    let sIdx = 0;
    let tmpStr = s.substr(sIdx, sUnit);

    for (sIdx = sUnit; sIdx <= s.length; sIdx += sUnit) {
      let currStr = s.substr(sIdx, sUnit);

      if (tmpStr === currStr) {
        ++dupNum;
      } else {
        zipStr += dupNum === 1 ? tmpStr : dupNum + tmpStr;
        dupNum = 1;
        tmpStr = currStr;
      }
    }
    zipStr += dupNum === 1 ? tmpStr : dupNum + tmpStr;

    zipStrLens.push(zipStr.length);
  }

  return Math.min(...zipStrLens);
};

export const examples__arr = [
  {
    s: "aabbaccc",
    answer: 7,
  },
  {
    s: "ababcdcdababcdcd",
    answer: 9,
  },
  {
    s: "abcabcdede",
    answer: 8,
  },
  {
    s: "abcabcabcabcdededededede",
    answer: 14,
  },
  {
    s: "xababcdcdababcdcd",
    answer: 17,
  },
];
