export const solution = (inputs = [""]) => {
  inputs.shift();
  inputs = inputs.map((s) => s.split(" ").map(Number));
  inputs.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  let count = 0;
  let tmp = 0;
  for (let i = 0; i < inputs.length; ++i) {
    const [s, e] = inputs[i];
    if (s >= tmp) {
      tmp = e;
      count++;
    }
  }
  return count + "";
};

export const examples = [
  {
    inputs: `11
    1 4
    3 5
    0 6
    5 7
    3 8
    5 9
    6 10
    8 11
    8 12
    2 13
    12 14`,
    answer: `4`,
  },
];
