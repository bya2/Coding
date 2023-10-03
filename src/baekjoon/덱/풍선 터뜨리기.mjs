import DLL from "./DLL.mjs";

Array.prototype.toDLL = function () {
  const deq = new DLL();
  for (let i = 0; i < this.length; ++i)
    deq.push({
      i: i + 1,
      n: this[i],
    });
  return deq;
};

DLL.prototype.popAt = function (index) {
  if (index < 0) index += this._length;
  if (index < 0 || index >= this._length) return undefined;
  if (index === 0) return this.shift();

  const prev = this._at(index - 1);
  const curr = prev.next;
  const next = curr.next;

  const v = curr._inner;

  prev.next = next;
  curr.next = null;

  this._length--;

  return v;
};

// DLL.prototype.print = function () {
//   return (
//     "[ " +
//     this.toArray()
//       .map((obj) => obj.n)
//       .join(" <=> ") +
//     " ]"
//   );
// };

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const result = [];

  const deq = lines[1].split(" ").map(Number).toDLL();
  let node = deq.shift();
  result.push(node.i);

  while (deq.length) {
    if (node.n > 0) {
      for (let i = 0; i < node.n - 1; ++i) {
        deq.push(deq.shift());
      }
    }

    if (node.n < 0) {
      for (let i = 0; i > node.n; --i) {
        deq.unshift(deq.pop());
      }
    }

    node = deq.shift();
    result.push(node.i);
  }

  return result.join(" ");
};

export const examples = [
  {
    inputs: `5
    3 2 1 -3 -1`,
    answer: `1 4 5 3 2`,
  },
];
