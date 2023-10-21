import Heap from "./BinaryHeap.mjs";

export const solution = (inputs = [""]) => {
  inputs.shift();
  const heap = new Heap((a, b) => a < b);
  return inputs
    .reduce(
      (arr, n) => (
        n === "0" ? arr.push(heap.extract() ?? 0) : heap.insert(+n), arr
      ),
      []
    )
    .join("\n");
};
