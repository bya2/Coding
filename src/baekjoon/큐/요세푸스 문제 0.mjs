import Queue from "./index.mjs";
import SLL from "./SLL.mjs";

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const [n, k] = lines[0].split(" ").map(Number);
  const queue = new SLL();
  const arr = [];

  for (let i = 1; i <= n; ++i) queue.push(i);

  for (let i = k - 1; queue.length; i = (i + k - 1) % queue.length) {
    console.log(i, queue.length, queue.print());
    const v = queue.extractAt(i);
    // console.log(v, i);
    arr.push(v);
  }

  return "<" + arr.join(", ") + ">";
};

export const other = (inputs = [""]) => {
  const [n, k] = inputs[0].split(" ").map(Number);

  const result = [];
  const queue = new Queue();
  for (let i = 1; i <= n; ++i) queue.enqueue(i);

  for (let i = k - 1; queue.length; i = (i + k - 1) % queue.length) {
    const a = queue.popAt(i);
    result.push(a);
  }

  return "<" + result.join(", ") + ">";
};

export const examples = [
  {
    inputs: `7 3`,
    answer: `<3, 6, 2, 7, 5, 1, 4>`,
  },
];
