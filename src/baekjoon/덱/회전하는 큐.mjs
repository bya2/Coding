import Deque from "./logic.mjs";

export const solution = (inputs = [""]) => {
  const [n, m] = inputs[0].split(" ").map(Number);
  const positions = inputs[1].split(" ").map(Number);
  const deque = new Deque();
  let count = 0;

  for (let i = 1; i <= n; i++) deque.push(i);

  for (let i = 0; i < m; ++i, deque.shift()) {
    if (positions[i] !== deque.head.data) {
      const index = deque.searchIndexOf(positions[i]);
      const half = deque.length / 2;

      if (index <= half) {
        for (let j = 0; j < index; ++j, ++count) {
          deque.push(deque.shift());
        }
      } else {
        for (let j = 0; j < deque.length - index; ++j, ++count) {
          deque.unshift(deque.pop());
        }
      }
    }
  }

  return count + "";
};

export const examples = [
  {
    inputs: `10 3
    1 2 3`,
    answer: `0`,
  },
  {
    inputs: `10 3
    2 9 5`,
    answer: `8`,
  },
];
