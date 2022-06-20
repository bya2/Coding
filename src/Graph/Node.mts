export interface NodeFields<T> {
  _data: T;
  _children: NodeFields<T>[];
}

export interface NodeMethods<T> {
  addChild: (_data: T, _nodes: NodeFields<T>[]) => void;
  removeChild: (_data: T) => void;
  pop: () => NodeFields<T> | undefined;
}

export class Node<T = any> implements NodeFields<T>, NodeMethods<T> {
  _data: T;
  _children: NodeFields<T>[];

  constructor(_data: T, _nodes?: NodeFields<T>[]) {
    this._data = _data;
    this._children = _nodes ?? [];
  }

  get data() {
    return this._data;
  }

  get children() {
    return this._children;
  }

  set data(_obj) {
    this._data = _obj;
  }

  set children(_nodes) {
    this._children = _nodes;
  }

  addChild(_data: T, _nodes: NodeFields<T>[]): void {
    const child = new Node(_data, _nodes);

    this._children.push(child);
  }

  removeChild(_data: T): void {
    this._children = this._children.filter((childNode) => {
      return JSON.stringify(childNode) !== JSON.stringify(_data);
    });
  }

  pop(): NodeFields<T> | undefined {
    return this._children.pop();
  }
}

export class Item<T extends object> extends Node<T> {
  constructor(_data: T, _nodes: NodeFields<T>[]) {
    super(_data, _nodes);
  }

  upsert(_obj: object) {
    this._data = {
      ...this._data,
      ..._obj,
    };
  }
}
