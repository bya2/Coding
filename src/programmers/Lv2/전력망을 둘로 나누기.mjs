class Graph extends Map {
  root;

  constructor(obj) {
    super();
    if (obj) {
      this.root = obj;
    }
  }

  add(obj) {
    this.set(obj, new Set());
  }

  connect(obj1, obj2) {
    this.get(obj1).add(obj2);
    this.get(obj2).add(obj1);
  }

  disconnect(obj1, obj2) {
    this.get(obj1).delete(obj2);
    this.get(obj2).delete(obj1);
  }

  searchBreadthFirst(root = this.root) {
    const queue = [root];
    const dict = { [root]: true };

    let count = 0;
    let dep = 0;
    for (; queue.length > 0; ++dep) {
      for (let size = queue.length; size > 0; --size, ++count) {
        let curr = queue.shift();
        for (const adj of this.get(curr)) {
          if (!dict[adj]) {
            queue.push(adj);
            dict[adj] = true;
          }
        }
      }
    }

    return count;
  }
}

/**
 * 전선들 중 하나를 끊어서 송전탑의 개수가 가능한 한 비슷하도록 두 전력망으로 나누었을 때, 두 전력망이 가지고 있는 송전탑 개수의 차이(절대값)를 리턴
 * @param {number} n 송전탑의 개수
 * @param {number[][]} wires 전선 정보
 */
export const solution = (n, wires) => {
  const g = new Graph();
  let min = Infinity;
  for (let i = 1; i <= n; ++i) g.add(i);
  for (const [a, b] of wires) g.connect(a, b);
  for (const [a, b] of wires) {
    g.disconnect(a, b);
    const n1 = g.searchBreadthFirst(a);
    const n2 = g.searchBreadthFirst(b);
    min = Math.min(min, Math.abs(n1 - n2));
    g.connect(a, b);
  }
  return min;
};

export const examples__arr = [
  {
    n: 9,
    wires: [
      [1, 3],
      [2, 3],
      [3, 4],
      [4, 5],
      [4, 6],
      [4, 7],
      [7, 8],
      [7, 9],
    ],
    answer: 3,
  },
  {
    n: 4,
    wires: [
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    answer: 0,
  },
  {
    n: 7,
    wires: [
      [1, 2],
      [2, 7],
      [3, 7],
      [3, 4],
      [4, 5],
      [6, 7],
    ],
    answer: 1,
  },
];
