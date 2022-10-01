const keyPadPosMappingList = [
  [1, [0, 0]],
  [2, [0, 1]],
  [3, [0, 2]],
  [4, [1, 0]],
  [5, [1, 1]],
  [6, [1, 2]],
  [7, [2, 0]],
  [8, [2, 1]],
  [9, [2, 2]],
  [0, [3, 1]],
];

const touch = (_number, _hand, _map, _handPosList) => {
  switch (_number) {
    case 1:
    case 4:
    case 7:
      _handPosList[0] = _map.get(_number);
      return "L";
    case 3:
    case 6:
    case 9:
      _handPosList[1] = _map.get(_number);
      return "R";
    case 2:
    case 5:
    case 8:
    case 0:
      const keyPos = _map.get(_number);
      const diffList = [];

      for (const handPos of _handPosList) {
        let sum = 0;
        for (let i = 0; i <= 1; ++i) {
          sum += Math.abs(handPos[i] - keyPos[i]);
        }
        diffList.push(sum);
      }

      if (diffList[0] === diffList[1]) {
        switch (_hand) {
          case "left":
            _handPosList[0] = keyPos;
            return "L";
          case "right":
            _handPosList[1] = keyPos;
            return "R";
        }
      } else {
        if (diffList[0] < diffList[1]) {
          _handPosList[0] = keyPos;
          return "L";
        } else {
          _handPosList[1] = keyPos;
          return "R";
        }
      }
    default:
  }
};

export const solution = (numbers, hand) => {
  const map = new Map(keyPadPosMappingList);

  let touchListStr = "";
  const currPos = [
    [3, 0], // L
    [3, 2], // R
  ];

  for (const number of numbers) {
    touchListStr += touch(number, hand, map, currPos);
  }

  return touchListStr;
};

export const examples__arr = [
  {
    numbers: [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],
    hand: "right",
    answer: "LRLLLRLLRRL",
  },
  {
    numbers: [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],
    hand: "left",
    answer: "LRLLRRLLLRR",
  },
  {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    hand: "right",
    answer: "LLRLLRLLRL",
  },
];
