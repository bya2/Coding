export const solution = (s = "") => {
  return s
    .split(" ")
    .map((w) =>
      w
        .split("")
        .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
        .join("")
    )
    .join(" ");
};
