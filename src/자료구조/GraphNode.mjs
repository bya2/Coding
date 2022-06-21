export default class GraphNode {
  _data;
  _adjacent = [];
  _visited = false;

  constructor(_data) {
    this._data = _data;
    this._adjacent = [];
    this._visited = false;
  }

  get data() {
    return this._data;
  }

  get adjacent() {
    return this._adjacent;
  }

  get visited() {
    return this._visited;
  }

  set data(_data) {
    this._data = _data;
  }

  set visited(_bool) {
    this._visited = _bool;
  }
}