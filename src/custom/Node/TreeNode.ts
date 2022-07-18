import Node from ".";

export default class TreeNode<D = any> extends Node<D> {
  parent: string | TreeNode<D> | null;
  #children: TreeNode[];

  constructor(data: D, parent: any = null, children = []) {
    super(data);
    this.parent = parent;
    this.#children = children;
  }

  get children() {
    return this.#children;
  }

  set children(nodes) {
    this.#children = nodes;
  }

  get depth(): number {
    // 루트에서부터 노드에 도달하기 위한 간선의 수
    let num = 0;
    let node = this;
    while (!node.isRoot()) {
      ++num;
      node = node.parent;
    }
    return num;
  }

  get degree() {
    // 차수(하위 트리 수 / 간선 수)
    return this.#children.length;
  }

  isRoot() {
    return !!this.parent;
  }

  isLeaf() {
    return this.#children.length === 0;
  }
}

class Tree<D> {
  root: string | TreeNode<D>;
  readonly _nodes: (string | TreeNode<D>)[];
  _height: number;

  getHeight() {
    // 가장 깊은 리프의 깊이 (루트와 가장 깊은 리프 사이의 간선의 수)
  }

  getLevel(level: number) {
    // 특정 깊이의 노드 집합
    if (level === 0) {
      return this.root;
    }
  }

  traversePreOrder(node: TreeNode<D>, cb: Function) {

    if (node) {
      this.mark(node, cb);
      this.traversePreOrder(node.left);
      this.traversePreOrder(node.right);
    }
  }

  traverseInOrder(cb: Function) {}

  traversePostOrder(cb: Function) {}
}
