const Plan = class {
  constructor(name, time, spend) {
    this.name = name;
    const [h, m] = time.split(":").map(Number);
    this.time = h * 60 + m;
    this.spend = +spend;
  }
};

/**
 * @param {string[][]} plans
 */
export const solution = (plans) => {
  const answer = [];

  plans = plans
    .map((plan) => new Plan(...plan))
    .sort((a, b) => a.time - b.time);

  const stack = [];

  for (let i = 0; i < plans.length; ++i) {
    if (!stack.length) {
      stack.push(plans[i]);
      continue;
    }

    let cp = stack[stack.length - 1];
    let np = plans[i];
    let interval = np.time - cp.time;

    while (stack.length && interval > 0) {
      cp = stack[stack.length - 1];

      if (interval >= cp.spend) {
        answer.push(cp.name);
        interval -= cp.spend;
        stack.pop();
      } else {
        cp.spend -= interval;
        break;
      }
    }

    stack.push(np);
  }

  while (stack.length) {
    answer.push(stack.pop().name);
  }

  return answer;
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
