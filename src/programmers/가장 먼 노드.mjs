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
    return this.data.length === 0;
  }
}

// class Node {
//   data;
//   _marked = false;
//   constructor(data) {
//     this.data = data;
//   }
//   get marked() {
//     return this._marked;
//   }
//   mark(cb, ...args) {
//     this._marked = true;
//     cb?.(...args);
//   }
// }

// class SparseGraph {
//   root;
//   adjList;
//   constructor(root, adjList) {
//     this.root = root;
//     this.adjList = adjList;
//   }
//   BFS() {
//     let queue = new ArrayQueue();
//     this.root.marked();
//     queue.enqueue(this.root);

//     while (!queue.isEmpty()) {
//       let curr = queue.dequeue();
//       for (let adj of this.adjList[curr.data]) {
//         if (!adj.marked) {
//           adj.mark();
//           queue.enqueue(adj);
//         }
//       }
//     }
//   }
// }

export const solution = (n, edges) => {
  let adjList = Array.from({ length: n + 1 }, () => []);
  for (let [i, j] of edges) {
    adjList[i - 1].push(j - 1);
    adjList[j - 1].push(i - 1);
  }

  let queue = new ArrayQueue();
  queue.enqueue(0);
  let marked = [1];

  while (!queue.isEmpty()) {
    const curr = queue.dequeue();
    for (let adj of adjList[curr]) {
      if (!marked[adj]) {
        marked[adj] = marked[curr] + 1;
        queue.enqueue(adj);
      }
    }
  }

  const max = Math.max(...marked);
  return marked.filter((el) => el === max).length;
};

export const examples__arr = [
  {
    n: 6,
    edges: [
      [3, 6],
      [4, 3],
      [3, 2],
      [1, 3],
      [1, 2],
      [2, 4],
      [5, 2],
    ],
    answer: 3,
  },
];
