import _f from "js-functions";

/**
 * @param {number} k 명예의 전당 최하위 순위
 * @param {number[]} scores 가수의 점수 리스트
 * @return {number[]} 매일 "명예의 전당"의 최하위 점수
 */
export const solution = (k, scores) => {
  // // MinHeap
  // const queue = new Heap((a, b) => a < b);
  // const mins = [];
  // for (const score of scores) {
  //   // queue.insert(score);
  //   // mins.push(queue[1]);
  //   // if (queue.)
  // }
  // return mins;

  // console.log(a);

  const heap = new _f.Heap();
  heap.insert(1);
  return heap;
};

export const examples__arr = [
  {
    k: 3,
    score: [10, 100, 20, 150, 1, 100, 200],
    answer: [10, 10, 10, 20, 20, 100, 100],
  },
  {
    k: 4,
    score: [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000],
    answer: [0, 0, 0, 0, 20, 40, 70, 70, 150, 300],
  },
];
