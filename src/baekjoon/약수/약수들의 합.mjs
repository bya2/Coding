import { getDivisors } from "./logic.mjs";
/**
 * @param {string[]} inputs
 */
export function solution2(inputs) {
  inputs.pop();
  const _inputs = inputs.map(Number);

  return _inputs
    .map((input) => {
      const arr = getDivisors(input);
      const sum = arr.reduce((a, b) => a + b, 0);

      return sum === input
        ? `${input} = ${arr.reduce((a, b) => a + " + " + b)}`
        : `${input} is NOT perfect.`;
    })
    .join("\n");
}

export function solution(inputs) {
  inputs.pop();
  const lines = inputs.map(Number);

  const Divisor = {
    arrOf(_n) {
      const v1 = [1],
        v2 = [];
      const sqrtN = Math.sqrt(_n);
      for (let i = 2; i <= sqrtN; ++i) {
        if (_n % i === 0) {
          v1.push(i);
          if (i !== sqrtN) v2.unshift(_n / i);
        }
      }
      return [v1, v2].flat();
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
      console.log(arr);
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
