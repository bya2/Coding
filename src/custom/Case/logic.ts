export const getNumOfAllCasesFromArr = (_arr: number[]): number => {
  // (파츠의 개수 + 1(안입음))의 곱 - 1(아무것도 안입은 경우)
  let num = 1;

  const arrLen = _arr.length;
  for (let i = 0; i < arrLen; ++i) {
    num *= _arr[i] + 1;
  }

  return num - 1;
};

export const getNumOfAllCasesFromDir = <E extends { [key: string]: number } = any>(_dir: E): number => {
  // (파츠의 개수 + 1(안입음))의 곱 - 1(아무것도 안입은 경우)
  let num = 1;

  for (let value of Object.values(_dir)) {
    num *= value + 1;
  }

  return num - 1;
};

export const getNumOfAllCasesFromMap = (_map: Map<any, number>) => {
  // (파츠의 개수 + 1(안입음))의 곱 - 1(아무것도 안입은 경우)
  let num = 1;

  for (let value of _map.values()) {
    num *= value + 1;
  }

  return num - 1;
};
