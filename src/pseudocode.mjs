export const pseudocodeOfDFS = (node, cb, ...args) => {
  if (node === null) return;

  let d = (cb || noop)(...args);
  if (d) return d;
  node.marked = true;

  for (let adjNode of node.adjacent) {
    if (!adjNode.marked) {
      pseudocodeOfDFS(node);
    }
  }
};

export const pseudocodeOfBFS = (adjList, root) => {
  let queue = [];
  let visited = [];

  queue.push(root);
  visited[root] = true;

  for (let depth = 0; queue.length; ++depth) {
    const queueSize = queue.length;
    for (let i = 0; i < queueSize; ++i) {
      let curr = queue.shift();

      for (let adj of adjList[visited[curr]]) {
        if (visited[adj]) {
          queue.push(adj);
          visited[adj] = true;
        }
      }
    }
  }
};

export const pseudocodeOfFloyd = (n, origin) => {
  let dist = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      dist[i][j] = i === j ? 0 : origin[i][j] ?? Infinity;
    }
  }

  for (let k = 0; k < n; ++k) {
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < n; ++j) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  return dist;
};

export const pseudocodeOfHash = () => {};
