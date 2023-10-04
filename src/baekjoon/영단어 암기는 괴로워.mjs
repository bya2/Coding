/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const [n, m] = lines.shift().split(" ").map(Number);

  const dict = lines
    .filter((s) => s.length >= m)
    .reduce((obj, t) => (obj[t] ? obj[t]++ : (obj[t] = 1), obj), {});

  const K = Object.keys(dict);
  const V = Object.values(dict);

  K.sort((a, b) => {
    if (dict[a] < dict[b]) return 1;
    else if (dict[a] > dict[b]) return -1;

    if (a.length < b.length) return 1;
    else if (a.length > b.length) return -1;

    if (a < b) return -1;
    else if (a > b) return 1;

    return 0;
  });

  return K.join("\n");
};

export const examples = [
  {
    inputs: `7 4
    apple
    ant
    sand
    apple
    append
    sand
    sand`,
    answer: `sand
    apple
    append`,
  },
];
