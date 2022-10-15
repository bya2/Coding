export default class Bracket extends String {
  /**
   *
   * @param _pairs
   * @returns
   */
  isEnclose(
    _pairs: { [key: string]: string } = {
      "]": "[",
      ")": "(",
      "}": "{",
    }
  ) {
    const stack: string[] = [];
    for (let i = 0, len = this.length; i < len; ++i) {
      if (typeof _pairs === "undefined") {
        stack.push(_pairs[this[i]]);
      } else {
        if (stack[stack.length - 1] !== _pairs[this[i]]) return false;
        stack.pop();
      }
    }

    return stack.length === 0;
  }

  /**
   *
   * @param char
   * @returns index
   */
  findBalanceIndex(char: string) {
    let balance = 0;
    let index = 0;

    do {
      balance += this[index++] === char ? 1 : -1;
    } while (balance !== 0);

    return index;
  }

  /**
   * 
   * @param open 
   * @param close 
   * @returns 
   */
  modify(open: string, close: string): string {
    const cb = (w = ""): string => {
      if (w.length === 0) return w;

      let sliceIndex = this.findBalanceIndex.call(w, "(");
      let u = w.slice(0, sliceIndex);
      let v = cb(w.slice(sliceIndex));

      if (u[0] === open && u[u.length - 1] === close) {
        return u + v;
      } else {
        return "(" + v + ")" + [...u.slice(1, u.length - 1)].map((v) => (v === open ? close : open));
      }
    };

    return cb(String(this));
  }
}
