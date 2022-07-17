import List from "../List";
import Node from "./Node";

export default class GraphNode<D = any> extends Node<D> {
  protected _adjacent: List<GraphNode<D>>;

  constructor(data: D, adjacent: GraphNode<D>[] = []) {
    super(data);
    this._adjacent = new List(adjacent);
  }
}
