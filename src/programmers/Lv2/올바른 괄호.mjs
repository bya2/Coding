export const is_pair1 = (s) => {
  const result = s.match(/(\(|\))/g);
  return result[0] === "(" && result.length % 2 === 0 ? true : false;
};

export const is_pair2 = (s, char1, char2) => {
  if (s.indexOf("(") > s.indexOf(")")) return false; // )로 시작한다면 false

  let str = s.replace(/[^()]+/g, ""); // 중복제거

  if (str.match(/[(]/g).length !== str.match(/[)]/g).length) { // 
    return false;
  }

  return true;
};

export const isPair = (s, char) => {
  let cum = 0;
  const LEN = s.length;
  for (let i = 0; i < LEN; ++i) {
    if (s[i] === char) {
      ++cum;
    } else {
      --cum;
      if (cum < 0) return false;
    }
  }
  return cum === 0;
};

export const other_solution = (s) => {
  return is_pair2(s);
};

export const solution = (s) => {
  let N = s.length;
  let opened = 0;

  for (let i = 0; i < N; ++i) {
    if (s[i] === "(") {
      ++opened;
    } else {
      --opened;
      if (opened === -1) return false;
    }
  }

  return opened === 0;
};

export const examples__arr = [
  {
    s: "()()",
    answer: true,
  },
  {
    s: "(())()",
    answer: true,
  },
  {
    s: ")()(",
    answer: false,
  },
  {
    s: "(()(",
    answer: false,
  },
];
