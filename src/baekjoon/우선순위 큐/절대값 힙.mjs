import Heap from "./index.mjs";

export const solution = (inputs = [""]) => {
  inputs.shift();
  const heap = new Heap((a, b) => {
    const n1 = Math.abs(a);
    const n2 = Math.abs(b);
    if (n1 === n2) return a < b;
    return n1 < n2;
  });
  return inputs
    .reduce(
      (arr, n) => (
        n === "0" ? arr.push(heap.extract() ?? 0) : heap.insert(+n), arr
      ),
      []
    )
    .join("\n");
};

export const examples = [
  {
    inputs: `18
    1
    -1
    0
    0
    0
    1
    1
    -1
    -1
    2
    -2
    0
    0
    0
    0
    0
    0
    0`,
    answer: `-1
    1
    0
    -1
    -1
    1
    1
    -2
    2
    0`,
  },
];
