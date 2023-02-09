class QuadTree {
  constructor(boundary, capacity) {
    this.boundary = boundary;
    this.capacity = capacity;
    this.points = [];
    this.divided = false;
  }

  insert(point) {
    if (!this.boundary.contains(point)) {
      return false;
    }

    if (this.points.length < this.capacity) {
      this.points.push(point);
      return true;
    }

    if (!this.divided) {
      this.subdivide();
    }

    return (
      this.northwest.insert(point) ||
      this.northeast.insert(point) ||
      this.southwest.insert(point) ||
      this.southeast.insert(point)
    );
  }

  subdivide() {
    let x = this.boundary.x;
    let y = this.boundary.y;
    let w = this.boundary.w;
    let h = this.boundary.h;

    let ne = new Rectangle(x + w / 2, y - h / 2, w / 2, h / 2);
    this.northeast = new QuadTree(ne, this.capacity);
    let nw = new Rectangle(x - w / 2, y - h / 2, w / 2, h / 2);
    this.northwest = new QuadTree(nw, this.capacity);
    let se = new Rectangle(x + w / 2, y + h / 2, w / 2, h / 2);
    this.southeast = new QuadTree(se, this.capacity);
    let sw = new Rectangle(x - w / 2, y + h / 2, w / 2, h / 2);
    this.southwest = new QuadTree(sw, this.capacity);

    this.divided = true;
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  contains(point) {
    return (
      point.x >= this.x - this.w &&
      point.x <= this.x + this.w &&
      point.y >= this.y - this.h &&
      point.y <= this.y + this.h
    );
  }
}

function countRectangles(grid) {
  const [rows, columns] = [grid.length, grid[0].length];
  let qt = new QuadTree(new Rectangle(0, 0, rows, columns), 1);
  let count = 0;

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      if (grid[i][j] === 1) {
        let point = new Point(i, j);
        qt.insert(point);
      }
    }
  }
}

export const solution = (inputs = [""]) => {
  inputs.shift();
  inputs = inputs.map((input) => input.split(" ").map(Number));

  let white = 0;
  let black = 0;

  function divide(row, col, length) {
    let count = 0;
    for (let i = row; i < row + length; ++i) {
      for (let j = col; j < col + length; ++j) {
        if (inputs[i][j]) count++;
      }
    }

    if (count === 0) white++;
    else if (count === length ** 2) black++;
    else {
      const mid = length / 2;
      divide(row, col, mid);
      divide(row, col + mid, mid);
      divide(row + mid, col, mid);
      divide(row + mid, col + mid, mid);
    }
  }

  divide(0, 0, inputs.length);
  return white + "\n" + black;
};

export const examples = [
  {
    inputs: `8
    1 1 0 0 0 0 1 1
    1 1 0 0 0 0 1 1
    0 0 0 0 1 1 0 0
    0 0 0 0 1 1 0 0
    1 0 0 0 1 1 1 1
    0 1 0 0 1 1 1 1
    0 0 1 1 1 1 1 1
    0 0 1 1 1 1 1 1`,
    answer: `9
    7`,
  },
];
