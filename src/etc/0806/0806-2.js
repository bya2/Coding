export const solution = (s) => {
  const s_len__num = s.length;

  let answer = 0;

  for (let i = 2; i <= s_len__num; i += 2) {
    const pos_idx = s_len__num - i + 1;

    for (let j = 0; j < pos_idx; ++j) {
      const move = s.slice(j, i + j);
      const pos = [0, 0];

      for (let k = 0; k <= i; ++k) {
        if (move[k] === "U") ++pos[0];
        else if (move[k] === "D") --pos[0];
        else if (move[k] === "L") ++pos[1];
        else if (move[k] === "R") --pos[1];
      }

      if (pos[0] === 0 && pos[1] === 0) {
        ++answer;
      }
    }
  }

  return answer;
};

export const examples__arr = [
  {
    s: "URLLDRLR",
    answer: 5,
  },
  {
    s: "RLDU",
    answer: 3,
  },
  {
    s: "URDLDRULDLRUDLU",
    answer: 14,
  },
];
