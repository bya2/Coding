import GraphNode from "@/custom/Entity/GraphNode";

interface GraphInterface {

}

export default class Graph<D> implements GraphInterface{
  protected _root: GraphNode<D>

  constructor(node: GraphNode<D>) {
    this._root = node;
  }

  get root() {
    return this._root;
  }

  set root(node) {
    this._root = node;
  }

  BFS() {

  }

  DFS() {

  }
}