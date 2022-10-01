import Arr from "./Array.mjs";

export default class ArrBTree extends Arr {
  static indexOfParent(idxOfC) {
    return (idxOfC / 2) >> 0;
  }

  static indexOfLeftChild(idxOfP) {
    return idxOfP * 2;
  }

  static indexOfRightChild(idxOfP) {
    return idxOfP * 2 + 1;
  }

  static indexesOfChildren(idxOfP) {
    return [idxOfP * 2, idxOfP * 2 + 1];
  }
}
