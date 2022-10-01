export const solution = (s = "") => {
  const [min, max] = findMinAndMax(s.split(" ").map((x) => x * 1));
  return `${min} ${max}`;
};

export const findMinAndMax = (arr = []) => {
  return [Math.min(...arr), Math.max(...arr)];
};

// min, max는 문자열도 됀다.
