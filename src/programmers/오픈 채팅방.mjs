export const solution = (record) => {
  const msgs = [];

  const dir = record.reduce((map, str) => {
    const [behavior, uid, name] = str.split(" ");
    if (behavior === "Leave") return map;
    map.set(uid, name);
    return map;
  }, new Map());

  for (const str of record) {
    const [behavior, uid] = str.split(" ");

    switch (behavior) {
      case "Enter":
        msgs.push(`${dir.get(uid)}님이 들어왔습니다.`);
        continue;
      case "Leave":
        msgs.push(`${dir.get(uid)}님이 나갔습니다.`);
        continue;
      default:
        continue;
    }
  }

  return msgs;
};

export const other_solution = (record) => {
  const msgs = [];
  const actions = [];
  const stateMapping = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };
  const dir = new Map();

  for (const str of record) {
    const [behavior, uid, name] = str.split(" ");
    if (behavior !== "Change") actions.push([behavior, uid]);
    if (behavior !== "Leave") dir.set(uid, name);
  }

  for (const [behavior, uid] of actions) {
    msgs.push(`${dir.get(uid)}${stateMapping[behavior]}`);
  }

  return msgs;
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
