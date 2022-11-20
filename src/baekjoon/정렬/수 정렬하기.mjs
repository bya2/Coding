/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  console.log(inputs.slice(1).sort((a, b) => +a - +b).join("\n"));
};

export const example = `5
5
2
3
4
1`;

export const answer = `1
2
3
4
5`;
