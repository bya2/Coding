export const solution1 = (s = "") => {
  return +s;
};

export const solution = (survey, choices) => {
  const N = survey.length;
  const types = ["RT", "CF", "JM", "AN"];
  const scores = [0, 3, 2, 1, 0, 1, 2, 3];

  let dict = {};
  for (let i = 0; i < N; ++i) {
    let choice = choices[i];
    let score = scores[choice];

    if (choice < 4) {
      dict[survey[i][0]] = dict[survey[i][0]] ? dict[survey[i][0]] + score : score;
    } else if (choices[i] === 4) {
    } else {
      dict[survey[i][1]] = dict[survey[i][1]] ? dict[survey[i][1]] + score : score;
    }
  }

  let result = "";
  for (let i = 0; i < 4; ++i) {
    result += (dict[types[i][0]] || 0) >= (dict[types[i][1]] || 0) ? types[i][0] : types[i][1];
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
