/**
 * @param {number[]} arr
 */
export const re = (arr) => {
  Object.defineProperty(Array.prototype, "peek", {
    get: function () {
      return this[this.length - 1];
    },
  });

  const stack = [arr[0]];
  for (let i = 1; i < arr.length; ++i) {
    if (stack.peek !== arr[i]) {
      stack.push(arr[i]);
    }
  }

  return stack;
};

export const 연속된_중복_제거 = (...args) => {
  return args.filter((arg, i) => arg !== args[--i]);
  // return args.filter((arg, i) => {
  //   console.log(i, args[i]);
  //   const r = arg !== args[--i];
  //   console.log(i, args[i], "\n");
  //   return r;
  // })
};

export const other_solution = (arr) => {
  return 연속된_중복_제거(...arr);
};

export const solution = (arr) => {
  const len = arr.length;

  let list = [0];
  let curr = arr[0];

  for (let i = 1; i < len; ++i) {
    if (curr !== arr[i]) {
      curr = arr[i];
      list.push(i);
    }
  }

  return list.map((el) => {
    return arr[el];
  });
};

export const examples__arr = [
  {
    arr: [1, 1, 3, 3, 0, 1, 1],
    answer: [1, 3, 0, 1],
  },
  {
    arr: [4, 4, 4, 3, 3],
    answer: [4, 3],
  },
];
