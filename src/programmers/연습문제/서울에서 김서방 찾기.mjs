export const solution = (arr = []) => {
  const i = arr.findIndex((el) => el === "Kim");
  return `김서방은 ${i}에 있다`;
};

export const other_solution = (arr) => {
  const i = arr.indexOf("Kim");
  return `김서방은 ${i}에 있다`;
};
