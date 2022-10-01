export const solution = (survey, choices) => {
  const NUM = survey.length;
  const TYPES = ["RT", "CF", "JM", "AN"];
  const SCORES = [0, 3, 2, 1, 0, 1, 2, 3];

  let dir = {};
  for (let i = 0; i < NUM; ++i) {
    let choice = choices[i];
    let score = SCORES[choice];

    if (choice < 4) {
      dir[survey[i][0]] = dir[survey[i][0]] ? dir[survey[i][0]] + score : score;
    } else if (choices[i] === 4) {
    } else {
      dir[survey[i][1]] = dir[survey[i][1]] ? dir[survey[i][1]] + score : score;
    }
  }

  let result = "";
  for (let i = 0; i < 4; ++i) {
    result += (dir[TYPES[i][0]] || 0) >= (dir[TYPES[i][1]] || 0) ? TYPES[i][0] : TYPES[i][1];
  }

  return result;
};

export const examples__arr = [
  {
    survey: ["AN", "CF", "MJ", "RT", "NA"],
    choices: [5, 3, 2, 7, 5],
    answer: "TCMA",
  },
  {
    survey: ["TR", "RT", "TR"],
    choices: [7, 1, 3],
    answer: "RCJA",
  },
];
