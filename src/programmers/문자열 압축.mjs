// DFS
// BFS
//
export const solution = (s) => {
  let sLen = s.length;
  let halfLen = (sLen / 2) >> 0;
  console.log(halfLen);

  for (let unit = 1; unit <= halfLen; ++unit) {
    let str = "";
    let dupNum = 1;
    let sIdx = 0;
    let tmpStr = s.slice(sIdx, unit);

    for (sIdx = unit; sIdx <= s.length; sIdx += unit) {
      let currStr = s.slice(sIdx, unit);

      if (tmpStr === currStr) {
        ++dupNum;
      } else {
        str += dupNum === 1 ? tmpStr : dupNum + tmpStr;
        dupNum = 1;
        tmpStr = currStr;
      }
    }
    str += dupNum === 1 ? tmpStr : dupNum + tmpStr;
    console.log(sLen, str);

    sLen = Math.min(sLen, str.length);
  }

  return sLen;
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
