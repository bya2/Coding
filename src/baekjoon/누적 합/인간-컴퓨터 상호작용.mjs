Object.defineProperties(Array.prototype, {
  print: {
    value(arr = this) {
      const outputs = [];
      for (let i = 0; i < arr.length; ++i) {
        outputs.push(`${i}:\t${arr[i]}`);
      }
      console.log(outputs.join("\n"));
    },
  },
});

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const [S, _, ...inputs] = lines;
  const codes = [...S].map((e) => e.charCodeAt(0) - 97);

  const dp = Array.from({ length: S.length + 1 }, () => new Array(26).fill(0));

  // i: 입력된 문자열i
  // j: 알파벳 현황i

  for (let si = 1; si <= S.length; ++si) {
    for (let ai = 0; ai < 26; ++ai) {
      dp[si][ai] = dp[si - 1][ai];
    }
    dp[si][codes[si - 1]]++;
  }

  return inputs
    .map((input) => {
      let [c, a, b] = input.split(" ");
      a = +a;
      b = +b;
      const ci = c.charCodeAt(0) - 97;

      console.log(`${c} -> ${a}~${b} -> ${dp[a][ci]}, ${dp[b + 1][ci]}`);
      return dp[b + 1][ci] - dp[a][ci];
    })
    .join("\n");
};

/**
 * @param {string[]} lines
 */
export const fail2 = (lines) => {
  const s = lines.shift();
  lines.shift();

  const codes = s.split("").map((e) => e.charCodeAt(0) - 97);
  const dp = new Array(s.length + 1).map((_) => new Array(27).fill(0));

  for (let i = 1; i <= codes.length; ++i) {
    const code = codes[i];
    for (let j = 1; j <= 26; ++j) {
      dp[i][j] = dp[i - 1][j];
    }
    dp[i][code]++;
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
