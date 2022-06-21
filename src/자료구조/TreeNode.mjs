export default class TreeNode {
  _data;
  _parent;
  _children;
  _marked;

  constructor(_data, _parent = null, _children = [], _marked = false) {
    this._data = _data;
    this._parent = _parent;
    this._children = _children;
    this._marked = _marked;
  }

  get data() {
    return this._data;
  }

  get parent() {
    return this._parent;
  }

  get children() {
    return this._children;
  }

  get marked() {
    return this._marked;
  }

  set data(_any) {
    this._data = _any;
  }

  set parent(_node) {
    this._parent = _node;
  }

  set children(_nodes) {
    this._children = _nodes;
  }

  set marked(_bool) {
    this._marked = _bool;
  }
}
