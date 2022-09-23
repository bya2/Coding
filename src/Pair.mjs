import { ArrayStack } from "./ArrayList.mjs";

export class Pair {
  data;

  constructor(data) {
    this.data = data;
  }

  // 괄호 회전
  isValid(list = []) {
    const { data: pairs } = this;

    const arrayStack = new ArrayStack();

    for (let i = 0, len = list.length; i < len; ++i) {
      const element = list[i];

      if (typeof pairs[element] === "undefined") arrayStack.push(element);
      else {
        if (arrayStack.peek !== pairs[element]) return false;
        arrayStack.pop();
      }
    }

    if (!arrayStack.isEmpty()) return false;
    return true;
  }

  numberOfValidCase(list = []) {
    const { isValid } = this;

    let cases = 0;
    for (let i = 0, len = list.length; i < len; ++i) {
      isValid(list) && ++cases;
      list.push(list.shift());
    }

    return cases;
  }
}
