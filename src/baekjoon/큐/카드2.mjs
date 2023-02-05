import Queue from "./index.mjs";

export const solution = (inputs = [""]) => {
  const n = +inputs[0];
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
