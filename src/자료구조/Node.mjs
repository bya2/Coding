export class Node {
  _data;
  _marked = false;

  constructor(_data) {
    this._data = _data;
  }

  get data() {
    return this._data;
  }

  get marked() {
    return this._marked;
  }

  set data(_data) {
    this._data = _data;
  }

  set marked(_bool) {
    this._marked = _bool;
  }
}

export class GNode extends Node {
  _adjacent = [];

  constructor(_data, _adjacent = []) {
    super(_data);
    this._adjacent = _adjacent;
  }

  get adjacent() {
    return this._adjacent;
  }

  set adjacent(_nodes) {
    this._adjacent = _nodes;
  }
}

export class TNode extends Node {
  _parent;
  _children = [];

  constructor(_data, _children = []) {
    super(_data);
    this._children = _children;
  }

  get parent() {
    return this._parent;
  }

  get children() {
    return this._children;
  }

  set parent(_node) {
    this._parent = _node;
  }

  set children(_nodes) {
    this._children = _nodes;
  }
}

export class BTNode extends TNode {
  get left() {
    return this._children[0];
  }

  get right() {
    return this._children[1];
  }

  set left(_node) {
    this._children[0] = _node;
  }

  set right(_node) {
    this._children[1] = _node;
  }
}

export class SLLNode extends Node {
  _next = null;

  constructor(_data) {
    super(_data);
  }

  get next() {
    return this._next;
  }

  set next(_node) {
    this._next = _node;
  }
}

export class DLLNode extends Node {
  _prev = null;
  _next = null;

  constructor(_data) {
    super(_data);
  }

  get prev() {
    return this._prev;
  }

  get next() {
    return this._next;
  }

  set prev(_node) {
    this._prev = _node;
  }

  set next(_node) {
    this._next = _node;
  }
}
