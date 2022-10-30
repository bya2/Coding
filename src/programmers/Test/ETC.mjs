/**
 * @param {string[]} id_list 이용자 ID
 * @param {string[]} report 각 이용자가 신고한 이용자의 ID 정보
 * @param {number} k 정지 기준이 되는 신고 횟수
 * @return {number[]} 각 유저별로 처리 결과 메일을 받은 횟수 배열
 */
 export const solution1 = (id_list, report, k) => {
  const dict = id_list.reduce((obj, t) => ((obj[t] = { count: 0, received: 0, list: {} }), obj), {});
  const checkUsers = new Set();

  for (let s of report) {
    const [id, tg] = s.split(" ");
    if (!dict[id].list[tg]) {
      dict[id].list[tg] = true;
      dict[id].count++;
      dict[tg].received++;

      if (dict[tg].received >= k) {
        checkUsers.add(tg);
      }
    }
  }

  return id_list.map((id) => {
    let count = 0;
    for (let tg of checkUsers) {
      if (dict[id].list[tg]) count++;
    }
    return count;
  });
};

export const examples__arr1 = [
  {
    id_list: ["muzi", "frodo", "apeach", "neo"],
    report: ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    k: 2,
    answer: [2, 1, 1, 0],
  },
  {
    id_list: ["con", "ryan"],
    report: ["ryan con", "ryan con", "ryan con", "ryan con"],
    k: 3,
    answer: [0, 0],
  },
];

/**
 * @param {string} X
 * @param {string} Y
 * @return {string}
 */
export const solution = (X, Y) => {
  const xDict = [...X].reduce((obj, t) => ((obj[t] = (obj[t] || 0) + 1), obj), {});
  const yDict = [...Y].reduce((obj, t) => ((obj[t] = (obj[t] || 0) + 1), obj), {});

  // const xList = [...X].map((e) => +e).sort((a, b) => a - b);
  // const yList = [...Y].map((e) => +e).sort((a, b) => a - b);

  // for (let i = 0; i < xList.length; ) {
  //   console.log(xList);
  //   console.log(yList);
  //   console.log();
  //   if (xList[i] === yList[i]) i++;
  //   else if (xList[i] < yList[i]) yList.splice(i, 1);
  //   else xList.splice(i, 1);
  // }

  // console.log(xList);
  // console.log(yList);

  const xList = Object.keys(xDict)
    .map((e) => +e)
    .sort((a, b) => a - b);

  const yList = Object.keys(yDict)
    .map((e) => +e)
    .sort((a, b) => a - b);

  for (let i = 0; i < xList.length; ) {
    console.log(xList);
    console.log(yList);
    console.log();
    if (xList[i] === yList[i]) i++;
    else if (xList[i] < yList[i]) yList.splice(i, 1);
    else xList.splice(i, 1);
  }
};

export const examples__arr = [
  {
    X: "100",
    Y: "2345",
    answer: "-1",
  },
  {
    X: "100",
    Y: "203045",
    answer: "0",
  },
  {
    X: "100",
    Y: "123450",
    answer: "10",
  },
  // {
  //   X: "12321",
  //   Y: "42531",
  //   answer: "321",
  // },
  // {
  //   X: "5525",
  //   Y: "1255",
  //   answer: "552",
  // },`
];
