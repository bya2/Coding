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

export const solution = (n, results) => {
  let adjList = {};
  for (let [win, lose] of results) {
    adjList[win] = adjList[win] ? [...adjList[win], lose] : [lose];
  }
  let values = Object.values(adjList)
  console.log(values);

  // const queue = new ArrayQueue();
  // queue.enqueue()
};

export const examples__arr = [
  {
    n: 5,
    results: [
      [4, 3],
      [4, 2],
      [3, 2],
      [1, 2],
      [2, 5],
    ],
    answer: 2,
  },
];
