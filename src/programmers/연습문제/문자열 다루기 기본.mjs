export const solution = (s = "") => {
  let numbers = "0123456789".split("");
  return (s.length === 4 || s.length === 6) && s.length === s.split("").filter((x) => numbers.includes(x)).length;
};

export const other_solution = (s = "") => {
  return (s.length === 4 || s.length === 6) && !isNaN(s);
};

export const other = (s = "") => {
  let regex = /^\d{4}$|^\d{6}$/;
  return regex.test(s);
};