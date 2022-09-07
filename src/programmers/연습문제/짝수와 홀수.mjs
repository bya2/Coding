export const isEven = (number) => {
  return number % 2 === 0;
};

export const solution = (num) => {
  return isEven(num) ? "Even" : "Odd";
};

export const examples__arr = [
  {
    num: 3,
    answer: "Odd",
  },
  {
    num: 4,
    answer: "Even",
  },
];
