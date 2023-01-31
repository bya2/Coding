/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  inputs.shift();
  const arr = [];
  const result = [];
  for (const input of inputs) {
    const [cmd, val] = input.split(" ");
    switch (cmd) {
      case "push":
        arr.push(val);
        break;
      case "pop":
        result.push(arr.length === 0 ? -1 : arr.pop());
        break;
      case "size":
        result.push(arr.length);
        break;
      case "empty":
        result.push(arr.length === 0 ? 1 : 0);
        break;
      case "top":
        result.push(arr.length === 0 ? -1 : arr[arr.length - 1]);
        break;
    }
  }
  return result.join("\n");
};

export const examples = [
  {
    inputs: `14
    push 1
    push 2
    top
    size
    empty
    pop
    pop
    pop
    size
    empty
    pop
    push 3
    empty
    top`,
    answer: `2
    2
    0
    2
    1
    -1
    0
    1
    -1
    0
    3`,
  },
];
