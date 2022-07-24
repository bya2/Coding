export const insert = <E = any>(arr: E[], at: number, element: E): void => {
  arr.splice(at, 0, element);
};

export const replace = <E = any>(arr: E[], at: number, element: E): void => {
  arr.splice(at, 1, element);
};

export const remove = <E = any>(arr: E[], at: number): void => {
  arr.splice(at, 1);
};

export const compareAToB = (arr: any[], index1: number, index2: number) => {
  return arr[index1] < arr[index2];
};
