export const success_solution = (skills = "", trees = [""]) => {
  let count = trees.length;

  for (let tree of trees) {
    const obj = {};
    obj[skills[0]] = [false, null];
    for (let i = 1, len = skills.length; i < len; ++i) {
      obj[skills[i]] = [false, skills[i - 1]];
    }

    for (let i = 0, len = tree.length; i < len; ++i) {
      if (obj.hasOwnProperty(tree[i])) {
        const curr = tree[i];
        const prev = obj[curr][1];

        if (prev && !obj[prev][0]) {
          count--;
          break;
        } else {
          obj[curr][0] = true;
        }
      }
    }
  }

  return count;
};

Object.defineProperty(Array.prototype, "isInOrderOf", {
  value: function (arr_permutation) {
    for (let i = 0, len = this.length; i < len; ++i) {
      if (!arr_permutation.includes(this[i])) continue;
      if (this[i] === arr_permutation.shift()) continue;
      return false;
    }
    return true;
  },
});

export const solution = (skill, skill_trees) => {
  // const isCorrect = (s) => {
  //   const test = skill.split("");

  //   for (let i = 0; i < s.length; ++i) {
  //     if (!skill.includes(s[i])) continue;
  //     if (s[i] === test.shift()) continue;
  //     return false;
  //   }
  //   return true;
  // };
  skill = skill.split("");
  return skill_trees.filter((s) => s.split("").isInOrderOf([...skill])).length;
};

export const examples__arr = [
  {
    skill: "CBD",
    skill_trees: ["BACDE", "CBADF", "AECB", "BDA"],
    answer: 2,
  },
];
