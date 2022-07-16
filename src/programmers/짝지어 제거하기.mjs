import CustomString from "../custom/CustomString";

export const extractSpecificRangeOfString = (s, sIdx, eIdx) => {
  if (typeof s !== "string") {
    throw new Error();
  }

  if (s.length === 0 && (sIdx > eIdx || eIdx === -1) && s.length <= sIdx && s.length <= eIdx) {
    throw new Error();
  }

  s = s.substring(sIdx, eIdx - sIdx + 1);
  return s;
};

export const removeSpecificRangeOfString = (s, sIdx, eIdx) => {
  if (typeof s !== "string") {
    throw new Error("no string");
  }

  const sLen = s.length;
  if (sLen === 0) throw new Error("");

  s = s.substring(0, sIdx) + s.substring(eIdx + 1);
  return s;
};

export const solution = (s) => {
  let sLen = s.length;

  for (let i = 0; i < sLen; ++i) {
    if (i + 1 >= sLen) {
      break;
    }
    const currChar = s[i];
    const nextChar = s[i + 1];

    if (currChar === nextChar) {
      s = s.substring(0, i) + s.substring(i + 2);
      i = -1;
      sLen -= 2;
      continue;
    }
  }

  if (sLen === 0) return 1;
  else return 0;
};

export const other_solution = (s) => {
  let cs = new CustomString(s);

  for (let i = 0; i < cs.length; ++i) {
    if (cs.length <= i + 1) break;

    if (s[i] === s[i + 1]) {
      cs.removeSpecificRange(i, i + 1);
      i = -1;
      continue;
    }
  }

  if (cs.length === 0) return 1;
  else return 0;
};

export const examples__arr = [
  {
    s: "baabaa",
    answer: 1,
  },
  {
    s: "cdcd",
    answer: 0,
  },
];

//풀이
//1.하나씩 접근
//2.다음 문자가 있고, 같다면 같이 삭제
//3.첫 문자열부터 다시 시작
//4.
