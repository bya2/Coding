export const solution = (s = "") => {
  // 연산자, 피연산자 분리
  // 연산자 조합
  // 계산, 비교
  const exps = s.match(/\d+|[\+\-\*]/g).map((w) => (Number.isNaN(+w) ? w : +w));

  const dict = {};
  const originalVisitDict = {};
  for (let i = 1, len = exps.length; i < len; i += 2) {
    const tg = exps[i];
    if (dict[tg]) {
      ++dict[tg];
    } else {
      dict[tg] = 1;
      originalVisitDict[tg] = false;
    }
  }

  const operators = Object.keys(dict);
  const n = operators.length;
  const combinations = [];

  const getCombinations = (acc = [], v) => {
    if (acc.length === n) {
      combinations.push(acc.join(""));
      return;
    }

    for (let oper of operators) {
      if (!v[oper]) {
        getCombinations([...acc, oper], { ...v, [oper]: true });
      }
    }
  };

  getCombinations([], originalVisitDict);

  let maximum = 0;
  for (let seq of combinations) {
    let value = calc([...exps], seq, { ...dict });
    if (maximum < value) {
      maximum = value;
    }
  }

  return maximum;
};

const calc = (arr = [], seq = "", dict) => {
  for (let i = 0; i < seq.length; ++i) {
    const oper = seq[i];

    for (let j = 1; j < arr.length; ) {
      if (arr[j] === oper) {
        const a = +arr[j - 1];
        const b = +arr[j + 1];

        switch (oper) {
          case "+":
            arr.splice(j - 1, 3, a + b);
            break;
          case "-":
            arr.splice(j - 1, 3, a - b);
            break;
          case "*":
            arr.splice(j - 1, 3, a * b);
            break;
        }

        if (--dict[oper] === 0) break;
        continue;
      }
      j += 2;
    }
  }

  return Math.abs(arr[0]);
};

export const examples__arr = [
  {
    expression: "100-200*300-500+20",
    answer: 60420,
  },
  {
    expression: "50*6-3*2",
    answer: 300,
  },
];
