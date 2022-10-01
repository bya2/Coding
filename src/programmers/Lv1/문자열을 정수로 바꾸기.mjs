export const solution = (s = "") => {
  const sign = s === "-" ? 0 : 1;
  s = sign ? s : s.slice(1, s.length);
  s = parseInt(s);
  return sign ? s : -s;
};

// 동적 언어의 핵심
export const other_solution = (s) => {
  return s / 1;
  return +s;
  return Number(s);
};
