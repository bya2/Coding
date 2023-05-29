/**
 *
 * @param {number[]} seq 비내림차순으로 정렬(오름차순)
 * @param {number} k 부분 수열의 합
 */
export const solution = (seq, k) => {
  let li = 0;
  let ri = 0;
  let lt = 0;
  let rt = 0;
  let acc = 0;
  let prevLen = Number.MAX_SAFE_INTEGER;

  while (li <= ri && ri < seq.length) {
    if (li === ri) acc = seq[li];

    if (acc < k) {
      ri++;
      if (ri < seq.length) acc += seq[ri];
    } else if (acc > k) {
      acc -= seq[li];
      li++;
    } else {
      if (prevLen > ri - li + 1) {
        prevLen = ri - li + 1;
        lt = li;
        rt = ri;
      }

      if (li === ri) break;

      acc -= seq[li];
      li++;
      ri++;
      if (ri < seq.length) acc += seq[ri];
    }
  }

  return [lt, rt];
};

Array.prototype.sum = function (si, ei) {
  if (ei >= this.length) ei = this.length - 1;
  let sum = 0;
  for (let i = si; i <= ei; ++i) sum += this[i];
  return sum;
};

export const fail = (seq, k) => {
  for (let len = 1; len <= seq.length; ++len) {
    for (let i = 0; i < seq.length - len + 1; ++i) {
      if (seq.sum(i, i + len - 1) === k) return [i, i + len - 1];
    }
  }
};

export const examples__arr = [
  {
    p1: [1, 2, 3, 4, 5],
    p2: 7,
    answer: [2, 3],
  },
  {
    p1: [1, 1, 1, 2, 3, 4, 5],
    p2: 5,
    answer: [6, 6],
  },
  {
    p1: [2, 2, 2, 2, 2],
    p2: 6,
    answer: [0, 2],
  },
];
