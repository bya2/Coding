function isEnclose(
  _pairs = {
    "]": "[",
    ")": "(",
  }
) {
  const opens = Object.values(_pairs);
  const closes = Object.keys(_pairs);
  const arr = [];
  for (let i = 0, len = this.length - 1; i < len; ++i) {
    if (opens.includes(this[i])) {
      arr.push(this[i]);
    } else if (closes.includes(this[i])) {
      if (arr.pop() !== _pairs[this[i]]) return false;
    }
  }

  return arr.length === 0;
}

export const solution = (inputs = [""]) => {
  inputs.pop();
  return inputs.map((s) => (isEnclose.call(s) ? "yes" : "no")).join("\n");
};

export const examples = [
  {
    inputs: `So when I die (the [first] I will see in (heaven) is a score list).
    [ first in ] ( first out ).
    Half Moon tonight (At least it is better than no Moon at all].
    A rope may form )( a trail in a maze.
    Help( I[m being held prisoner in a fortune cookie factory)].
    ([ (([( [ ] ) ( ) (( ))] )) ]).
     .
    .`,
    answer: `yes
    yes
    no
    no
    no
    yes
    yes`,
  },
];
