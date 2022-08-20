export const 연속된중복제거 = () => {};

export const solution = (arr) => {
  const len = arr.length;

  let list = [0];
  let curr = arr[0];

  for (let i = 1; i < len; ++i) {
    if (curr !== arr[i]) {
      curr = arr[i];
      list.push(i);
    }
  }

  return list.map((el) => {
    return arr[el];
  });
};

export const examples__arr = [
  {
    arr: [1, 1, 3, 3, 0, 1, 1],
    answer: [1, 3, 0, 1],
  },
  {
    arr: [4, 4, 4, 3, 3],
    answer: [4, 3],
  },
];
