import Queue from "./index.mjs";

export const solution = (inputs = [""]) => {
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
