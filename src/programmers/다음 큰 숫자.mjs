export const solution1 = (n = 1) => {
  const N = numberOfBinaryOnes(n);
  for (let x = n + 1; true; ++x) {
    if (N === numberOfBinaryOnes(x)) return x;
  }
};

export const solution = (n) => {
  let 쉬프트횟수 = 0, 일의갯수 = 0;
  console.log(n, "\t", n.toString(2));

  console.log();

  // 1을 찾을 때까지 우로 쉬프트 (쉬프트 횟수: i)
  for (; !(n & 1); ++쉬프트횟수) {
    n = n >> 1;
    console.log(n, `${쉬프트횟수} ${일의갯수}\t`, n.toString(2));

  }

  console.log()

  // 0을 찾을 때까지 우로 쉬프트 (1의 갯수: j)
  for (; n & 1; ++쉬프트횟수, ++일의갯수) {
    n = n >> 1;
    console.log(n, `${쉬프트횟수} ${일의갯수}\t`, n.toString(2));


  }

  console.log()

  // 0자리에 1대입, 1의 갯수 -1, i === j 가 될때까지 죄로 쉬프트하면서 쉬프트 횟수 -1
  for (일의갯수--, n++; 쉬프트횟수 !== 일의갯수; --쉬프트횟수) {
    n = n << 1;
    console.log(n, `${쉬프트횟수} ${일의갯수}\t`, n.toString(2));

  }

  console.log();

  // 0이 될 때까지 좌로 쉬프트하면서 쉬프트 횟수가 -1이면 0자리에 1 대입
  for (; 쉬프트횟수; 쉬프트횟수--, n++) {
    n = n << 1;
    console.log(n, `${쉬프트횟수} ${일의갯수}\t`, n.toString(2));


  }

  return n;
};

export const numberOfBinaryOnes = (n) => {
  return n.toString(2).match(/1/g).length;
};

export const numberOfBinaryOne = (n) => {
  let ones = 0;
  let bits = n.toString(2);
  for (let bit of bits) {
    if (bit === "1") ++ones;
  }
  return ones;
};

export const examples__arr = [
  {
    n: 78,
    answer: 83,
  },
  {
    n: 15,
    answer: 23,
  },
  {
    n: 655395,
    answer: 655397,
  },
];
