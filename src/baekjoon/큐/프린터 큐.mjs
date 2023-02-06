import Heap from "./Heap.mjs";
import Queue from "./index.mjs";

export const solution = (inputs = [""]) => {
  const N = +inputs.shift();
  const result = [];
  for (let i = 0, len = N * 2; i < len; i += 2) {
    const [_, m] = inputs[i].split(" ").map(Number);
    const maxHeap = new Heap();
    const queue = new Queue();
    const numbers = inputs[i + 1].split(" ").map(Number);
    numbers.forEach((n, i) => {
      queue.enqueue([i, n]);
      maxHeap.insert(n);
    });

    for (let count = 0; queue.length; ) {
      const node = queue.dequeue();
      if (node[1] === maxHeap[0]) {
        count++;
        maxHeap.poll();
        if (node[0] === m) {
          result.push(count);
          break;
        }
      } else {
        queue.enqueue(node);
      }
    }
  }

  return result.join("\n");
};

export const examples = [
  {
    inputs: `3
    1 0
    5
    4 2
    1 2 3 4
    6 0
    1 1 9 1 1 1`,
    answer: `1
    2
    5`,
  },
];
