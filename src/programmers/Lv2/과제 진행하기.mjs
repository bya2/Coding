Array.prototype.peek = function () {
  return this[this.length - 1];
};

/**
 * @param {string[][]} plans
 */
export const solution = (plans) => {
  const ANSWER = [];

  const arr = plans
    .map((plan) => {
      const [h, m] = plan[1].split(":").map(Number);
      plan[1] = h * 60 + m;
      plan[2] = +plan[2];
      return plan;
    })
    .sort((a, b) => a[1] - b[1]);

  const stack = [];

  for (let i = 0; i < arr.length; ++i) {
    const plan = plans[i];

    if (stack.length === 0) {
      stack.push(plan);
      continue;
    }

    while (stack.length) {
      let interval = plan[1] - stack.peek[1];
      const sub = stack.peek[0];
      const spend = stack.peek[2];

      if (interval >= spend) {
        ANSWER.push(sub);
        interval -= spend;
        stack.pop();
      } else {
        stack.peek[2] -= interval;
        break;
      }
    }
  }

  while (stack.length) {
    ANSWER.push(stack.pop()[0]);
  }

  return ANSWER;
};

export const examples__arr = [
  {
    plans: [
      ["korean", "11:40", "30"],
      ["english", "12:10", "20"],
      ["math", "12:30", "40"],
    ],
    answer: ["korean", "english", "math"],
  },
  {
    plans: [
      ["science", "12:40", "50"],
      ["music", "12:20", "40"],
      ["history", "14:00", "30"],
      ["computer", "12:30", "100"],
    ],
    answer: ["science", "history", "computer", "music"],
  },
  {
    plans: [
      ["aaa", "12:00", "20"],
      ["bbb", "12:10", "30"],
      ["ccc", "12:40", "10"],
    ],
    answer: ["bbb", "ccc", "aaa"],
  },
];
