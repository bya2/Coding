import Entity from "./Entity";

export default class Node<D = any> extends Entity {
  protected _data: D;
  protected _marked: boolean;

  constructor(data: D) {
    super();
    this._data = data;
    this._marked = false;
  }

  get data() {
    return this._data;
  }

  get marked() {
    return this._marked;
  }

  set data(_data: D) {
    this._data = _data;
  }

  set marked(_marked) {
    this._marked = _marked;
  }
}

export class TreeNode<D = any> extends Node<D> {
  protected _parent: Node<D> | null;
  protected _children: Node<D>[];

  constructor(data: D, parent: Node<D> | null = null) {
    super(data);
    this._parent = parent;
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

export class BTreeNode<D = any> extends Node {
  protected _parent: Node<D> | null;
  protected _children: [Node<D> | null, Node<D> | null];

  constructor(data: D, parent: Node<D> | null = null, children: [Node<D> | null, Node<D> | null] = [null, null]) {
    super(data);
    this._parent = parent;
    this._children = children;
  }

  get parent() {
    return this._parent;
  }

  get children() {
    return this._children;
  }

  get left() {
    return this._children[0];
  }

  get right() {
    return this._children[1];
  }

  set parent(node) {
    this._parent = node;
  }

  set children(nodes: [Node<D> | null, Node<D> | null]) {
    this._children = nodes;
  }

  set left(node: Node<D> | null) {
    this._children[0] = node;
  }

  set right(node: Node<D> | null) {
    this._children[1] = node;
  }

  getLevel() {}

  getSiblings() {}
}
