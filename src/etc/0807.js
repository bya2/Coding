export const solution = (names, scores) => {
  const std_scores__obj = scores.reduce((obj, score__arr, i) => {
    if (Math.max(...score__arr) - Math.min(...score__arr) >= 40) {
      console.log("40: ", names[i]);
      return obj;
    }

    let tmp_names = [...names];
    tmp_names.splice(i, 1);

    for (let j = 0; j < score__arr.length; ++j) {
      if (obj[tmp_names[j]]) {
        obj[tmp_names[j]].push(score__arr[j]);
      } else {
        obj[tmp_names[j]] = [score__arr[j]];
      }
    }

    return obj;
  }, {});

  console.log(std_scores__obj);

  let answer = Object.values(std_scores__obj).map((std_scores__arr) => {
    const score__max = Math.max(...std_scores__arr);
    const score__min = Math.min(...std_scores__arr);
    const score__avg =
      std_scores__arr.reduce((num_sum, curr_num) => {
        if (curr_num === score__max || curr_num === score__min) {
          return num_sum;
        } else {
          return num_sum + curr_num;
        }
      }, 0) /
      (std_scores__arr.length - 2);

    return Math.round(score__avg * 100) / 100;
  });

  const tmp = answer.pop();
  answer = [tmp, ...answer];

  return answer;
};

export const examples__arr = [
  {
    names: ["김민기", "김성은", "장수인", "허강민", "신이종"],
    scores: [
      [100, 86, 88, 90.4],
      [100, 71, 86, 90],
      [88.8, 99.9, 88.8, 77.7],
      [22, 44, 66, 88],
      [0.1, 0.3, 0.5, 0.9],
    ],
    answer: [88.8, 99.9, 71, 87, 90],
  },
];
