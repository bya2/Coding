export const solution = (s) => {
  let p = 0;
  let y = 0;

  for (let c of s.split("")) {
    if (c === "P" || c === "p") ++p;
    if (c === "Y" || c === "y") ++y;
  }

  return p === y;
};

export const other_solution = (s) => {
  s = s.toUpperCase();
  return s.split("P").length === s.split("Y").length;
};
