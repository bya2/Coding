import Heap from "./index.mjs";

export const solution = (inputs = [""]) => {
  inputs.shift();
  const heap = new Heap();
  return inputs
    .reduce(
      (arr, n) => (
        n === "0" ? arr.push(heap.extract() ?? 0) : heap.insert(n), arr
      ),
      []
    )
    .join("\n");
};

export const examples = [
  {
    inputs: `13
    0
    1
    2
    0
    0
    3
    2
    1
    0
    0
    0
    0
    0`,
    answer: `0
    2
    1
    3
    2
    1
    0
    0`,
  },
];
