export const pseudocodeOfDFS = (_node, _cb) => {
  if (_node === null) return;

  // processing...
  _cb();

  _node.visited = true;

  for (let adjNode of _node.adjacent) {
    if (!adjNode.visited) {
      pseudocodeOfDFS(adjNode);
    }
  }
};
