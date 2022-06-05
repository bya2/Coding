export const solution = (record) => {
  const msgs = [];

  const dir = record.reduce((map, str, i) => {
    const [behavior, uid, name] = str.split(" ");
    if (behavior === "Leave") return map;
    map.set(uid, name);
    return map;
  }, new Map());

  for (const str of record) {
    const [behavior, uid] = str.split(" ");

    switch (behavior) {
      case "Enter":
        msgs.push(`${dir.get(uid)}님이 들어왔습니다.`)
        continue;
      case "Leave":
        msgs.push(`${dir.get(uid)}님이 나갔습니다.`)
        continue;
      default:
        continue;
    }
  }

  return msgs;
};

export const other_solution = (record) => {
  // codes...
};

export const examples__arr = [
  {
    record: [
      "Enter uid1234 Muzi",
      "Enter uid4567 Prodo",
      "Leave uid1234",
      "Enter uid1234 Prodo",
      "Change uid4567 Ryan", //
    ],
    answer: [
      "Prodo님이 들어왔습니다.",
      "Ryan님이 들어왔습니다.",
      "Prodo님이 나갔습니다.",
      "Prodo님이 들어왔습니다.", //
    ],
  },
];
