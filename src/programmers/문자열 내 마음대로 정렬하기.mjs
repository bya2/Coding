export const solution = (strings, n) => {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    else return a > b ? 1 : -1;
  });
};

export const other_solution = (strings, n) => {
  return strings
    .map((s) => [...s][n] + s)
    .sort()
    .map((s) => s.substring(1));
};

export const other_solution2 = (strings = [""], n = 1) => {
  return strings.sort((a, b) => (a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])));
};
