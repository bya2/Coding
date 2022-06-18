const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const graphDFS = (graph, startNode) => {
  let needVisitStack = [];
  let visitedQueue = [];

  needVisitStack.push(startNode);

  while (needVisitStack.length !== 0) {
    const node = needVisitStack.pop();
    
    if (!visitedQueue.includes(node)) {
      visitedQueue.push(node);
      needVisitStack = [...needVisitStack, ...graph[node]];
    }
  }

  return visitedQueue;
}

console.log(graphDFS(graph, "A"));