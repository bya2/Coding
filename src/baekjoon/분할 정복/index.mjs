export class SquareNode {
  constructor(x, y, length, ones) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.ones = ones;
    this.children = [];
  }

  contains(point) {
    return (
      point.x >= this.x &&
      point.x < this.x + this.length &&
      point.y >= this.y &&
      point.y < this.y + this.length
    );
  }

  isLeaf() {
    return (this.children.length = 0);
  }

  countOnes(data) {
    let count = 0;
    for (let i = this.x; i < this.x + this.length; ++i) {
      for (let j = this.y; j < this.y + this.length; ++j) {
        if (data[i][j]) ++count;
      }
    }
    return count;
  }

  subdivide() {
    const subLength = Math.floor(this.length / 2);
    const nX = this.x;
    const wY = this.y;
    const sX = nX + subLength;
    const eY = wY + subLength;

    const nw = new SquareNode(nX, wY, subLength);
    const ne = new SquareNode(nX, eY, subLength);
    const sw = new SquareNode(sX, wY, subLength);
    const se = new SquareNode(sX, eY, subLength);
  }
}

class SquareQuadTreeNode {
  constructor(x, y, length, level) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.level = level;
    this.children = [];
  }

  count(node) {}

  subdivide() {}
}

class SquareQuadTree {
  count() {}
}

export default SquareQuadTree;
