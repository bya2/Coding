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
  _adjListDir;

  constructor(_root, _adjListDir = {}) {
    super(_root);
    this._adjListDir = _adjListDir;
  }

  addNode(_node) {
    this._adjListDir[_node.id] ??= [];
  }

  hasNode(_node) {
    this._adjListDir.hasOwnProperty(_node.id);
  }

  addEdge(_from, _to) {
    this._adjListDir[_from.id].push(_to.id);
  }

  hasEdge(_from, _to) {
    return this._adjListDir[_from.ud].includes(_to.id);
  }

  removeEdge(_from, _to) {
    // No need.
  }
}

export class DenseGraph extends Graph {
  _adjMatrix;

  constructor(_root, _adjMatrix = []) {
    super(_root);
    this._adjMatrix = _adjMatrix;
  }

  addNode() {
    this._adjMatrix
  }

  addEdge() {

  }
}
