import Deque from "./logic.mjs";

export const solution = (inputs = [""]) => {
  const results = [];
  const deque = new Deque();
  let dirFlag = true;

  const oper = {
    R: () => {
      dirFlag = !dirFlag;
      return true;
    },
    D: () => {
      if (!deque.head) return false;
      dirFlag ? deque.shift() : deque.pop();
      return true;
    },
  };

  const n = +inputs.shift() * 3;
  for (let i = 0; i < n; i += 3, deque.clear(), dirFlag = true) {
    const arr = inputs[i + 2].substring(1, inputs[i + 2].length - 1).split(",");
    if (arr[0] === "") arr.pop();
    let result;
    let errFlag = true;

    for (const e of arr) deque.push(e);

    for (const cmd of [...inputs[i]]) {
      if (!oper[cmd]()) {
        errFlag = false;
        break;
      }
    }

    if (errFlag) {
      let que = [...deque];
      if (!dirFlag) que = que.reverse();
      result = "[" + que.join(",") + "]";
    } else {
      result = "error";
    }

    results.push(result);
  }

  return results.join("\n");
};

export const examples = [
  {
    inputs: `4
    RDD
    4
    [1,2,3,4]
    DD
    1
    [42]
    RRD
    6
    [1,1,2,3,5,8]
    D
    0
    []`,
    answer: `[2,1]
    error
    [1,2,3,5,8]
    error`,
  },
];
