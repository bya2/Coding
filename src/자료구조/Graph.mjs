import { pseudocodeOfBFS } from "./BFS.mjs";
import { pseudocodeOfDFS } from "./DFS.mjs";

export class Graph {
  _root;

  constructor(_root) {
    this._root = _root;
  }

  get root() {
    return this._root;
  }

  set root(_node) {
    this._root = _node;
  }

  BFS(_cb) {
    pseudocodeOfBFS(this._root, _cb);
  }

  DFS(_cb) {
    pseudocodeOfDFS(this._root, _cb);
  }
}

export class SparseGraph extends Graph {
  _adjLists;

  constructor(_root, _adjLists) {
    super(_root);
    this._adjLists = _adjLists;
  }

  addEdge(_from, _to) {
    this._adjLists[_from].push(_to);
  }
}

export class DenseGraph extends Graph {
  _adjMatrix;
}
