/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  lines.shift();

  const dict = {
    ChongChong: 1,
  };

  let count = 1;

  for (const line of lines) {
    const [a, b] = line.split(" ");

    if (dict[a] && !dict[b]) {
      dict[b] = 1;
      count++;
    }

    if (dict[b] && !dict[a]) {
      dict[a] = 1;
      count++;
    }
  }

  return count + "";
};

export const examples = [
  {
    inputs: `12
    bnb2011 chansol
    chansol chogahui05
    chogahui05 jthis
    jthis ChongChong
    jthis jyheo98
    jyheo98 lms0806
    lms0806 pichulia
    pichulia pjshwa
    pjshwa r4pidstart
    r4pidstart swoon
    swoon tony9402
    tony9402 bnb2011`,
    answer: `10`,
  },
];
