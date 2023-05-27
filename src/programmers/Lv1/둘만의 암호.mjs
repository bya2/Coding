export const solution = (s = "", skip = "", index = 1) => {
  const skipped = [...skip].reduce((obj, t) => ((obj[t] = 1), obj), {});
  let alphabets = [..."abcdefghijklmnopqrstuvwxyz"].reduce(
    (arr, t) => (!skipped[t] && arr.push(t), arr),
    []
  );
  const dict = alphabets.reduce((obj, t, i) => ((obj[t] = i), obj), {});
  return [...s]
    .map((c) => {
      let i = dict[c] + index;
      if (i >= alphabets.length) i %= alphabets.length;
      return alphabets[i];
    })
    .join("");
};

export const examples__arr = [
  {
    s: "aukks",
    skip: "wbqd",
    index: 5,
    answer: "happy",
  },
];
