import Graph from ".";
import GraphNode from "../Entity/GraphNode";

export default class SparseGraph<D = any> extends Graph<D> {
  protected _adjacencyList: any[];

  constructor(node: GraphNode<D>) {
    super(node);
    this._adjacencyList = [];
  }
}
