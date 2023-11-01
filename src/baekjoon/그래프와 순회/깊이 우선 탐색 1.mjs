const memoize = (fn) => {
  const cache = {};
  return (arg) => {
    const k = JSON.stringify(arg);
    if (!(k in cache)) cache[k] = fn(arg);
    return cache[arg];
  };
};

/**
 * @param {any[]} V 정점 집합
 * @param {Map<any, any[]>} E 간선 집합
 * @param {any[]} R 시작 정점
 */
const DFS = (V, E, R) => {
  const map = new Map();

  const recur = (node) => {
    if (!map.has(node)) {
      return;
    }


  };

  return recur(R);
};

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {};

export const examples = [
  {
    inputs: `5 5 1
    1 4
    1 2
    2 3
    2 4
    3 4`,
    answer: `1
    2
    3
    4
    0`,
  },
];
