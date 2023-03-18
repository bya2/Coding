import Heap from "./index.mjs";

export const solution = (inputs = [""]) => {
  inputs.shift();
  const heap = new Heap();
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
  {
    inputs: `31
    12
    14
    9
    15
    1
    10
    7
    6
    2
    3
    11
    5
    4
    13
    8
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0`,
    answer: `15
    14
    13
    12
    11
    10
    9
    8
    7
    6
    5
    4
    3
    2
    1
    0`,
  },
];
