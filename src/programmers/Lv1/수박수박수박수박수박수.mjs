export const solution = (n) => {
  const char1 = "수";
  const char2 = "박";
  let str = "";
  for (let i = 0; i < n; ++i) {
    if (i % 2) str += char2;
    else str += char1;
  }
  return str;
};

export const other_solution = (n) => {
  return "수박".repeat(n).slice(0, n);
};

export const other_solution2 = (n) => {
  let result =
    "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박";
  return result.slice(0, n);
};
