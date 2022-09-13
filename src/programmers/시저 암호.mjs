export const solution = (s = "", n = 0) => {
  return s
    .split("")
    .map((c) => {
      if (c === " ") return c;
      let code = c.charCodeAt(0);
      let mCode = code + n;
      if ((code <= 90 && mCode > 90) || mCode > 122) {
        mCode -= 26;
      }
      return String.fromCharCode(mCode);
    })
    .join("");
};

export const isLowerCaseCode = (code) => {
  return code >= 97 && code <= 122;
};

export const isUpperCaseCode = (code) => {
  return code >= 65 && code <= 90;
};

export const examples__arr = [
  {
    s: "AB",
    n: 1,
    answer: "BC",
  },
  { s: "z", n: 1, answer: "a" },
  {
    s: "a B z",
    n: 4,
    answer: "e F d",
  },
];
