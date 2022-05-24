export const solution = (id_list, report, k) => {
  const id_map = id_list.reduce((obj, id) => {
    obj[id] = 0;
    return obj;
  }, {});

  const r_map = report.reduce((obj, str) => {
    const [reporter, target] = str.split(" ");
    if (!obj[reporter]) {
      obj[reporter] = [];
    }
    if (!obj[target]) {
      obj[target] = [];
    }

    obj[target].push(reporter);
    return obj;
  }, {});

  for (const id of id_list) {
    const dupl_reporters = r_map[id];
    const reporters = new Set(dupl_reporters);
    const received_n = reporters.size;

    if (received_n >= k) {
      for (const reporter of reporters) {
        id_map[reporter]++;
      }
    }
  }

  const result = Object.values(id_map);

  return result;
};

export const examples__arr = [
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
