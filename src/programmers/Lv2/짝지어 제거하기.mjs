export const solution = (s) => {
  let stack = [];

  for (let i = 0; i < s.length; ++i) {
    if (!stack.length || stack[stack.length - 1] !== s[i]) {
      stack.push(s[i]);
      console.log(stack, "PUSH");
    } else {
      stack.pop();
      console.log(stack, "POP");
    }
  }

  return stack.length === 0 ? 1 : 0;
};

export const examples__arr = [
  {
    s: "baabaa",
    answer: 1,
  },
  {
    s: "cdcd",
    answer: 0,
  },
];

//풀이
//1.하나씩 접근
//2.다음 문자가 있고, 같다면 같이 삭제
//3.첫 문자열부터 다시 시작
//4.
