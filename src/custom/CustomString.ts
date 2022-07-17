interface CustomStringInterface {
  _s: string;
  extractSpecificRange: (sIdx: number, eIdx: number) => string;
  removeSpecificRange: (sIdx: number, eIdx: number) => string;
}

const ERR_MSG__INDEX = "problem index";

export default class CustomString implements CustomStringInterface {
  _s: string;

  constructor(_s: string) {
    this._s = _s;
  }

  get data() {
    return this._s;
  }

  get length() {
    return this._s.length;
  }

  checkIndex(i: number, j: number) {
    return i <= j || (j < 0 && i <= this._s.length + j);
  }

  extractSpecificRange(sIdx: number, eIdx: number): string {
    if (!this.checkIndex(sIdx, eIdx)) throw new Error(ERR_MSG__INDEX);
    this._s = this._s.substring(sIdx, eIdx - sIdx + 1);
    return this._s;
  }

  removeSpecificRange(sIdx: number, eIdx: number) {
    if (!this.checkIndex(sIdx, eIdx)) throw new Error(ERR_MSG__INDEX);
    this._s = this._s.substring(0, sIdx) + this._s.substring(eIdx, +1);
    return this._s;
  }
}
