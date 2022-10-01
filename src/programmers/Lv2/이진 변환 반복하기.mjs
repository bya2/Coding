export const solution = (s) => {
  let step = 0;
  let count = 0;

  while (s !== "1") {
    s = s
      .split("")
      .filter((el) => {
        if (el === "1") {
          return true;
        } else {
          ++count;
          return false;
        }
      })
      .join("");
    s = s.length.toString(2);

    ++step;
  }

  return [step, count];
};

export const examples__arr = [
  {
    s: "110010101001",
    answer: [3, 8],
  },
  { s: "01110", answer: [3, 3] },
  { s: "1111111", answer: [4, 1] },
];
