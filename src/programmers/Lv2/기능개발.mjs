Array.prototype.clear = function () {
  this.length = 0;
};

Array.prototype.getDeployCounts = function (list) {
  const results = [];

  this.push(list[0]);
  for (let i = 1, len = list.length; i < len; ++i) {
    if (this[0] <= list[i]) {
      results.push(this.length);
      this.length = 0;
    }
    this.push(list[i]);
  }
  results.push(this.length);
  this.length = 0;

  return new Array(...results);
}

export const solution = (progresses, speeds) => {
  progresses = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
  const stack = [];
  return stack.a(progresses);
};

export const other_solution = (progresses, speeds) => {
  let stack = [0];
  let remainingDays = []; // STACK(LIFO)
  const taskListLen = progresses.length;
  for (let i = 0; i < taskListLen; ++i) {
    remainingDays = [...remainingDays, Math.ceil((100 - progresses[i]) / speeds[i])];
  }

  let tgTask = remainingDays[0];
  for (let stackIdx = 0, taskIdx = 0; taskIdx < remainingDays.length; ++taskIdx) {
    if (tgTask >= remainingDays[taskIdx]) {
      ++stack[stackIdx];
    } else {
      tgTask = remainingDays[taskIdx];
      stack[++stackIdx] = 1;
    }
  }

  return stack;
};

export const examples__arr = [
  {
    progresses: [93, 30, 55],
    speeds: [1, 30, 5],
    answer: [2, 1],
  },
  {
    progresses: [95, 90, 99, 99, 80, 99],
    speeds: [1, 1, 1, 1, 1, 1],
    answer: [1, 3, 2],
  },
];
