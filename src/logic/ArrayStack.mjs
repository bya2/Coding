import Arr from "./Array.mjs";

export default class ArrStack extends Arr {
  get peek() {
    return this[this.length - 1];
  }
}