/**
 * @param {number} k 차수
 * @param {number} d 최대 거리
 */
export const solution = (k, d) => {
  let count = 0;
  for (let i = 0; i <= d; i += k) {
    const j = Math.sqrt(d ** 2 - i ** 2) >> 0;
    count += ~~(j / k) + 1;
  }
  return count;
};

/**
 * TIME EXCEED
 * @param {number} k 차수
 * @param {number} d 최대 거리
 */
export const fail_solution = (k, d) => {
  let count = 0;
  let dd = d ** 2;

  function combine() {
    const combinations = [];
    const visited = this.reduce((obj, t) => ((obj[t] = false), obj), {});

    const searchDepthFirst = (acc = [], dict) => {
      if (acc.length === 2) {
        if (acc[0] ** 2 + acc[1] ** 2 <= dd) count++;
        return;
      }

      for (const char of this) {
        if (!dict[char]) {
          searchDepthFirst([...acc, char], { ...dict, [char]: true });
        }
      }
    };

    searchDepthFirst([], { ...visited });
    return combinations;
  }

  const list = [];
  for (let i = 0; i <= d; i += k) {
    list.push(i);
    if (i ** 2 * 2 <= dd) count++;
  }
  combine.call(list);
  return count;
};

export const examples__arr = [
  {
    k: 2,
    d: 4,
    answer: 6,
  },
  {
    k: 1,
    d: 5,
    answer: 26,
  },
];
