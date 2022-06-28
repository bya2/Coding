import { Queue } from "./List.mjs";

export const pseudocodeOfBFS = (_node, _cb) => {
  let queue = new Queue();
  _node.visited = true;
  queue.enqueue(_node);

  while (!queue.isEmpty) {
    let node = queue.dequeue();

    // processing...
    _cb();
 
    for (let adjNode of node.adjacent) {
      if (!adjNode.visited) {
        adjNode.visited = true;
        queue.enqueue(adjNode);
      }
    }
  }
};