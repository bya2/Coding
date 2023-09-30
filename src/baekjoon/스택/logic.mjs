const ERR_UNDEFINED = "";

const pairDictOfVPS = {
  "]": "[",
  ")": "(",
  "}": "{",
};

Object.defineProperties(Array.prototype, {
  peek: {
    get() {
      return this[this.length - 1];
    },
  },
});

/**
 * @param {string[] | string} ps Parenthesis String
 */
export const isVPS = function (ps = this, pairDict = pairDictOfVPS) {
  if (!ps) throw new Error(ERR_UNDEFINED);
  if (typeof ps === "string") ps = ps.split("");

  const STACK = [];

  for (const c of ps) {
    if (pairDict[c] === undefined) STACK.push(c);
    else {
      if (STACK.peek !== pairDict[c]) return false;
      STACK.pop();
    }
  }

  return STACK.length === 0;
};

/**
 * @param {string[] | string} sentence
 */
export const isEnclosed = function (sentence = this, pairDict = pairDictOfVPS) {
  if (!sentence) throw new Error(ERR_UNDEFINED);
  if (typeof sentence === "string") sentence = sentence.split("");

  const STACK = [];
  const opens = Object.values(pairDictOfVPS);
  const closes = Object.keys(pairDictOfVPS);

  for (const c of sentence) {
    if (opens.includes(c)) STACK.push(c);
    else if (closes.includes(c) && STACK.pop() !== pairDict[c]) return false;
  }

  return STACK.length === 0;
};

/**
 * @param {number[]} numbers
 * FAIL: 1 3 4 5 2
 */
export const canBeSorted = function (numbers = this) {
  if (numbers === undefined) throw new Error(ERR_UNDEFINED);

  const STACK = [];
  let v = 1;

  for (const n of numbers) {
    while (STACK.length && STACK.peek === v) {
      STACK.pop();
      ++v;
    }

    if (n === v) ++v;
    else if (STACK.length && STACK.peek < n) return false;
    else STACK.push(n);
  }

  return true;
};
