/**
 * @param {string[]} inputs
 */
export const solution = (inputs) => {
  let count = 0;

  const recursion = (s, l, r) => {
    count++;
    if (l >= r) return 1;
    else if (s[l] !== s[r]) return 0;
    else return recursion(s, l + 1, r - 1);
  };

  const isPalindrome = (s) => {
    return recursion(s, 0, s.length - 1);
  };

  return inputs
    .slice(1)
    .map((w) => {
      const p = isPalindrome(w);
      const tmp = count;
      count = 0;
      return `${p} ${tmp}`;
    })
    .join("\n");
};

export const examples = [
  {
    inputs: `5
    AAA
    ABBA
    ABABA
    ABCA
    PALINDROME`,
    answer: `1 2
    1 3
    1 3
    0 2
    0 1`,
  },
];
