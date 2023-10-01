import SLL from "./SLL.mjs";
import Queue from "./index.mjs";

/**
 * SLL
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const N = +lines[0];
  const queue = new SLL();

  for (let i = 1; i <= N; ++i) queue.push(i);

  while (queue.length > 1) {
    queue.shift();
    queue.push(queue.shift());
  }

  return queue.head.inner + "";
};

/**
 * DLL
 * @param {string[]} lines
 */
export const other = (lines = [""]) => {
  const n = +lines[0];
  const queue = new Queue();
  for (let i = 1; i <= n; ++i) queue.push(i);
  while (queue.length > 1) {
    queue.pop();
    queue.push(queue.pop());
  }
  return queue.head.data + "";
};

export const examples = [
  {
    inputs: `6`,
    answer: `4`,
  },
];
