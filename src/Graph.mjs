import { ArrayQueue, ArrayStack } from "./ArrayList.mjs";

// 그래프 노드
export class Node {
  data;
  depth = 0;
  _marked = false;

  constructor(data) {
    this.data = data;
  }

  get marked() {
    return this._marked;
  }

  mark() {
    this._marked = true;
  }

  isMarked() {
    return this._marked;
  }
}

class Graph {
  rootNode;
}

// 인접 리스트 그래프
// + 인접한 노드들을 찾기에 용이
// + 모든 간선의 수: O(n+E)
// - 간선 존재 여부와 정점의 차수: O(N*E)
// > 희소 그래프에 사용
export class AdjacencyListGraph extends Graph {
  _adjacencyList = new Map();

  get adjacencyList() {
    return this._adjacencyList;
  }

  addVertex(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      this._adjacencyList.set(vertex, new Set());
    }
  }

  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this._adjacencyList.get(vertex1).add(vertex2);
    this._adjacencyList.get(vertex2).add(vertex1);
  }

  // 깊이우선탐색 - 스택
  IterativeDFS() {
    const { rootNode, adjacencyList } = this;

    const stack = new ArrayStack();
    stack.push(rootNode);

    while (!stack.isEmpty()) {
      const currNode = stack.pop();
      currNode.mark();
      console.log(currNode.data, adjacencyList.get(currNode));

      if (adjacencyList.has(currNode)) {
        for (const adjNode of adjacencyList.get(currNode)) {
          if (!adjNode.isMarked()) {
            stack.push(adjNode);
          }
        }
      }
    }
  }

  // 깊이우선탐색 - 재귀
  RecursiveDFS() {
    const { rootNode, adjacencyList } = this;

    const DFS = (currNode, { depth }) => {
      if (typeof currNode === "undefined" || currNode === null) {
        return null;
      }
      currNode.mark();

      if (adjacencyList.has(currNode)) {
        ++depth;
        for (const adjNode of adjacencyList.get(currNode)) {
          if (!adjNode.isMarked()) {
            DFS(adjNode, { depth });
          }
        }
      }

      return [depth];
    };

    return DFS(rootNode, { depth: 0 });
  }

  // 너비우선탐색 - 큐
  BFS() {
    const { rootNode, adjacencyList } = this;

    const queue = new ArrayQueue();
    queue.enqueue(rootNode);
    rootNode.mark();

    let depth;
    let leafs = [];
    for (depth = 0; !queue.isEmpty(); ++depth) {
      const queueSize = queue.size;
      for (let i = 0; i < queueSize; ++i) {
        const currNode = queue.dequeue();
        currNode.depth = depth;
        console.log(currNode);

        if (adjacencyList.has(currNode)) {
          for (const adjNode of adjacencyList.get(currNode)) {
            if (!adjNode.isMarked()) {
              queue.enqueue(adjNode);
              adjNode.mark();
            }
          }
        } else {
          // isLeaf ?
        }
      }
    }

    return [depth - 1, leafs];
  }
}

// 인접 행렬 그래프
// + 간선의 존재 여부: O(1)
// + 정점의 차수: O(n)
// - 인접한 노드들을 찾기 위해 모든 노드 전부 순회 필요
// - 모든 간선의 수: O(n^2)
// > 밀집 그래프에 사용
export class AdjacencyMatrixGraph {
  _adjacencyMatrix;
}
