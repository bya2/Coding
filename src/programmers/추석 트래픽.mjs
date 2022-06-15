// 로그 데이터 처리: 데이터의 시작점과 끝점을 이용해서 한 번의 루프만으로 처리 가능
export const solution = (_lines) => {
  let msTimes = [];

  for (const line of _lines) {
    const [, S, T] = line.split(" ");
    const [hour, minute, second] = S.split(":");
    const S_ms = 1000 * (hour * 3600 + minute * 60 + second * 1);
    const T_ms = 1000 * T.slice(0, -1);
    msTimes.push([1, S_ms - T_ms + 1]);
    msTimes.push([0, S_ms + 1000]);
  }

  msTimes.sort((a, b) => {
    if (a[1] - b[1] < 0) return -1;
    return a - b;
  });

  let amount = 0, count = 0;
  for (const [state] of msTimes) {
    if (state) {
      ++count;
    } else {
      amount = amount > count ? amount : count;
      --count;
    }
  }

  return amount;
};

export const other_solution = (_lines) => {
  let msTimes = [];
  let maxAmount = 1;

  for (const line of _lines) {
    const [, S, T] = line.split(" ");
    const [hour, minute, second] = S.split(":");
    const S_ms = 1000 * (hour * 3600 + minute * 60 + second);
    const T_ms = 1000 * T.slice(0, -1);
    console.log(T_ms);
    msTimes.push([S_ms - T_ms + 1, S_ms]);
  }

  const msTimesLen = msTimes.length;
  for (let i = 0; i < msTimesLen - 1; ++i) {
    const prevC = msTimes[i][1];
    let range = [prevC, prevC];
    let amount = 0;

    for (let j = i + 1; j < msTimesLen; ++j) {
      const nextS = msTimes[j][0];
      if (nextS < range[0] && Math.abs(nextS - range[1]) <= 1000) {
        ++amount;
        if (nextS < range[0]) range[0] = nextS;
      }

      if (nextS > range[1] && Math.abs(nextS - range[0]) <= 1000) {
        ++amount;
        if (nextS > range[1]) range[1] = nextS;
      }
    }

    maxAmount = maxAmount < amount ? amount : maxAmount;
  }

  return maxAmount;
};

export const other_solution2 = (_lines) => {
  const msTimes = [];
  const linesLen = _lines.length;
  let maxAmount = 1;

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
    const prevTime = msTimes[i][0];
    let minTime = prevTime;
    let maxTime = prevTime;
    for (let j = i + 1; j < msTimesLen; ++j) {
      const nextTime = msTimes[j][0];

      if (nextTime > minTime && nextTime < minTime + 1000) {
      }

      if (Math.abs(msTimes[j][0] - msTimes[i][1]) < 1000) {
        ++amount;
      }
    }
    maxAmount = maxAmount < amount ? amount : maxAmount;
  }

  return maxAmount;
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
