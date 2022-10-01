export const solution = (n, t, m, p) => {
  const tubeTurn = Array.from({ length: t }, (_, i) => i * m + p - 1);

  let line = "";
  let max = m * t;
  for (let i = 0; line.length <= max; ++i) {
    line += i.toString(n);
  }

  return tubeTurn
    .map((x) => line[x])
    .join("")
    .toUpperCase();
};

export const solution2 = (n, t, m, p) => {
  let res = "";
  let num = 0;
  let seq = "";

  // for (let i = 0; )

  while (res.length < t) {
    if (seq.length >= m) {
      res += seq[p - 1];
      seq = seq.slice(m);
    } else {
      seq += num.toString(n).toUpperCase();
      num++;
    }
  }
  return res;
};

export const other_solution = (radix, numberOfTarget, totalNumber, order, isIndex = false) => {
  if (!isIndex) {
    order--;
  }

  let s = "";
  let num = 0;
  let convert = "";

  let end = numberOfTarget * totalNumber;

  while (convert.length < end) {
    convert += num.toString(radix).toUpperCase();
    ++num;
  }

  for (let i = order; i < end; i += totalNumber) {
    s += convert[i];
  }

  return s;
};

// n진법, t숫자갯수, m인원, p튜브순서

export const examples__arr = [
  {
    n: 2,
    t: 4,
    m: 2,
    p: 1,
    answer: "0111",
  },
  {
    n: 16,
    t: 16,
    m: 2,
    p: 1,
    answer: "02468ACE11111111",
  },
  {
    n: 16,
    t: 16,
    m: 2,
    p: 2,
    answer: "13579BDF01234567",
  },
];
