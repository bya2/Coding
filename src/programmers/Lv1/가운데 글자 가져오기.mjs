export const solution = (s = "") => {
  const isOdd = s.length % 2 === 1;
  let sIdx = s.length / 2;
  !isOdd && --sIdx;
  return s.slice(sIdx, sIdx + (isOdd ? 1 : 2));
};

export const other_solution = (s = "") => {
  return s.substring(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
};
