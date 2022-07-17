import Graph from ".";
import GraphNode from "../Entity/GraphNode";

export default class DenseGraph<D = any> extends Graph<D> {
  protected _adjacencyMatrix: any[];

  constructor(node: GraphNode<D>) {
    super(node);
    this._adjacencyMatrix = [];
  }
}
