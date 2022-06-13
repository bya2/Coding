export const solution = (_lines) => {
  const msTimes = [];
  const linesLen = _lines.length;
  let amounts = [1];

  for (let i = 0; i < linesLen; ++i) {
    let [, completionTime, processingTime] = _lines[i].split(" ");
    let [hh, mm, ss] = completionTime.split(":");
    completionTime = (hh * 3600 + mm * 60 + ss * 1) * 1000;
    processingTime = processingTime.slice(0, -1) * 1000;
    let startTime = completionTime - processingTime + 1;
    msTimes.push([startTime, completionTime]);
  }

  const msTimesLen = msTimes.length;
  for (let i = 0; i < msTimesLen - 1; ++i) {
    let amount = 1;
    for (let j = i + 1; j < msTimesLen; ++j) {
      if (Math.abs(msTimes[j][0] - msTimes[i][1]) < 1000) {
        ++amount;
      }
    }
    amounts.push(amount);
  }

  return Math.max(...amounts);
};

export const examples__arr = [
  {
    lines: ["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"],
    answer: 1,
  },
  {
    lines: ["2016-09-15 01:00:04.002 2.0s", "2016-09-15 01:00:07.000 2s"],
    answer: 2,
  },
  {
    lines: [
      "2016-09-15 20:59:57.421 0.351s",
      "2016-09-15 20:59:58.233 1.181s",
      "2016-09-15 20:59:58.299 0.8s",
      "2016-09-15 20:59:58.688 1.041s",
      "2016-09-15 20:59:59.591 1.412s",
      "2016-09-15 21:00:00.464 1.466s",
      "2016-09-15 21:00:00.741 1.581s",
      "2016-09-15 21:00:00.748 2.31s",
      "2016-09-15 21:00:00.966 0.381s",
      "2016-09-15 21:00:02.066 2.62s",
    ],
    answer: 7,
  },
];
