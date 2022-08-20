export const solution = (s) => {
  let N = s.length;
  let opened = 0;

  for (let i = 0; i < N; ++i) {
    if (s[i] === "(") {
      ++opened;
    } else {
      --opened;
      if (opened === -1) return false;
    }
  }

  return opened === 0;
};

export const examples__arr = [
  {
    s: "()()",
    answer: true,
  },
  {
    s: "(())()",
    answer: true,
  },
  {
    s: ")()(",
    answer: false,
  },
  {
    s: "(()(",
    answer: false,
  },
];
