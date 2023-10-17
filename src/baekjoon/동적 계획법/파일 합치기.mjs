import Heap from "../우선순위 큐/index.mjs";

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const T = +lines[0];

  const tests = [];
  for (let i = 1; i < lines.length; i += 2) {
    tests.push({
      n: +lines[i],
      sizes: lines[i + 1].split(" ").map(Number),
    });
  }

  console.log(tests);

  return tests
    .map((t) => {
      const { n, sizes } = t;

      const heap = new Heap((a, b) => a < b);
      for (const size of sizes) heap.insert(size);

      let total = 0;
      while (heap.length > 0) {
        const acc = heap.extract() + heap.extract();
        total += acc;
        heap.insert(acc);
      }

      return total;
    })
    .join("\n");
};

// function combine() {
//   let cost = 0;
//   const recur = (arr) => {
//     console.log(arr);
//     const nextArr = [];
//     const lenIsOdd = arr.length % 2 === 1;

//     for (
//       let i = 0, len = lenIsOdd ? arr.length - 2 : arr.length;
//       i < len;
//       i += 2
//     ) {
//       const sum = arr[i] + arr[i + 1];
//       cost += sum;
//       nextArr.push(sum);
//     }

//     if (arr.length % 2 === 1) {
//       nextArr[nextArr.length - 1] += arr[arr.length - 1];
//       cost += nextArr[nextArr.length - 1];
//     }

//     if (nextArr.length > 1) {
//       recur(nextArr);
//     }
//   };
//   recur(this);
//   return cost;
// }

// export const solution = (inputs = [""]) => {
//   const k = +inputs[0];
//   const arr = [];
//   for (let i = 1, len = k * 2; i <= len; i += 2) {
//     const costs = inputs[i + 1]
//       .split(" ")
//       .map(Number)
//       .sort((a, b) => b - a);

//     const cost = combine.call(costs);
//     arr.push(cost);
//   }
//   return arr.join("\n");
// };

export const examples = [
  {
    inputs: `2
    4
    40 30 30 50
    15
    1 21 3 4 5 35 5 4 3 5 98 21 14 17 32`,
    answer: `300
    864`,
  },
];
