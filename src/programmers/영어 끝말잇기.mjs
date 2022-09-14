export const solution = (n, words = []) => {
  const obj = { [words[0]]: 1 };
  const len = words.length;
  for (let tmp = words[0], i = 1; i < len; ++i) {
    if (obj[words[i]] || tmp.slice(-1) !== words[i][0]) {
      return [(i % n) + 1, ((i / n) >> 0) + 1];
    } else {
      obj[words[i]] = 1;
      tmp = words[i];
    }
  }
  return [0, 0]; // [가장 먼저 탈락 번호, 자신의 몇 번째 차례]
};
