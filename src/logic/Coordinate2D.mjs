export default class Coord2D {
  x = 0;
  y = 0;
  limit;
  keys;

  constructor({ keys = ["U", "D", "R", "L"], limit = Infinity }) {
    this.keys = keys;
    this.limit = limit;
  }

  createGenerateKey(coord1, coord2) {
    return `${coord1.x}${coord1.y}${coord2.x}${coord2.y}`;
  }

  getPaths(dirs = []) {
    const pathSet = new Set();

    for (let dir of dirs) {
      const prev = { x: this.x, y: this.y };
      if (!this.move(dir)) continue;
      const now = { x: this.x, y: this.y };
      pathSet.add(this.createGenerateKey(prev, now));
      pathSet.add(this.createGenerateKey(now, prev));
    }

    return pathSet;
  }

  move(dir) {
    const { limit, keys } = this;

    switch (dir) {
      case keys[0]:
        if (this.y < limit) {
          ++this.y;
          return true;
        }
        break;
      case keys[1]:
        if (this.y > -limit) {
          --this.y;
          return true;
        }
        break;
      case keys[2]:
        if (this.x < limit) {
          ++this.x;
          return true;
        }
        break;
      case keys[3]:
        if (this.x > -limit) {
          --this.x;
          return true;
        }
        break;
      default:
        throw new Error("Not direction key.");
    }
    return false;
  }
}
