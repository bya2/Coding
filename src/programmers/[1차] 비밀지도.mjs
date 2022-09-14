export const solution = (n, arr1, arr2) => {
  const map = [];
  for (let i = 0; i < n; ++i) {
    let s1 = arr1[i].toString(2).padStart(n, "0");
    let s2 = arr2[i].toString(2).padStart(n, "0");

    let row = "";
    for (let j = 0; j < n; ++j) {
      row += s1[j] | s2[j] ? "#" : " ";
    }
    map.push(row);
  }
  return map;
};

export const solution1 = (n, arr1, arr2) => {
  const map = [];
  for (let i = 0; i < n; ++i) {
    let s = (arr1[i] | arr2[i])
      .toString(2)
      .padStart(n, 0)
      .replace(/1|0/g, (x) => (+x ? "#" : " "));
    map.push(s);
  }
  return map;
};

export const examples__arr = [
  {
    n: 5,
    arr1: [9, 20, 28, 18, 11],
    arr2: [30, 1, 21, 17, 28],
    answer: ["#####", "# # #", "### #", "# ##", "#####"],
  },
];
