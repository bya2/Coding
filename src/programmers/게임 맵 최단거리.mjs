// 연결 관계가 없다면 DFS
// 연결 관계가 있다면 BFS

// DFS, BFS
class ArrayQueue {
  data;
  size;
  constructor(data = []) {
    this.data = data;
    this.size = data.length;
  }
  get size() {
    return this.data.length;
  }
  get front() {
    return this.data[0];
  }
  get rear() {
    return this.data[this.size - 1];
  }
  enqueue(element) {
    if (typeof element !== "undefined") {
      ++this.size;
      this.data.push(element);
    }
  }
  dequeue() {
    if (this.size >= 1) {
      --this.size;
      return this.data.shift();
    }
  }
  isEmpty() {
    return this.size === 0;
  }
}

export const solution = (maps) => {
  const N = maps.length;
  const M = maps[0].length;
  const DX = [0, 0, -1, 1];
  const DY = [-1, 1, 0, 0];
  let queue = new ArrayQueue();
  let visited = maps;
  let count = 1;

  queue.enqueue([0, 0]);
  visited[0][0] = 0;

  while (!queue.isEmpty()) {
    const SIZE = queue.size;
    for (let i = 0; i < SIZE; ++i) {
      let [x, y] = queue.dequeue();

      for (let j = 0; j < 4; ++j) {
        let nx = x + DX[j];
        let ny = y + DY[j];

        if (nx >= 0 && nx < N && ny >= 0 && ny < M && visited[nx][ny] === 1) {
          if (nx === N - 1 && ny === M - 1) {
            return ++count;
          }
          queue.enqueue([nx, ny]);
          visited[nx][ny] = 0;
        }
      }
    }

    ++count;
  }

  return -1;
};

export const other_solution = (maps) => {
  let answer = 1;
  let visited = maps;
  let queue = [];
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const n = maps.length;
  const m = maps[0].length;

  queue.push([0, 0]);
  visited[0][0] = 0;

  let l = 0;
  while (queue.length > 0) {
    l++;
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      console.log(queue, size, answer);
      let [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
          if (nx === n - 1 && ny === m - 1) {
            console.log(l);
            return ++answer;
          }
          queue.push([nx, ny]);
          visited[nx][ny] = 0;
        }
      }
    }

    answer++;
  }

  return -1;
};

export const examples__arr = [
  {
    maps: [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 0, 1],
    ],
    answer: 11,
  },
  // {
  //   maps: [
  //     [1, 0, 1, 1, 1],
  //     [1, 0, 1, 0, 1],
  //     [1, 0, 1, 1, 1],
  //     [1, 1, 1, 0, 0],
  //     [0, 0, 0, 0, 1],
  //   ],
  //   answer: -1,
  // },
];
