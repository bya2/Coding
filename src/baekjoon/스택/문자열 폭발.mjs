// 일치해야할 모든 문자를 검사x
// 검사중인 인덱스에 해당하는 문자가 일치해야할 첫문자나 끝문자와 같다면, 모든 문자를 검사

export const solution = (inputs = [""]) => {
  const [S, B] = inputs;
  const STACK = [];
  const bLen = B.length;

  for (let i = 0, flag = false; i < S.length; ++i, flag = false) {
    const char = S[i];
    const bTail = B[bLen - 1];

    if (char === bTail) {
      for (let j = 0; j < bLen - 1; ++j) {
        if (STACK[STACK.length - 1 - j] === B[bLen - 2 - j]) continue;
        flag = true;
        break;
      }

      if (flag) STACK.push(char);
      else {
        for (let k = 0; k < bLen - 1; ++k) {
          STACK.pop();
        }
      }
    } else {
      STACK.push(char);
    }
  }

  return STACK.length ? STACK.join("") : "FRULA";
};

export const examples = [
  {
    inputs: `mirkovC4nizCC44
    C4`,
    answer: `mirkovniz`,
  },
];
