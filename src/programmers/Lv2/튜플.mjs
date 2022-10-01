export const solution = (s = "") => {
  if (s === "{}") return [];

  let d2Arr = s
    .slice(2, -2)
    .split("},{")
    .map((s) => s.split(","))
    .sort((a, b) => a.length - b.length);

  let set = new Set();

  for (let i = 0, len = d2Arr.length; i < len; ++i) {
    for (let c of d2Arr[i]) {
      if (!set.has(+c)) {
        set.add(+c);
        break;
      }
    }
  }

  return [...set];
};

export default class Tuple {}

// TUPLE: 셀수있는 수량의 순서있는 열거 또는 어떤 순서를 따르는 요소들의 모음

export const examples__arr = [
  {
    s: "{{2},{2,1},{2,1,3},{21,1,3,4}}",
    answer: [2, 1, 3, 4],
  },
  {
    s: "{{1,2,3},{2,1},{1,2,4,3},{2}}",
    answer: [2, 1, 3, 4],
  },
];
