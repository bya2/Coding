// ※ 조합식
// n개중에 r개를 뽑는 조합
// nCr = nPr/r! = n!/(r!(n-r)!)

/**
 * @param {string[]} lines
 */
export const solution = (lines) => {
  const M = +lines[0].split(" ")[1];
  const nums = lines[1].split(" ").map(Number);

  const accUpTo = [0];
  const countOfMod = new Array(M).fill(0);
  let count = 0;
  for (let i = 0; i < nums.length; ++i) {
    const r = (accUpTo[i] + nums[i]) % M;
    accUpTo.push(r);
    countOfMod[r]++;
    if (r === 0) count++;
  }

  console.log(count, countOfMod);

  for (let i = 0; i < M; ++i) {
    count += (countOfMod[i] * (countOfMod[i] - 1)) / 2;
  }

  return count + "";
};

export const fail = (lines) => {
  const M = +lines[0].split(" ")[1];
  const nums = lines[1].split(" ").map(Number);

  const accUpTo = [0];
  for (let i = 0; i < nums.length; ++i) accUpTo.push(accUpTo[i] + nums[i]);

  let count = 0;
  for (let i = 1; i <= nums.length; ++i) {
    if (accUpTo[i] < M) continue;
    for (let j = 0; j <= i; ++j) {
      const sum = accUpTo[i] - accUpTo[j];
      if (sum < M) break;
      if (sum % M === 0) ++count;
    }
  }

  return count + "";
};

export const examples = [
  {
    inputs: `5 3
    1 2 3 1 2`,
    answer: `7`,
  },
];
