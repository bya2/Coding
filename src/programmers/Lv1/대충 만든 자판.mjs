export const solution = (keymap = [""], targets = [""]) => {
  const dict = {};

  for (const keys of keymap) {
    for (let i = 0; i < keys.length; ++i) {
      if (typeof dict[keys[i]] === "undefined") dict[keys[i]] = i;
      else if (dict[keys[i]] > i) dict[keys[i]] = i;
    }
  }

  return targets.map((tg) => {
    const sum = [...tg].reduce((acc, c) => acc + dict[c] + 1, 0);
    return Number.isNaN(sum) ? -1 : sum;
  });
};

export const examples__arr = [
  {
    keymap: ["ABACD", "BCEFD"],
    targets: ["ABCD", "AABB"],
    answer: [9, 4],
  },
  {
    keymap: ["AA"],
    targets: ["B"],
    answer: [-1],
  },
  {
    keymap: ["AGZ", "BSSS"],
    targets: ["ASA", "BGZ"],
    answer: [4, 6],
  },
];
