export const insert = <E = any>(arr: E[], at: number, element: E): void => {
  arr.splice(at, 0, element);
};

export const replace = <E = any>(arr: E[], at: number, element: E): void => {
  arr.splice(at, 1, element);
};

export const remove = <E = any>(arr: E[], at: number): void => {
  arr.splice(at, 1);
};

export const empty = <E = any>(arr: E[]) => {
  arr.length = 0;
};

export const compareAToB = (arr: any[], index1: number, index2: number) => {
  return arr[index1] < arr[index2];
};

export const mix = <E = any>(arr: E[], seed: number) => {
  arr.sort(() => Math.random() - seed);
};

export const getDirectory = () => {};

export default class CustomArray extends Array {
  getBigger() {}

  getSmaller() {}
}

export const getMostNumerous = <E extends string>(arr: E[]) => {
  return arr.reduce();
};
export const getNumberOfEachElement = <E extends string = any>(arr: E[]): { [key: string]: number } => {
  return arr.reduce((dir, elem) => {
    dir[elem] = dir[elem] ? dir[elem] + 1 : 0;
    return dir;
  }, {} as { [key: string]: number });
};

export const getNumberMapOfEachElement = <E = any>(arr: E[]): Map<E, number> => {
  return arr.reduce((dir, elem) => {
    dir.set(elem, dir.has(elem) ? (dir.get(elem) as number) + 1 : 1);
    return dir;
  }, new Map<E, number>());
};
