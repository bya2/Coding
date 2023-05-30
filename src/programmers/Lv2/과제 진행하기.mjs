Array.prototype.peek = function () {
  return this[this.length - 1];
};

/**
 * @param {string[][]} plans
 */
export const solution = (plans) => {
  const ANSWER = [];

  plans = plans
    .map((plan) => {
      const [h, m] = plan[1].split(":").map(Number);
      plan[1] = h * 60 + m;
      plan[2] = +plan[2];
      return plan;
    })
    .sort((a, b) => a[1] - b[1]);

  const STACK = [];

  for (const plan of plans) {
    if (STACK.length) {
      let cost = plan[1] - STACK.peek[1];
      while (STACK.length) {
        if (cost < STACK.peek[2]) {
          STACK.peek[2] -= cost;
          break;
        } else {
          const [sub, t, m] = STACK.pop();
          cost -= m;
          ANSWER.push(sub);
        }
      }
    } else {
      STACK.push(plan);
    }
  }

  while (STACK.length) {
    ANSWER.push(STACK.pop()[0]);
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
