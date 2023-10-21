import Heap from "../우선순위 큐/BinaryHeap.mjs";

export const solution = (lines) => {
  const T = +lines[0];

  const inputs = [];
  for (let i = 1; i <= T; ++i) {
    inputs.push({
      n: +lines[i],
      sizes: lines[i + 1].split(" ").map(Number),
    });
  }

  return inputs
    .map((t) => {
      const { n, sizes } = t;

      // dp[i][j] = 구간 S[i, j]를 합치는데 드는 최소비용

      // dp[i][i] = size[i]
      // dp[i-1][i]= size[i-1] + size[i]

      const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
      const sum = Array.from({ length: n + 1 }, () => 0);

      for (let i = 1; i <= n; ++i) {
        dp[i][i] = sizes[i - 1];
        dp[i - 1][i] = dp[i - 1][i - 1] + dp[i][i];
        sum[i] = sum[i - 1] + dp[i][i];
      }

      for (let line = 2; line <= n; ++line) {
        for (let i = 1; line + i <= n; ++i) {
          let s = i;
          let e = line + i;
          let minimum = Number.MIN_SAFE_INTEGER;

          for (let mid = s; mid < e; mid++) {
            let cost =
              dp[s][mid] +
              dp[mid + 1][e] +
              sum[e === mid + 1 ? e - 1 : e] -
              sum[s === mid ? s : s - 1];

            minimum = Math.min(minimum, cost);
          }
          dp[s][e] = minimum;
        }
      }

      console.log(dp);

      // return dp[1][n];
    })
    .join("\n");
};

// /**
//  * @param {string[]} lines
//  */
// export const fail = (lines) => {
//   const T = +lines[0];

//   const tests = [];
//   for (let i = 1; i < lines.length; i += 2) {
//     tests.push({
//       n: +lines[i],
//       sizes: lines[i + 1].split(" ").map(Number),
//     });
//   }

//   console.log(tests);

//   return tests
//     .map((t) => {
//       const { n, sizes } = t;

//       const heap = new Heap((a, b) => a < b);
//       for (const size of sizes) heap.push(size);

//       console.log(heap._inner);

//       let total = 0;
//       while (heap.length > 1) {
//         const a = heap.pop();
//         const b = heap.pop();
//         const acc = a + b;
//         total += acc;
//         console.log(heap._inner, `${a} + ${b} = ${acc}`, total);
//         heap.push(acc);
//       }

//       console.log(heap._inner);

//       return total;
//     })
//     .join("\n");
// };

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
