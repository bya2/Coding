import DLL from "./DLL.mjs";

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  lines.shift();
  const deque = new DLL();
  const arr = [];
  for (const line of lines) {
    const [cmd, v] = line.split(" ").map(Number);
    switch (cmd) {
      case 1: // unshift
        deque.unshift(v);
        break;
      case 2: // push
        deque.push(v);
        break;
      case 3: // shift -1
        arr.push(deque.shift());
        break;
      case 4: // pop -1
        arr.push(deque.pop());
        break;
      case 5: // length
        arr.push(deque.length);
        break;
      case 6: // isEmpty
        arr.push(deque.length === 0 ? 1 : 0);
        break;
      case 7: // getHead
        arr.push(deque.head);
        break;
      case 8: // getTail
        arr.push(deque.tail);
        break;
    }
    console.log(cmd, deque.print(), arr);
  }
  return arr.join("\n");
};

export const examples = [
  {
    inputs: `11
    6
    1 3
    1 8
    7
    8
    3
    2 5
    1 2
    5
    4
    4`,
    answer: `1
    8
    3
    8
    3
    5
    3`,
  },
];
