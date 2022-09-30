export const solution = (land = [[0]]) => {
  const adjList = [
    [1, 2, 3],
    [0, 2, 3],
    [0, 1, 3],
    [0, 1, 2],
  ];

  const len = land.length;
  for (let i = 1; i < len; ++i) {
    for (let j = 0; j < 4; ++j) {
      land[i][j] += Math.max(...adjList[j].map((n) => land[i - 1][n]));
    }
  }

  return Math.max(...land[len - 1]);
};

export const hopscotch = (land, cols = 4) => {
  const adjIndexes = Array.from({ length: cols }, (_, i) => i).map((_, i, arr) => arr.filter((v) => v !== i));

  const len = land.length;

  for (let i = 1; i < len; ++i) {
    for (let j = 0; j < cols; ++j) {
      land[i][j] += Math.max(...adjIndexes[j].map((n) => land[i - 1][n]));
    }
  }

  return Math.max(...land[len - 1]);
};

// land[i][0] += Math.max(...[1, 2, 3].map((n) => land[i - 1][n]));
// land[i][1] += Math.max(...[0, 2, 3].map((n) => land[i - 1][n]));
// land[i][2] += Math.max(...[0, 1, 3].map((n) => land[i - 1][n]));
// land[i][3] += Math.max(...[0, 1, 2].map((n) => land[i - 1][n]));

export const fail_solution = (land = [[0]]) => {
  let arr = [];
  for (let i = 0, tmp = -1, len = land.length; i < len; ++i) {
    let max = tmp === 0 ? 1 : 0;
    for (let j = 1; j < 4; ++j) {
      if (land[i][j] > land[i][max] && tmp !== j) max = j;
    }
    arr.push(land[i][max]);
    tmp = max;
  }
  return arr.reduce((a, b) => a + b);
};

export const examples__arr = [
  {
    land: [
      // n행 4열
      [1, 2, 3, 5],
      [5, 6, 7, 8],
      [4, 3, 2, 1],
    ],
    answer: 16,
  },
];
