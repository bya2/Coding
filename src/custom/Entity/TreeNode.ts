import Node from "./Node";

export default class TreeNode<D = any> extends Node<D> {
  protected _parent: Node<D> | null;
  protected _children: Node<D>[];

  constructor(data: D) {
    super(data);
    this._parent = null;
    this._children = [];
  }

  get parent() {
    return this._parent;
  }

  get children() {
    return this._children;
  }

  set parent(node) {
    this._parent = node; 
  }

  set children(nodes) {
    this._children = nodes;
  }
}