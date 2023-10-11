/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const s = lines.shift();
  lines.shift();

  const codes = s.split("").map((e) => e.charCodeAt(0) - 97);
  const dp = new Array(s.length + 1).map((_) => new Array(27).fill(0));

  for (let i = 1; i <= codes.length; ++i) {
    for (let j = 1; j <= 26; ++j) {
      dp[i][j] = dp[i - 1][j];
    }
    dp[i][codes[i]]++;
  }

  console.log(dp);

  return lines
    .map((line) => {
      const [char, i, j] = line.split(" ");
      const code = char.charCodeAt(0) - 97;
      return dp[i][code] - dp[j - 1][code];
    })
    .join("\n");
};

/**
 * TYPE ERROR
 * @param {string[]} lines
 */
export const fail = (lines) => {
  const s = lines.shift();
  lines.shift();

  const cache = s.split("").reduce((obj, t, i) => {
    if (!obj[t]) obj[t] = [];
    obj[t].push(i);
    return obj;
  }, {});

  return lines
    .map((line) => {
      let [char, i, j] = line.split(" ");
      i = +i;
      j = +j;
      let count = 0;
      for (const k of cache[char]) {
        if (k >= i && k <= j) ++count;
        if (k > j) break;
      }
      return count;
    })
    .join("\n");
};

export const examples = [
  {
    inputs: `seungjaehwang
    4
    a 0 5
    a 0 6
    a 6 10
    a 7 10`,
    answer: `0
    1
    2
    1`,
  },
];
