/**
 * @param {string[]} inputs
 */
export function solution(inputs) {
  inputs.pop();
  const lines = inputs.map(Number);

  const Divisor = {
    arrOf(_n) {
      const arr = [];
      for (let i = 1, len = _n / 2; i <= len; ++i)
        if (_n % i === 0) arr.push(i);
      // arr.push(_n);
      return arr;
    },
  };

  const Sum = {
    from(_list) {
      return _list.reduce((a, b) => a + b, 0);
    },
  };

  return lines
    .map((line) => {
      const arr = Divisor.arrOf(line);
      const sum = Sum.from(arr);

      return sum === line
        ? `${line} = ${arr.reduce((a, b) => a + " + " + b)}`
        : `${line} is NOT perfect.`;
    })
    .join("\n");
}

export const examples = [
  {
    inputs: `6
    12
    28
    -1`,
    answer: `6 = 1 + 2 + 3
    12 is NOT perfect.
    28 = 1 + 2 + 4 + 7 + 14`,
  },
];
