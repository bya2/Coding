import MinHeap from "../Heap/디스크 컨트롤러.mjs";

// jobs: [작업이 요청되는 시점, 작업의 소요 시간][]
// 소수점 이하 버림.
export const solution = (jobs) => {
  const asc_jobs__arr = [...jobs].sort((prev, next) => prev[0] - next[0]);

  let curr_time = 0;
  let end_time = 0;
  let total_time = 0;

  const heap = new MinHeap({ rootIdx: 1 });

  while (asc_jobs__arr.length || heap.getSize()) {
    while (asc_jobs__arr.length) {
      if (asc_jobs__arr[0][0] === curr_time) {
        heap.insert(asc_jobs__arr.shift());
      } else {
        break;
      }
    }

    if (heap.getSize() && curr_time >= end_time) {
      const [s_time, p_time] = heap.pop();
      end_time = p_time + curr_time;
      total_time = total_time + end_time - s_time;
    }

    curr_time++;
  }

  return (total_time / jobs.length) >> 0;
};

export const examples__arr = [
  {
    jobs: [
      [0, 3],
      [1, 9],
      [2, 6],
    ],
    answer: 9,
  },
  {
    jobs: [
      [0, 10],
      [4, 10],
      [5, 11],
      [15, 2],
    ],
    answer: 15,
  },
  {
    jobs: [[0, 10]],
    answer: 10,
  },
  {
    jobs: [
      [0, 10],
      [2, 3],
      [9, 3],
    ],
    answer: 9,
  },
  {
    jobs: [
      [0, 3],
      [4, 3],
      [10, 3],
    ],
    answer: 3,
  },
  {
    jobs: [
      [0, 3],
      [1, 9],
      [2, 6],
    ],
    answer: 9,
  },
  {
    jobs: [
      [1, 9],
      [1, 4],
      [1, 5],
      [1, 7],
      [1, 3],
    ],
    answer: 13,
  },
  {
    jobs: [
      [0, 9],
      [0, 4],
      [0, 5],
      [0, 7],
      [0, 3],
    ],
    answer: 13,
  },
  {
    jobs: [
      [0, 5],
      [1, 2],
      [5, 5],
    ],
    answer: 6,
  },
  {
    jobs: [
      [24, 10],
      [18, 39],
      [34, 20],
      [37, 5],
      [47, 22],
      [20, 47],
      [15, 2],
      [15, 34],
      [35, 43],
      [26, 1],
    ],
    answer: 74,
  },
  {
    jobs: [
      [0, 10],
      [4, 10],
      [5, 11],
      [15, 2],
    ],
    answer: 15,
  },
];
