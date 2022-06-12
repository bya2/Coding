export const solution = (a, b) => {
  let sum = 0;
  for (let i = 0; i < a.length; ++i) {
    sum += a[i] * b[i];
  }
  return sum;
};

export const examples__arr = [
  {
    a: [1, 2, 3, 4],
    b: [-3, -1, 0, 2],
    answer: 3,
  },
  {
    a: [-1, 0, 1],
    b: [1, 0, -1],
    answer: -2,
  },
];

// export const other_solution = (s) => {
//   const unitRange = Array.from({ length: (s.length / 2) >> 0 }, (_, i) => i + 1);
//   return Math.min(...unitRange.map((unit) => compress(s, unit).length));
// };

// const compress = (str, unit) => {
//   const make = () => {
//     return;
//   };

//   return make(chunk(str, unit).reduce());
// };

// const chunk = (_str, _unit) => {
//   return _str.length <= _unit ? [s] : [s.slice(0, _unit), ...chunk(s.slice(_unit), _unit)];
// };
