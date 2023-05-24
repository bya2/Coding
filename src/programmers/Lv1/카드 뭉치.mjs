export const solution = (cards1 = [""], cards2 = [""], goal = [""]) => {
  let i = 0,
    j = 0;

  for (const c of goal) {
    if (cards1[i] === c) i++;
    else if (cards2[j] === c) j++;
    else return "No";
  }

  return "Yes";
};

export const examples__arr = [
  {
    cards1: ["i", "drink", "water"],
    cards2: ["want", "to"],
    goal: ["i", "want", "to", "drink", "water"],
    answer: "Yes",
  },
  {
    cards1: ["i", "water", "drink"],
    cards2: ["want", "to"],
    goal: ["i", "want", "to", "drink", "water"],
    answer: "No",
  },
];
