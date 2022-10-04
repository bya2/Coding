import NMap from "../../logic/NumberMap.mjs";

export const solution = (participant = [""], completion = [""]) => {
  return participant.find(
    (p) => !completion[p]--,
    completion.map((c) => (completion[c] = (completion[c] | 0) + 1))
  );
};

export const solution3 = (participant, completion) => {
  const dict = NMap.from(completion);
  return participant.find((s) => {
    if (dict.get(s)) dict.set(s, dict.get(s) - 1);
    else return true;
  });
};

export const solution2 = (participant, completion) => {
  const completionDic = getDicOfNumberFromArr(completion);
  const incompletion = findOneInArrUsingMap(participant, completionDic);
  return incompletion;
};

export const other_solution = (participant, completion) => {
  const completionDic = completion.reduce((obj, person) => ((obj[person] = obj[person] ? obj[person] + 1 : 1), obj), {});
  const incompletion = participant.find((person) => {
    if (completionDic[person]) --completionDic[person];
    else return true;
  });
  return incompletion;
};

export const examples__arr = [
  {
    participant: ["leo", "kiki", "eden"],
    completion: ["eden", "kiki"],
    answer: "leo",
  },
  {
    participant: ["marina", "josipa", "nikola", "vinko", "filipa"],
    completion: ["josipa", "filipa", "marina", "nikola"],
    answer: "vinko",
  },
  {
    participant: ["mislav", "stanko", "mislav", "ana"],
    completion: ["stanko", "ana", "mislav"],
    answer: "mislav",
  },
];
