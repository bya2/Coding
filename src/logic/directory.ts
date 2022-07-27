export const findLagestValue = <T extends { [key: string]: number }>(dir: T) => {
  return Math.max(...Object.values(dir));
};

export const findSmallestValue = <T extends { [key: string]: number }>(dir: T) => {
  return Math.min(...Object.values(dir));
};

export const findKeyWithLagestValue = <T extends { [key: string]: number }>(dir: T) => {};

export const includeTrue = <T extends { [key: string]: boolean }>(dir: T) => {};
