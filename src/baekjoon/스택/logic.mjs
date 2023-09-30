const ERR_UNDEFINED = "";

const pairDictOfVPS = {
  "]": "[",
  ")": "(",
  "}": "{",
};

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
      if (STACK[STACK.length - 1] !== pairDict[c]) return false;
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
