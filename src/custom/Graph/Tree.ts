import Graph from ".";
import GraphNode from "../Entity/GraphNode";
import List from "../List";

export class TreeNode<D> {

}

export default class Tree<D = any> extends Graph<D> {
  protected _parent = TreeNode<D> | null;
  protected _children: List<TreeNode<D>>


  constructor(root: GraphNode<D>) {
    super(root);
    this._parent = null;
    this._children = new List();
  }

  get left() {
    return this._children
  }
}