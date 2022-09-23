export const solution0 = (fees = [0], records = [""]) => {
  const MAX_TIME = 24 * 60 - 1;

  const inMap = new Map();
  const accMap = new Map();
  for (let i = 0, len = records.length; i < len; ++i) {
    let [time, number, status] = records[i].split(" ");
    let [h, m] = time.split(":").map((x) => +x);
    time = h * 60 + m;

    if (status === "IN") {
      inMap.set(number, time);
    } else {
      time -= inMap.get(number);
      accMap.set(number, accMap.has(number) ? accMap.get(number) + time : time);
      inMap.delete(number);
    }
  }

  for (let number of inMap.keys()) {
    const time = MAX_TIME - inMap.get(number);
    accMap.set(number, accMap.has(number) ? accMap.get(number) + time : time);
  }

  return [...accMap.keys()]
    .sort((a, b) => a - b)
    .map((n) => {
      const isExceed = accMap.get(n) > fees[0];
      if (isExceed) {
        return fees[1] + Math.ceil((accMap.get(n) - fees[0]) / fees[2]) * fees[3];
      } else {
        return fees[1];
      }
    });
};

// 기본요금(1) + [누적주차시간-기본시간(0) / 단위시간(2)] * 단위요금(3)

export const solution = (fees = [0], records = [""]) => {
  const MAX_TIME = 24 * 60 - 1;

  const map = new Map();
  for (let i = 0, len = records.length; i < len; ++i) {
    let [time, number, status] = records[i].split(" ");
    let [h, m] = time.split(":").map((x) => +x);
    time = h * 60 + m;
    time = MAX_TIME - time;
    if (status === "IN") {
      map.set(number, map.has(number) ? map.get(number) + time : time);
    } else {
      map.set(number, map.get(number) - time);
    }
  }

  return [...map.keys()]
    .sort((a, b) => a - b)
    .map((n) => {
      const isExceed = map.get(n) > fees[0];
      if (isExceed) {
        return fees[1] + Math.ceil((map.get(n) - fees[0]) / fees[2]) * fees[3];
      } else {
        return fees[1];
      }
    });
};

export const examples__arr = [
  {
    fees: [180, 5000, 10, 600],
    records: [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ],
    answer: [14600, 34400, 5000],
  },
  {
    fees: [120, 0, 60, 591],
    records: ["16:00 3961 IN", "16:00 0202 IN", "18:00 3961 OUT", "18:00 0202 OUT", "23:58 3961 IN"],
    answer: [0, 591],
  },
  {
    fees: [1, 461, 1, 10],
    records: ["00:00 1234 IN"],
    answer: [14841],
  },
];
