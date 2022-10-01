import Heap from "../Heap.mjs";

export const solution = (opers = [""]) => {
  let begin = 0;
  let size = 0;
  for (let i = 0, len = opers.length; i < len; ++i) {
    opers[i][0] === "I" ? ++size : size >= 1 && --size;
    if (size === 0) begin = i;
  }

  if (size === 0) return [0, 0];

  const maxHeap = new Heap();
  const minHeap = new Heap((a, b) => a < b);

  for (let i = begin, len = opers.length; i < len; ++i) {
    let [cmd, value] = opers[i].split(" ");
    if (cmd === "I") {
      maxHeap.insert(+value);
      minHeap.insert(+value);
      ++size;
    } else if (size >= 1) {
      value === "1" ? maxHeap.poll() : minHeap.poll();
      --size;
    }
  }

  return [maxHeap.poll(), minHeap.poll()];
};

export const fail_solution = (opers = [""]) => {
  const maxHeap = new Heap();
  const minHeap = new Heap((a, b) => a < b);
  let size = 0;
  for (let oper of opers) {
    let [cmd, value] = oper.split(" ");
    if (cmd === "I") {
      maxHeap.insert(+value);
      minHeap.insert(+value);
      ++size;
    } else {
      if (size >= 1) {
        if (value === "1") maxHeap.poll();
        else minHeap.poll();
        --size;
      }
    }
  }

  if (size === 0) {
    return [0, 0];
  } else {
    let maxValue = maxHeap.poll();
    if (size === 1) return [maxValue, maxValue];
    else return [maxValue, minHeap.poll()];
  }
};

export const examples__arr = [
  {
    opers: ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"],
    answer: [0, 0],
  },
  {
    opers: ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"],
    answer: [333, -45],
  },
  {
    opers: ["I 4", "I 3", "I 2", "I 1", "D 1", "D 1", "D -1", "D -1", "I 5", "I 6"],
    answer: [6, 5],
  },
];
