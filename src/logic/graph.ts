import { Node } from "./node";

export class GraphNode<Data = any> extends Node<Data> {
  _adjacent: GraphNode<Data>[];

  constructor(data: Data) {
    super(data);
    this._adjacent = [];
  }

  add(node: GraphNode<Data>) {
    this._adjacent.push(node);
  }
}

export class Graph<Data = any> {
  root: GraphNode<Data>;

  constructor(root: GraphNode<Data>) {
    this.root = root;
  }

  DFS() {
    
  }

  BFS() {

  }
}
