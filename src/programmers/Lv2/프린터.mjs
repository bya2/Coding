export const solution = (priorities, location) => {
  let num = 1;
  const docList = priorities.map((pri, i) => [i, pri]);

  while (docList.length) {
    const docJ = docList.shift();
    const priDocIdx = docList.findIndex((doc) => doc[1] > docJ[1]);

    if (priDocIdx === -1) {
      if (docJ[0] === location) {
        return num;
      }
      ++num;
    } else {
      docList.push(docJ);
    }
  }
};

export const examples__arr = [
  {
    priorities: [2, 1, 3, 2],
    location: 2,
    answer: 1,
  },
  {
    priorities: [1, 1, 9, 1, 1, 1],
    location: 0,
    answer: 5,
  },
];
