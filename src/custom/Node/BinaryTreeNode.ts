import TreeNode from "./TreeNode";

export default class BinaryTreeNode<D = any> extends TreeNode<D> {
  #children: [BinaryTreeNode<D> | null, BinaryTreeNode<D> | null] = [null, null];

  constructor(data: D) {
    super(data);
  }

  get children() {
    return this.#children;
  }

  set children(input) {
    this.#children = input;
  }

  get left() {
    return this.#children[0];
  }

  set left(input) {
    this.#children[0] = input;
  }

  get right() {
    return this.#children[1];
  }

  set right(input) {
    this.#children[1] = input;
  }

  PreOrderTraversal() {
    
  }
}
