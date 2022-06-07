const numMappings = [
  [0, "zero"],
  [1, "one"],
  [2, "two"],
  [3, "three"],
  [4, "four"],
  [5, "five"],
  [6, "six"],
  [7, "seven"],
  [8, "eight"],
  [9, "nine"],
];

export const solution = (s) => {
  const dir = new Map(numMappings);

  for (const [number, word] of dir.entries()) {
    let arr = s.split(word);
    s = arr.join(number);
  }

  return Number(s);
};

export const other_solution = (s) => {
  const dir = new Map(numMappings);

  for (const [number, word] of dir.entries()) {
    let reg = new RegExp(`${word}`, "g");
    s = s.replace(reg, number);
  }
  
  return Number(s);
};

export const examples__arr = [
  {
    s: "one4seveneight",
    answer: 1478,
  },
  {
    s: "23four5six7",
    answer: 234567,
  },
  {
    s: "2three45sixseven",
    answer: 234567,
  },
  {
    s: "123",
    answer: 123,
  },
];
