// 퀵Sort
// const merge = (left, right) => {
//   const tmpArr = [];
//   while (left.length && right.length) {
//     left[0] <= right[0]
//       ? tmpArr.push(left.shift())
//       : tmpArr.push(right.shift());
//   }
//   return [...tmpArr, ...left, ...right];
// };

// const mergeSort = (arr) => {
//   if (arr.length === 1) return arr;

//   const middleIndex = ~~(arr.length / 2);
//   const left = arr.slice(0, middleIndex);
//   const right = arr.slice(middleIndex);

//   return merge(mergeSort(left), mergeSort(right));
// };

/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  // INPUTS:
  // 0: 배열의 크기, 저장 회수
  // 1: 배열의 원소들

  // OUTPUT:
  // 배열에 K(저장 횟수)번째 저장되는 수

  const [N, K] = inputs[0].split(" ").map(Number);
  let count = 0;
  let value = -1;

  const merge = (arr, p, q, r) => {
    const tmpArr = [];
    let i, j, t;
    i = p;
    j = q + 1;
    t = 0;

    while (i <= q && j <= r) {
      if (arr[i] <= arr[j]) {
        tmpArr[t++] = arr[i++];
      } else {
        tmpArr[t++] = arr[j++];
      }
    }

    while (i <= q) {
      tmpArr[t++] = arr[i++];
    }

    while (j <= r) {
      tmpArr[t++] = arr[j++];
    }

    i = p;
    t = 0;

    while (i <= r) {
      arr[i++] = tmpArr[t++];
    }

    count += tmpArr.length;
    if (count >= K && value === -1) {
      value = tmpArr[tmpArr.length - 1 - count + K];
    }
  };

  const mergeSort = (arr, l, r, i = 1) => {
    if (l < r) {
      let q = ~~((l + r) / 2);
      mergeSort(arr, l, q, i);
      mergeSort(arr, q + 1, r, i);
      merge(arr, l, q, r);
    }
  };

  const arr = inputs[1].split(" ").map(Number);
  mergeSort(arr, 0, arr.length - 1);
  return value + "";
};

export const examples = [
  {
    inputs: `5 7
    4 5 1 3 2`,
    answer: `3`,
  },
  {
    inputs: `5 13
    4 5 1 3 2`,
    answer: `-1`,
  },
];
